import { propColor } from "@/types/propcolor";
import React from "react";

const ProductProp = ({
  color = [],
  available = "",
  name = "",
  maispace = "",
  space = "",
  sizes = [],
}: {
  color?: propColor;
  available?: string;
  name?: string;
  maispace?: string;
  space?: string;
  sizes?: propColor;
}) => {
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row ${maispace} ${
          name === "Quantity" ? "" : "border-b-2"
        } pb-4 sm:pb-7 items-start sm:items-center`}
      >
        <h4 className="text-pink text-sm sm:text-[16px] font-[600] mb-2 sm:mb-0">{name}</h4>
        <div className={`flex ${space} items-center`}>
          {color &&
            color.map((color, index) => (
              <span
                key={index}
                className={`${color} rounded-full w-6 h-6 sm:w-8 sm:h-8`}
              ></span>
            ))}
          <span
            className={` ${available ? "bg-[#0BAA23]" : ""} ${
              color.length === 0 ? "block" : "hidden"
            } rounded-full w-2 h-2 sm:w-3 sm:h-3`}
          ></span>
          {sizes &&
            sizes.map((size, index) => (
              <span
                key={index}
                className={`${space} flex justify-center items-center rounded-sm w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-200 text-xs sm:text-sm text-[#464646] font-[600]`}
              >
                {size}
              </span>
            ))}

          {name === "Quantity" && (
            <div className="border-2 border-gray-200 rounded-md">
              <div className="flex space-x-4 sm:space-x-8 px-2 sm:px-4 items-center font-[600] justify-center text-[#464646]">
                <button className="text-sm sm:text-lg mb-1">
                  -
                </button>
              <span className="font-[600] text-sm sm:text-[16px]">1</span>
                <button className="">
                  +
                </button>
              </div>
            </div>
          )}
          

          <span>{available}</span>
        </div>
      </div>
    </>
  );
};

export default ProductProp;
