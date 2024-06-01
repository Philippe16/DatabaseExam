import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Carousel from "./Carousel";
import { SkinRating, WeaponRating } from "@/types/rating.t";
import axios from "axios";

const ShopPage = async () => {
  const highestRatedSkins = await axios.get<SkinRating[]>(
    "http://localhost:3000/api/rate/highest"
  );
  const lowestRatedSkins = await axios.get<SkinRating[]>(
    "http://localhost:3000/api/rate/lowest"
  );

  const highestRatedWeapons = await axios.get<WeaponRating[]>(
    "http://localhost:3000/api/rate/weapon"
  );

  return (
    <div>
      <div className="w-full h-[500px] relative">
        <Carousel />
      </div>
      <div className="h-screen text-gray-100 mt-10">
        {highestRatedSkins.data.length > 0 && (
          <>
            <h1 className="text-3xl font-bold">Top Rated Skins</h1>
            <div className="flex flex-row divide-x-4 divide-[#242728] mt-5">
              {highestRatedSkins.data.map((skin, index) => (
                <SkinBox
                  key={skin.id}
                  src={skin.src}
                  name={skin.name}
                  stars={skin.rating}
                  ratingCount={skin.totalRatings}
                  index={index + 1}
                />
              ))}
            </div>
          </>
        )}
        {lowestRatedSkins.data.length > 0 && (
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Bottom Rated Skins</h1>
            <div className="flex flex-row divide-x-4 divide-[#242728] mt-5">
              {lowestRatedSkins.data.map((skin, index) => (
                <SkinBox
                  key={skin.id}
                  src={skin.src}
                  name={skin.name}
                  stars={skin.rating}
                  ratingCount={skin.totalRatings}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        )}
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Top Rated Weapons By Skins</h1>
          <div className="flex flex-row divide-x-4 divide-[#242728] mt-5">
            {highestRatedWeapons.data.map((skin, index) => (
              <SkinBox
                key={skin.id}
                src={skin.src}
                name={skin.name}
                stars={skin.rating}
                ratingCount={skin.totalRatings}
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SkinBox = ({
  src,
  name,
  stars,
  ratingCount,
  index,
}: {
  src: string;
  name: string;
  stars: number;
  ratingCount: number;
  index: number;
}) => {
  const starColor =
    stars >= 4
      ? "text-[#205e50]"
      : stars >= 3
      ? "text-[#5e5d20]"
      : "text-[#5e2020]";

  const renderStars = () => {
    let starElements = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(stars)) {
        starElements.push(<StarFilledIcon key={i} className={starColor} />);
      } else if (i < stars) {
        starElements.push(
          <div key={i} className="relative inline-block">
            <StarFilledIcon
              className={starColor}
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
            <StarIcon
              className={starColor}
              style={{ position: "absolute", left: 0, top: 0 }}
            />
          </div>
        );
      } else {
        starElements.push(<StarIcon key={i} className={starColor} />);
      }
    }
    return starElements;
  };

  return (
    <div>
      <div className="w-[300px] h-[3px] bg-[#fa421d]"></div>
      <div className="bg-[#33383a] h-[300px] w-[300px]">
        <div className="p-2 text-gray-500">{index}</div>
        <div className="flex justify-center items-center w-full h-[150px]">
          <Image src={src} width={140} height={90} alt="knive" className="" />
        </div>
        <div className="h-1/3 flex flex-col gap-2 items-center text-gray-100">
          <p>{name}</p>
          <div className="text-md flex flex-row">{renderStars()}</div>
          <span className="text-xs text-gray-400">ratings: {ratingCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
