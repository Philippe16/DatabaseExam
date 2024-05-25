"use client";

import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Weapon } from "@/types/weapon.t";
import axios from "axios";

type MenuName =
  | "Knives"
  | "Gloves"
  | "Rifles"
  | "Snipers"
  | "Heavy"
  | "Smgs"
  | "Pistols"
  | null;

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState<MenuName>(null);
  const [weapons, setWeapons] = React.useState<Weapon[]>([]);

  const handleMenuClick = (menu: MenuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  React.useEffect(() => {
    const fetchWeapons = async () => {
      const res = await axios.get<Weapon[]>(
        `http://localhost:3000/api/weapons/`
      );
      setWeapons(res.data);
    };
    fetchWeapons();
  }, []);

  return (
    <div className="left-0 mx-auto px-[40px] fixed top-0 translate-z-0 w-full z-50">
      <div className="px-[30px] items-center bg-[#232728] flex flex-row justify-between min-h-[70px] w-full">
        <div className="flex flex-row justify-between items-center py-5 w-full">
          <Link
            href={"/"}
            className="flex flex-1 items-center gap-3 text-gray-100 cursor-pointer"
          >
            <div className="w-10 h-10 relative">
              <Image className="rounded" src="/image.png" fill alt="logo" />
            </div>
            <div>
              <h1>Counter Strike Shop</h1>
            </div>
          </Link>
          <div className="flex items-center flex-row gap-5 text-gray-100 ">
            <Link
              href={"/cart"}
              className="bg-[#48a9cb] text-[14px] font-[700] hover:bg-[#367e98] rounded-sm flex items-center justify-between relative h-[35px] w-[90px] px-5 uppercase"
            >
              <Image
                src={"/cart-outline.svg"}
                width={30}
                height={30}
                alt="cart"
                className="invert"
              />
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-[40px] bg-[#232728]">
        <hr className=" border-[#34393b]" />
      </div>
      <div className="relative w-full h-[50px]">
        <div className="bg-[#232728] h-full flex items-center border-b-2 border-[#1d2021]">
          <div className="flex flex-row w-full px-[40px]">
            <HeaderMenu
              title="Knives"
              weapon={weapons.filter((item) => item.type === "Knives")}
              isOpen={openMenu === "Knives"}
              onClick={() => handleMenuClick("Knives")}
            />
            <HeaderMenu
              title="Gloves"
              weapon={weapons.filter((item) => item.type === "Gloves")}
              isOpen={openMenu === "Gloves"}
              onClick={() => handleMenuClick("Gloves")}
            />
            <HeaderMenu
              title="Rifles"
              weapon={weapons.filter((item) => item.type === "Rifles")}
              isOpen={openMenu === "Rifles"}
              onClick={() => handleMenuClick("Rifles")}
            />
            <HeaderMenu
              title="Snipers"
              weapon={weapons.filter((item) => item.type === "Snipers")}
              isOpen={openMenu === "Snipers"}
              onClick={() => handleMenuClick("Snipers")}
            />
            <HeaderMenu
              title="Heavy"
              weapon={weapons.filter((item) => item.type === "Heavy")}
              isOpen={openMenu === "Heavy"}
              onClick={() => handleMenuClick("Heavy")}
            />
            <HeaderMenu
              title="Smgs"
              weapon={weapons.filter((item) => item.type === "SMGs")}
              isOpen={openMenu === "Smgs"}
              onClick={() => handleMenuClick("Smgs")}
            />
            <HeaderMenu
              title="Pistols"
              weapon={weapons.filter((item) => item.type === "Pistols")}
              isOpen={openMenu === "Pistols"}
              onClick={() => handleMenuClick("Pistols")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMenu = ({
  title,
  weapon,
  isOpen,
  onClick,
}: {
  title: string;
  weapon: {
    name: string;
    type: string;
    src: string;
  }[];
  isOpen?: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="">
      <button onClick={onClick} className="cursor-pointer py-[1px]">
        <div className="pl-0 items-center text-gray-100 flex flex-row text-[12px] font-[700] h-[50px] px-[16px] uppercase whitespace-nowrap hover:text-[#fa421d]">
          {title}
          {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
        </div>
      </button>
      {isOpen && (
        <div className="absolute left-0 bg-[#232728] w-full h-[300px] shadow-[0_10px_40px] shadow-[#1d2021]">
          <div className="w-full h-full flex flex-col gap-5 justify-center px-10 overflow-x-auto">
            <h1 className="text-gray-100 font-medium">All {title}</h1>
            <div className="w-full flex flex-row divide-x-2 divide-[#242728]">
              {weapon.map((item) => (
                <Link
                  onClick={onClick}
                  href={`/${item.type}/${item.name}/skins`}
                  key={item.name}
                >
                  <div className="min-w-[200px] h-[3px] bg-[#fa421d]"></div>
                  <div className="bg-[#33383a] min-h-[200px] min-w-[200px] group cursor-pointer">
                    <div className="flex justify-center items-center w-full h-2/3">
                      <Image
                        src={item.src}
                        width={120}
                        height={70}
                        alt="knive"
                      />
                    </div>
                    <div className="h-1/3 flex flex-col gap-2 items-center text-gray-100">
                      <p>{item.name}</p>
                      <span className="text-xs group-hover:text-[#fa421d]">
                        View all skins
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
