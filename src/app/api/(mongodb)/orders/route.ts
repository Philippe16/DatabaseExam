import { NextRequest, NextResponse } from "next/server";
import Order, { IOrder } from "@/lib/mongodb/models/Order";
import dbConnect from "@/lib/mongodb/config";
import { Skin } from "@/types/skins.t";

export async function GET(): Promise<NextResponse> {
  await dbConnect();
  try {
    const orders: IOrder[] = await Order.find();

    // Return the list of orders
    return new NextResponse(JSON.stringify(orders), {
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

export async function POST(req: NextRequest): Promise<NextResponse> {
  await dbConnect();
  try {
    const { items, total }: { items: Skin[]; total: number } = await req.json();

    const newOrder: IOrder = new Order({
      items,
      total,
    });
    await newOrder.save();

    return new NextResponse(
      JSON.stringify({
        message: "Order created successfully",
        order: newOrder,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    // Return error response with status code 500
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
