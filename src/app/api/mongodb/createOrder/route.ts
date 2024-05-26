// createOrder.ts
import { NextRequest, NextResponse } from "next/server";
import Order, { IOrder } from "@/lib/mongodb/models/Order";
import { Skin } from "@/types/skins.t";

export default async function createOrder(request: NextRequest) {
  try {
    const { items, total }: { items: Skin[], total: number } = await request.json();
    
    // Create a new order document
    const newOrder: IOrder = new Order({
      items,
      total
    });

    // Save the order to the database
    await newOrder.save();

    return new NextResponse(JSON.stringify({
      message: "Order created successfully",
      order: newOrder
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    // Return error response with status code 500
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
