"use client";

import React from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { dispatch, items } = React.useContext(CartContext);

  const totalCartPrice = items.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className="text-white">
      <p className="text-lg font-bold">
        Hej Phil denne kode er bare til at vise dig hvordan du kan bruge context
        til cart siden. Du skal gå ind og tilføje skins for at se dem her. Fjern
        denne kode og lav din egen.
      </p>
      <div className="mt-10 flex flex-col">
        <h1 className="text-2xl">Skins i kurv:</h1>
        <div className="px-2 flex flex-col gap-5">
          {items.map((item) => (
            <div
              className="flex flex-row items-center gap-5 mt-3"
              key={item.id}
            >
              <div className="flex flex-col">
                <span>name: {item.name}</span>
                <span>price: ${item.price}</span>
              </div>
              -
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
            {totalCartPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
