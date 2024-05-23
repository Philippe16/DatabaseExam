import { TriangleDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="left-0 mx-auto px-[40px] fixed top-0 translate-z-0 w-full z-50">
      <div className="px-[30px] items-center bg-[#232728] flex flex-row justify-between min-h-[70px] w-full">
        <div className="flex flex-row justify-between items-center py-5 w-full">
          <div className="flex flex-1 items-center gap-3 text-white">
            <div className="w-10 h-10 relative">
              <Image className="bg-" src="/favicon.ico" fill alt="logo" />
            </div>
            <div>
              <h1>Counter Strike Shop</h1>
            </div>
          </div>
          <div className="flex items-center flex-row gap-5 text-white ">
            <button className="uppercase">Log in</button>
            <button className="bg-[#4db5da] rounded-sm flex items-center justify-center relative h-[35px] px-[17px] font-bold uppercase">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="px-[40px] bg-[#232728]">
        <hr />
      </div>
      <div className="relative w-full">
        <div className="bg-[#232728] flex flex-row h-[50px] justify-center relative w-full px-[40px]">
          <div className="items-start flex flex-wrap h-[50px] overflow-hidden relative w-full">
            <HeaderMenu title="knife" />
            <HeaderMenu title="Gloves" />
            <HeaderMenu title="Rifle" />
            <HeaderMenu title="Mid-tier" />
            <HeaderMenu title="Pistols" />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderMenu = ({ title }: { title: string }) => {
  return (
    <div className="pl-0 items-center text-white flex flex-row text-[12px] font-[700] h-[50px] px-[16px] uppercase whitespace-nowrap hover:text-[#fa421d] cursor-pointer">
      {title}
      <TriangleDownIcon />
    </div>
  );
};

export default Navbar;
