"use client";

import React from "react";
import Image from "next/image";
import { CartContext } from "@/context/cartContext";
import axios from "axios";
import { useToast } from "@/context/use-toast";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { dispatch, items } = React.useContext(CartContext);
  const { toast } = useToast();
  const router = useRouter();

  const totalCartPrice = items.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  const handleBuyNow = async () => {
    const res = await axios.post("http://localhost:3000/api/orders", {
      items: items,
      total: totalCartPrice,
    });
    if (res.status === 200) {
      dispatch({ type: "CLEAR" });
      toast({
        title: "Order placed",
        description: "Your order has been placed",
        className: "text-white",
      });
      router.push("/");
    } else {
      toast({
        title: "Error",
        description: "Something went wrong",
        className: "text-white",
      });
    }
  };

  return (
    <div className="text-white container mx-auto py-10">
      <div className="mt-10 flex flex-col">
        <h1 className="text-2xl mb-6">Skins i kurv:</h1>
        <div className="px-2 flex flex-col gap-5">
          {items.map((item) => (
            <div
              className="flex flex-row items-center gap-5 mt-3 bg-[#33383a] p-4 rounded-lg"
              key={item.id}
            >
              <div className="flex-shrink-0">
                <div className="relative h-40 w-40">
                  <img src={item.src} alt={`image of ${item.name}`} />
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <span className="text-xl font-bold">{item.name}</span>
                <span className="text-lg">${item.price}</span>
              </div>
              <button
                className="bg-red-500 w-20 h-10"
                onClick={() =>
                  dispatch({ type: "REMOVE", payload: { id: item.id } })
                }
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-5">
            <span className="font-bold">Total Cart Price:</span> $
            {totalCartPrice.toFixed(2)}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#48a9cb] hover:bg-[#367e98] h-10 rounded-lg flex justify-center items-center mt-6">
        <button
          className="w-full h-full text-white"
          onClick={() => handleBuyNow()}
        >
          Place order
        </button>
      </div>
    </div>
  );
};

export default Cart;
