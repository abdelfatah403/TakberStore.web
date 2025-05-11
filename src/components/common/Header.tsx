import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";


const Header = () => {
return (
  <>
    <div
      className="w-full h-[300px] md:h-[400px] lg:h-[500px] mb-10 md:mb-16 lg:mb-20"
      style={{
        backgroundImage: "url(/4317297cabbd220a7a845772fe32e922.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-col bg-black/25 justify-center h-full gap-8 md:gap-12 lg:gap-16">
        <h1 className="text-white text-[40px] md:text-[60px] lg:text-[90px] leading-[50px] md:leading-[70px] lg:leading-[100px] mx-4 md:mx-8 lg:mx-16 font-[700]">
          Sleep in Style Dream in Comfort
        </h1>
        <button className="bg-white mx-4 md:mx-8 lg:mx-16 text-[#AB0A76] w-fit font-[700] text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] px-8 md:px-12 lg:px-14 py-2 md:py-3 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  </>
);
};

export default Header;

