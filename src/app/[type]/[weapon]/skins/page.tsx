import { Skin } from "@/types/skins.t";
import { Weapon } from "@/types/weapon.t";
import axios from "axios";
import Image from "next/image";
import React from "react";
import SkinPanel from "./SkinPanel";

const WeaponSkins = async ({
  params,
}: {
  params: { type: string; weapon: string };
}) => {
  const skins = await axios.get<Skin[]>(
    `http://localhost:3000/api/skins/weapon/${params.weapon}`
  );

  const weapon = await axios.get<Weapon[]>(
    `http://localhost:3000/api/weapons/${params.weapon}`
  );

  return (
    <div className="text-gray-100 w-full py-5">
      <div className="w-full flex justify-center py-10">
        <div className="flex flex-row items-center justify-center -mx-4">
          <div className="px-4 mb-4 w-64 h-48 relative">
            <Image
              src={weapon.data[0].src}
              fill
              alt="image of weapon"
              className="rounded max-w-full max-h-full mx-auto"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <h1 className="text-center md:text-left text-2xl sm:text-3xl font-bold mb-4">
              {weapon.data[0].name} Skins
            </h1>
            <div className="text-center md:text-left text-gray-400 w-[600px]">
              {weapon.data[0].description}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-12 justify-center">
        {skins.data.map((skin) => (
          <div key={skin.id}>
            <SkinPanel skin={skin} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaponSkins;
