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

  return (
    <div className="text-gray-100 w-full py-5">
      <div className="w-full flex flex-wrap gap-12">
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
    <div className="w-80 h-80">
      <div className="w-full h-full bg-[#33383a]">
        <div className="relative w-full h-2/3">
          <Image src={skin.src} fill alt="image of skin" />
        </div>
        <div className="w-full h-1/3">{skin.name}</div>
      </div>
    </div>
  );
};

export default WeaponSkins;
