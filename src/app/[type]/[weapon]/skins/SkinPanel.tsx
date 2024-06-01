"use client";

import { CartContext } from "@/context/cartContext";
import { useToast } from "@/context/use-toast";
import { Rating } from "@/types/rating.t";
import { Skin } from "@/types/skins.t";
import { DotsVerticalIcon, StarFilledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const SkinPanel = ({ skin }: { skin: Skin }) => {
  const { dispatch } = React.useContext(CartContext);
  const { toast } = useToast();
  const [rateModal, setRateModal] = React.useState(false);
  const [hoverRating, setHoverRating] = React.useState(0);

  const addItem = () => {
    dispatch({ type: "ADD", payload: { items: [skin] } });
    toast({
      title: "Item added",
      description: `${skin.name} has been added to your cart`,
      className: "text-white",
    });
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = async (index: number) => {
    const response = await axios.post<Rating>(
      "http://localhost:3000/api/rate",
      {
        skin: skin,
        rating: index,
      }
    );

    toast({
      title: "Rating sent",
      description: `You rated ${skin.name} ${index} stars`,
      className: "text-white",
    });
  };

  const getStarColorClass = (index: number) => {
    const effectiveRating = hoverRating;
    if (effectiveRating >= 4) {
      return "text-green-500";
    } else if (effectiveRating === 3) {
      return "text-yellow-500";
    } else if (effectiveRating >= 1) {
      return "text-red-500";
    }
    return "";
  };

  return (
    <div
      className="w-[300px] h-[300px] relative group cursor-pointer"
      onMouseLeave={() => setRateModal(false)}
    >
      <div className="w-full h-full bg-[#33383a] flex py-10 items-center flex-col gap-5 transform translate-y-4 group-hover:translate-y-0 transition-transform ease-in-out duration-100">
        <div className="w-full flex justify-center">{skin.name}</div>
        <div className="flex justify-center items-center">
          <div className="relative h-40 w-60 flex">
            <Image src={skin.src} fill alt="image of skin" />
          </div>
        </div>
        <div className="flex flex-col">${skin.price}</div>
        {rateModal && (
          <div className="absolute bg-[#3b4142] w-full h-[100px] bottom-0">
            <div className="flex flex-col gap-3 p-3">
              <div className="font-bold">Rate this skin</div>
              <div
                className="flex flex-row gap-1"
                onMouseLeave={handleMouseLeave}
              >
                {[1, 2, 3, 4, 5].map((index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onClick={() => handleClick(index)}
                  >
                    {hoverRating >= index ? (
                      <StarFilledIcon
                        className={`w-7 h-7 ${getStarColorClass(index)}`}
                      />
                    ) : (
                      <Star className="w-7 h-7" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full bg-[#48a9cb] h-12 rounded-b-lg flex justify-center items-center opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-transform ease-in-out duration-100">
        <button
          className="w-full h-full hover:bg-[#367e98] rounded-bl-lg"
          onClick={addItem}
        >
          Add to cart
        </button>
        <button
          onClick={() => setRateModal(!rateModal)}
          className="w-12 h-full border-l-[1px] hover:bg-[#367e98] rounded-br-lg border-[#1d2021] flex items-center justify-center"
        >
          <DotsVerticalIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default SkinPanel;
