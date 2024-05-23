import Image from "next/image";

const ShopPage = () => {
  return (
    <div>
      <div className="w-full h-[500px] relative">
        <Image
          className="object-cover w-full"
          src={"/hej2.webp"}
          fill
          alt="hej"
        />
      </div>
      <div className="h-screen">hej</div>
    </div>
  );
};

export default ShopPage;
