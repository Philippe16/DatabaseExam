import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb/config";
import Order from "@/lib/mongodb/models/Order";

export async function GET(): Promise<NextResponse> {
  await dbConnect();

  const aggregationPipeline = [
    {
      "$unwind": "$items", // Break apart the items array in each order
    },
    {
      "$group": {
        // Group by Order ID
        "_id": "$_id",
        "totalQuantity": { "$sum": 1 }, // Count each item once per order
        "totalRevenue": { "$sum": { "$toDouble": "$items.price" } },
        "orderTotal": { "$first": { "$toDouble": "$total" } },
        "customerId": { "$first": "$_id" }, // Assuming _id is customer ID
        "products": { "$addToSet": "$items.id" },
      },
    },
    {
      "$group": {
        // Group All Orders Together
        "_id": null,
        "totalOrders": { "$sum": 1 },
        "totalQuantity": { "$sum": "$totalQuantity" },
        "totalRevenue": { "$sum": "$totalRevenue" },
        "averageOrderValue": { "$avg": "$orderTotal" },
        "maxOrderValue": { "$max": "$orderTotal" },
        "minOrderValue": { "$min": "$orderTotal" },
        "uniqueCustomers": { "$addToSet": "$customerId" },
        "uniqueProductsSold": { "$addToSet": "$products" },
      },
    },
    {
      "$project": {
        // output to include only the desired fields
        "_id": 0,
        "totalOrders": 1,
        "totalQuantity": 1,
        "totalRevenue": 1,
        "averageOrderValue": 1,
        "maxOrderValue": 1,
        "minOrderValue": 1,
        "uniqueCustomers": { "$size": "$uniqueCustomers" },
        "uniqueProductsSold": { "$size": "$uniqueProductsSold" },
      },
    },
  ];

  try {
    const aggregationResult = await Order.aggregate(aggregationPipeline);
    const result = aggregationResult[0];
    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
