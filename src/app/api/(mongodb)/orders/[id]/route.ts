import { NextRequest, NextResponse } from "next/server";
import Order, { IOrder } from "@/lib/mongodb/models/Order";
import dbConnect from "@/lib/mongodb/config";

// If ID is provided, fetch a specific order and if no ID is provided, fetch all orders
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  await dbConnect();
  try {
    const orderId = params.id;
    const order: IOrder | null = await Order.findById(orderId);

    if (!order) {
      return new NextResponse(JSON.stringify({ message: "Order not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // Return the order if found
    return new NextResponse(JSON.stringify(order), {
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
