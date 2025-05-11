import React from "react";
import AddTOCartButton from "./AddTOCartButton";
import OfferLabel from "./OfferLabel";

const HotDealsCategories = () => {
  return (
    <>
      <h2 className="text-[#AB0A76] text-center font-[600] text-[24px] leading-[36px] mt-20 md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[60px]">
        Hot Deals
      </h2>
      <div className="flex items-center justify-center mt-10 mb-10">
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[70%] ">
          <div className=" bg-white size-56 shadow-lg rounded-2xl shadow-[#CACACA40] flex items-center justify-center mb-6 relative">
            <OfferLabel />  
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#AB0A76"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart absolute top-6 right-6"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <h3 className="font-[600] text-[16px] leading-[24px]">
            Pink Flamingo Pajama
          </h3>
          <span className="text-[#AB0A76] font-[600] text-[16px] mt-4 mb-3">
            450.00 LE
          </span>
          <AddTOCartButton />
        </div>
      </div>
    </>
  );
};

export default HotDealsCategories;



export const NewArrivalsCategories = () => {
    return (
      <>
        <h2 className="text-[#AB0A76] text-center font-[600] text-[24px] leading-[36px] mt-20 md:text-[32px] md:leading-[48px] lg:text-[40px] lg:leading-[60px]">
          Hot Deals
        </h2>
        <div className="flex items-center justify-center mt-10 mb-10">
          <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[70%] ">
            <div className=" bg-white size-56 shadow-lg rounded-2xl shadow-[#CACACA40] flex items-center justify-center mb-6 relative">
              <OfferLabel />  
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#AB0A76"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart absolute top-6 right-6"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="font-[600] text-[16px] leading-[24px]">
              Pink Flamingo Pajama
            </h3>
            <span className="text-[#AB0A76] font-[600] text-[16px] mt-4 mb-3">
              450.00 LE
            </span>
            <AddTOCartButton />
          </div>
        </div>
      </>
    );
  };