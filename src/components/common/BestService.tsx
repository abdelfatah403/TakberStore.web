import Image from "next/image";
import React from "react";

const BestService = () => {
  return (
    <>
      <div className="bg-[#9D1470] w-full h-auto mb-28 mt-24">
        <div className="text-white flex flex-col items-center justify-around md:flex-row">
          <div className="flex w-full md:w-[350px] items-center p-9 gap-6">
            <Image src={"/delivry.png"} width={60} height={60} alt="photo" />
            <h2 className="font-[700] text-[20px] leading-[40px]">
              Reliable & Fast Delivery
            </h2>
          </div>
          <div className="hidden md:block w-[1px] h-[100px] bg-white"></div>
          <div className="flex w-full md:w-[350px] items-center p-9 gap-6">

            <Image src={"/pajames(2).png"} width={60} height={60} alt="photo" />
            <h2 className="font-[700] text-[20px] leading-[40px]">
              
              New Collection Every Season
            </h2>
          </div>
          <div className="hidden md:block w-[1px] h-[100px] bg-white"></div>
          <div className="flex w-full md:w-[350px] items-center p-9 gap-6">
            
            <Image src={"/headSet.png"} width={60} height={60} alt="photo" />
            <h2 className="font-[700] text-[20px] leading-[40px]">
              WhatsApp Support
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestService;
