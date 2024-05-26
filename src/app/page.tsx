import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
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
      <div className="h-screen text-gray-100 mt-10">
        <div>
          <h1 className="text-3xl font-bold">Top Rated Skins</h1>
          <div className="flex flex-row divide-x-4 divide-[#242728] mt-5">
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Isn3uyTpN7zjlHt-ENsZjumcoCUJAZqaV_QqVa9xL3thsC-tZyYznIypGB8sly_Gx3i/360fx360f"
              name="Karambit Fade"
              stars={5}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlG1rRA5Z2rzdtfHeldqZ13U-QO-w-jth8C4upzOnyFguSUq4XndyUepwUYb00RQWkk/360fx360f"
              name="Butterfly Marble Fade"
              stars={4}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppJy0r3A8NT02Qy1r0ZvZ2uiIILDdFA9ZwrSrle5ybvrgp676ZvKmiZ9-n51fIaZrsI/360fx360f"
              name="M4a4 Howl"
              stars={3}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppJy0r3A8NT02Qy1r0ZvZ2uiIILDdFA9ZwrSrle5ybvrgp676ZvKmiZ9-n51fIaZrsI/360fx360f"
              name="M4a4 Howl"
              stars={2}
            />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-bold">Bottom Rated Skins</h1>
          <div className="flex flex-row divide-x-4 divide-[#242728] mt-5">
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlYG0kfbwNoTdn2xZ_Isn3uyTpN7zjlHt-ENsZjumcoCUJAZqaV_QqVa9xL3thsC-tZyYznIypGB8sly_Gx3i/360fx360f"
              name="Karambit Fade"
              stars={5}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPr1Ibndk1RX6cF0teXI8oThxlG1rRA5Z2rzdtfHeldqZ13U-QO-w-jth8C4upzOnyFguSUq4XndyUepwUYb00RQWkk/360fx360f"
              name="Butterfly Marble Fade"
              stars={4}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppJy0r3A8NT02Qy1r0ZvZ2uiIILDdFA9ZwrSrle5ybvrgp676ZvKmiZ9-n51fIaZrsI/360fx360f"
              name="M4a4 Howl"
              stars={3}
            />
            <SkinBox
              src="https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwT09S5g4yCmfDLPr7Vn35cppJy0r3A8NT02Qy1r0ZvZ2uiIILDdFA9ZwrSrle5ybvrgp676ZvKmiZ9-n51fIaZrsI/360fx360f"
              name="M4a4 Howl"
              stars={2}
            />
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
}: {
  src: string;
  name: string;
  stars: number;
}) => {
  const starColor =
    stars >= 4
      ? "text-[#205e50]"
      : stars == 3
      ? "text-[#5e5d20]"
      : "text-[#5e2020]";

  const renderStars = () => {
    let starElements = [];
    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starElements.push(<StarFilledIcon key={i} className={starColor} />);
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
        <div className="flex justify-center items-center w-full h-2/3">
          <Image src={src} width={140} height={90} alt="knive" />
        </div>
        <div className="h-1/3 flex flex-col gap-2 items-center text-gray-100">
          <p>{name}</p>
          <div className="text-md flex flex-row">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
