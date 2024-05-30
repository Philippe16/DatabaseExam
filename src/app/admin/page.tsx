import React from "react";
import Image from "next/image";
import axios from "axios";
import { Order, OrderStats } from "@/types/order.t";
import Table from "./Table";

const AdminPage = async () => {
  const orders = await axios.get<Order[]>(`http://localhost:3000/api/orders/`);
  const orderStats = await axios.get<OrderStats>(
    "http://localhost:3000/api/orders/aggregations"
  );

  return (
    <div className="w-full h-screen flex justify-center text-gray-100">
      <div className="flex flex-col w-full items-center">
        <div className="py-10 text-3xl">
          <h1>Welcome Admin</h1>
        </div>
        <div className="w-full flex justify-center ">
          <div className="bg-[#232728] w-4/5 h-auto  rounded-md">
            <div className="w-full h-full p-5">
              <div className="flex flex-col font-bold text-xl">
                Order List
                <p className="font-normal text-sm text-gray-200">
                  Every order from the shop
                </p>
              </div>
              <Table orders={orders.data} orderStats={orderStats.data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
