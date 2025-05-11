import Breadcrumps from "@/components/common/breadcrumps";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductProp from "./ProductProp";
import AddTOCartButton from "@/components/common/AddTOCartButton";
import MayLike from "@/components/common/MayLike";

const SpicifecProduct = () => {
  return (
    <>
      <Breadcrumps />
      <div className="container mt-12 grid grid-cols-1 md:grid-cols-[40%_1fr] gap-4 md:gap-8 px-4 md:px-0">
        <div className="w-full">
          <div className="flex justify-center md:justify-start">
            <Image
              className="rounded-2xl w-full md:w-auto"
              src="/4317297cabbd220a7a845772fe32e922.jpeg"
              width={400}
              height={100}
              alt="photo"
              priority
            />
          </div>
          <div className="flex justify-center md:justify-start mt-3 space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 overflow-x-auto pb-2">
            <Image
              className="rounded-2xl w-16 sm:w-20 md:w-24 lg:w-[100px] flex-shrink-0"
              src="/4317297cabbd220a7a845772fe32e922.jpeg"
              width={100}
              height={100}
              alt="photo"
            />
            <Image
              className="rounded-2xl w-16 sm:w-20 md:w-24 lg:w-[100px] flex-shrink-0"
              src="/4317297cabbd220a7a845772fe32e922.jpeg"
              width={100}
              height={100}
              alt="photo"
            />
            <Image
              className="rounded-2xl w-16 sm:w-20 md:w-24 lg:w-[100px] flex-shrink-0"
              src="/4317297cabbd220a7a845772fe32e922.jpeg"
              width={100}
              height={100}
              alt="photo"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-7 mt-6 md:mt-0">
          <h1 className="font-[700] text-[20px] md:text-[24px] leading-[100%] text-center md:text-left">
            Sumer Pajama 2025 - Flamingo Set
          </h1>
          <span className="text-[#9D1470] font-[700] text-[36px] md:text-[48px] leading-[100%] text-center md:text-left">
            1500 LE
          </span>
          <div>
            <p className="font-[600] text-[14px] md:text-[16px] border-b-2 pb-4 md:pb-7 text-[#464646]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mattis massa. Cras in condimentum nulla. Maecenas
              sollicitudin sodales dolor, eu faucibus nisi congue eget.
              Phasellus vitae dolor nec risus porta malesuada et quis odio.
              Mauris sit amet mauris faucibus, viverra ipsum sit amet, iaculis
              nisl. Duis dignissim metus vitae neque maximus eleifend. Praesent
              auctor eros magna. Proin ex libero.
            </p>
          </div>
        
          <ProductProp
            name="Availability"
            available="In Stock"
            maispace="space-x-6 md:space-x-12"
            space="space-x-1"
          />
          <ProductProp
            name="Color"
            space="space-x-2 md:space-x-4"
            maispace="space-x-6 md:space-x-12"
            color={[
              "bg-[#730909]",
              "bg-[#7A0D56]",
              "bg-[#04431E]",
              "bg-[#5D4708]",
            ]}
          />
          <ProductProp
            name="Size"
            space="space-x-2 md:space-x-4"
            maispace="space-x-4 md:space-x-6"
            sizes={["xs", "l", "s", "m", "xl"]}
          />
          <ProductProp 
            name="Quantity" 
            space="space-x-2 md:space-x-4" 
            maispace="space-x-4 md:space-x-6" 
          />
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10 items-center">
            <button className="w-full sm:w-auto bg-[#AB0A76] text-white font-[700] text-[14px] leading-[21px] rounded-lg px-8 md:px-20 py-2">
              <span>Buy Now</span>
            </button>
            <span className="border-2 border-pink flex items-center justify-center p-2 rounded-md">
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
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
          <MayLike/>
    </>
  );
};

export default SpicifecProduct;
