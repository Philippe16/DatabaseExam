"use client";

import { CartContext } from "@/app/context/cartContext";
import { Skin } from "@/types/skins.t";
import Image from "next/image";
import React from "react";

const SkinPanel = ({ skin }: { skin: Skin }) => {
  const { dispatch } = React.useContext(CartContext);

  const addItem = () => {
    console.log("adding item");
    dispatch({ type: "ADD", payload: { items: [skin] } });
  };

  return (
    <div className="w-[300px] h-[300px] relative group cursor-pointer">
      <div className="w-full h-full bg-[#33383a] flex py-10 items-center flex-col gap-5 transform translate-y-4 group-hover:translate-y-0 transition-transform ease-in-out duration-100">
        <div className="w-full flex justify-center">{skin.name}</div>
        <div className="flex justify-center items-center">
          <div className="relative h-40 w-60 flex">
            <Image src={skin.src} fill alt="image of skin" />
          </div>
        </div>
        <div className="flex flex-col">${skin.price}</div>
      </div>
      <div className="w-full bg-[#48a9cb] hover:bg-[#367e98] h-10 rounded-b-lg flex justify-center items-center opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-transform ease-in-out duration-100">
        <button className="w-full h-full" onClick={addItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SkinPanel;
