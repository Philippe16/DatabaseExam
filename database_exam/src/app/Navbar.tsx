import { TriangleDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-32 bg-[#232728] sticky text-white">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row justify-between items-center p-5">
          <div className="flex flex-row gap-5 items-center">
            <div className="w-10 h-10 relative">
              <Image className="bg-" src="/favicon.ico" fill alt="logo" />
            </div>
            <div>
              <h1>Counter Strike Shop</h1>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button className="text-white uppercase">Log in</button>
            <button className="bg-[#4db5da] rounded-sm flex items-center justify-center relative h-[35px] px-[17px] font-bold uppercase">
              Sign up
            </button>
          </div>
        </div>
        <hr />
        <div className="h-full px-5">
          <div className="flex flex-row gap-5 text-md font-bold items-center h-full">
            <div className="flex flex-row items-center">
              Knives
              <TriangleDownIcon />
            </div>
            <div className="flex flex-row items-center">
              Gloves
              <TriangleDownIcon />
            </div>
            <div className="flex flex-row items-center">
              Mid-tier
              <TriangleDownIcon />
            </div>
            <div className="flex flex-row items-center">
              Rifles
              <TriangleDownIcon />
            </div>
            <div className="flex flex-row items-center">
              Pistols
              <TriangleDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
