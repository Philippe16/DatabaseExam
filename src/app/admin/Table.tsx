"use client";

import { Order, OrderStats } from "@/types/order.t";
import { CaretLeftIcon, CaretRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

const Table = ({
  orders,
  orderStats,
}: {
  orders: Order[];
  orderStats: OrderStats;
}) => {
  const [pageination, setPageination] = React.useState<number>(1);
  const ordersPerPage = 5;

  const startIndex = (pageination - 1) * ordersPerPage;
  const endIndex = startIndex + ordersPerPage;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  return (
    <>
      <div className="py-10">
        <table className="w-full my-0 align-middle border-red-200">
          <thead className="align-bottom">
            <tr className="font-semibold text-[0.95rem] text-gray-100">
              <th className="pb-3 text-start min-w-[205px]">Items</th>
              <th className="pb-3 text-start min-w-[100px]">Total price</th>
              <th className="pb-3 pr-12 text-start min-w-[125px]">
                Order date
              </th>
              <th className="pb-3 pr-10 text-start w-[200px] ">Order status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b border-dashed last:border-b-0"
              >
                <td className="py-3">
                  <div className="flex flex-row gap-5">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex flex-col items-center">
                        <img src={item.src} width={50} height={50} alt="skin" />
                        <p className="text-xs truncate w-[50px]">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="py-3 pr-0">${order.total.toFixed(2)}</td>
                <td className="py-3">10/20 - 24</td>
                <td className="py-3">
                  <button className="rounded-md px-4 py-3 cursor-default text-blue-500 bg-blue-100 text-sm flex items-center justify-center">
                    In Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-row gap-10 text-sm">
          <div className="flex flex-col">
            <div>Total Orders: {orderStats.totalOrders}</div>
            <div>Total Quantity: {orderStats.totalQuantity}</div>
          </div>
          <div className="flex flex-col">
            <div>Total Revenue: ${orderStats.totalRevenue.toFixed(2)}</div>
            <div>Average Order: ${orderStats.averageOrderValue.toFixed(2)}</div>
          </div>
          <div className="flex flex-col">
            <div>Highest Order: ${orderStats.maxOrderValue.toFixed(2)}</div>
            <div>Lowest Order: ${orderStats.minOrderValue.toFixed(2)}</div>
          </div>
          <div className="flex flex-col">
            <div>unique customers: {orderStats.uniqueCustomers}</div>
            <div>unique products: {orderStats.uniqueProductsSold}</div>
          </div>
        </div>
        <Pageination
          pageination={pageination}
          setPageination={setPageination}
          totalPages={Math.ceil(orders.length / ordersPerPage)}
        />
      </div>
    </>
  );
};

const Pageination = ({
  pageination,
  setPageination,
  totalPages,
}: {
  pageination: number;
  setPageination: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  const pageBack = () => {
    pageination > 1 && setPageination(pageination - 1);
  };

  const pageNext = () => {
    pageination < totalPages && setPageination(pageination + 1);
  };

  return (
    <div className="flex gap-5 items-center">
      <p className="text-gray-200">
        Page: {pageination}/{totalPages}
      </p>
      <button
        onClick={pageBack}
        className="bg-[#343a3b] px-3 py-2 rounded-md"
        disabled={pageination === 1}
      >
        <CaretLeftIcon />
      </button>
      <button
        onClick={pageNext}
        className="bg-[#343a3b] px-3 py-2 rounded-md"
        disabled={pageination === totalPages}
      >
        <CaretRightIcon />
      </button>
    </div>
  );
};

export default Table;
