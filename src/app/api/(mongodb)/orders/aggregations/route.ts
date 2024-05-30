import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb/config";
import mongoose from "mongoose";
import Order from "@/lib/mongodb/models/Order";

export async function GET(): Promise<NextResponse> {
  await dbConnect();

  const aggregationPipeline = [
    {
      $unwind: "$items",
    },
    {
      $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalQuantity: { $sum: 1 }, // Count each item once
        totalRevenue: { $sum: { $toDouble: "$items.price" } },
        averageOrderValue: { $avg: { $toDouble: "$total" } },
        maxOrderValue: { $max: { $toDouble: "$total" } },
        minOrderValue: { $min: { $toDouble: "$total" } },
        uniqueCustomers: { $addToSet: "$_id" }, // Assuming customer ID is part of the order _id
        uniqueProductsSold: { $addToSet: "$items.id" },
      },
    },
    {
      $project: {
        _id: 0,
        totalOrders: 1,
        totalQuantity: 1,
        totalRevenue: 1,
        averageOrderValue: 1,
        maxOrderValue: 1,
        minOrderValue: 1,
        uniqueCustomers: { $size: "$uniqueCustomers" },
        uniqueProductsSold: { $size: "$uniqueProductsSold" },
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
