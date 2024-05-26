// getOrder/route.ts
import { NextRequest, NextResponse } from "next/server";
import Order, { IOrder } from "@/lib/mongodb/models/Order";

export default async function route(request: NextRequest, { params }: { params: { id?: string } }) {
  try {
    if (params.id) {
      // If ID is provided, fetch a specific order
      const orderId = params.id;
      const order: IOrder | null = await Order.findById(orderId);

      if (!order) {
        // Return 404 if order is not found
        return new NextResponse(JSON.stringify({ message: "Order not found" }), {
          status: 404,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      // Return the order if found
      return new NextResponse(JSON.stringify(order), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      // If no ID is provided, fetch all orders
      const orders: IOrder[] = await Order.find();

      // Return the list of orders
      return new NextResponse(JSON.stringify(orders), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    // Return error response if something goes wrong
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
