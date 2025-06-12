import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = () => {
  const collection = [
    { image: "/pajames.png", title: "pajames" },
    { image: "/svg/Frame 18.svg", title: "Underwear" },
    { image: "/sliper.png", title: "Slippers" },
    { image: "/abaya.png", title: "abaya" },
  ];
  const links = [
    "/category/pajamas",
    "/category/underwear",
    "/category/slippers",
    "/category/abaya",
  ];

  return (
    <>
      <h2 className="text-[#AB0A76] text-center font-[600] text-[24px] leading-[36px] mt-20 md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[60px]">
        Explore Our Collection
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-28 mt-10">
        {collection.map((item, index) => (
          <Link href={links[index]} key={index}>
            <div className="flex justify-center gap-6 flex-col items-center size-56 rounded-md p-2 mb-10 md:mb-16 lg:mb-20 shadow-xl shadow-[#CACACA40] backdrop-blur-md bg-white/30">
              <Image
                src={item.image}
                width={100}
                height={100}
                alt={item.title}
              />
              <h2 className="text-[#AB0A76] font-[600] text-[24px] leading-[36px]">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Collection;
