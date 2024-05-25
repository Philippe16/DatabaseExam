import { Skin } from "@/types/skins.t";
import { Weapon } from "@/types/weapon.t";
import axios from "axios";
import Image from "next/image";

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
              Browse and buy all Bayonet skins for CS2. Relatively unchanged in
              its design since World War II, the bayonet still retains a place
              in modern military strategy. Bayonet charges have continued to be
              effective as recently as the second Gulf War and the war in
              Afghanistan.
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

const SkinPanel = ({ skin }: { skin: Skin }) => {
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
        Add to cart
      </div>
    </div>
  );
};

export default WeaponSkins;
