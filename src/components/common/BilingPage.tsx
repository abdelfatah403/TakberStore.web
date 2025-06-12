import React from "react";
import { CheckoutStep } from "./Cart";
import BillingInputs from "./BillingInputs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type billingPageProps = {
  setCurrentStep: React.Dispatch<React.SetStateAction<CheckoutStep>>;
  onClose: () => void;
  total: number;
};

const BilingPage = ({ setCurrentStep, onClose, total }: billingPageProps) => {
  return (
    <>
      {/* Billing part implementation */}
      <div className="px-4 md:px-6 pb-6 overflow-y-auto">
        <div className="flex justify-between items-center mt-16">
          <h2 className="text-[#AB0A76] font-bold text-xl">
            Billing Information
          </h2>
          <button
            className="text-gray-700 hover:text-[#AB0A76] p-2 rounded-full hover:bg-gray-100"
            onClick={() => setCurrentStep("paymentMethod")}
            aria-label="Back to Payment"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div className="w-full bg-[#D1D1D1] h-[1px] my-4"></div>
        {/* Example billing form */}
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Full Name */}
            <BillingInputs Name="Full Name" placeHolder="Full Name " />
            {/* Phone Number */}
            <BillingInputs Name="Phone" placeHolder="Phone" />
            {/* Governate */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-normal text-base">
                Governate
              </label>
              <Select>
                <SelectTrigger className="w-full sm:max-w-[210px]">
                  <SelectValue placeholder="Select a Governate" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Residential area */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-normal text-base">
                Residential area
              </label>
              <Select>
                <SelectTrigger className="w-full sm:max-w-[210px]">
                  <SelectValue placeholder="Residential area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {/* Street */}
            <BillingInputs Name="Street" placeHolder="Street" />
            {/* Building */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-normal text-base">
                Building
              </label>
              <Select>
                <SelectTrigger className="w-full sm:max-w-[210px]">
                  <SelectValue placeholder="Select a Building" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* <button
            type="submit"
            className="bg-[#AB0A76] text-white font-semibold rounded-xl py-2 mt-6 transition hover:bg-[#8a085e]"
          >
            Confirm Billing
          </button> */}

          <div className="w-full bg-[#D1D1D1] h-[1px] my-4"></div>
          <div className="flex justify-between  flex-col mb-4">
            <h2 className="font-semibold text-gray-600 mb-2">
              Your Purchase Summary
            </h2>
            <div className="flex justify-between items-center">
              <h5 className="text-sm">Total Items:</h5>
              <p className="font-semibold ">
                <span className="me-1">{total}</span>LE
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h5 className="text-sm">Shipping:</h5>
              <p className="font-semibold ">
                <span className="me-1">50</span>LE
              </p>
            </div>
            <div className="w-full bg-[#D1D1D1] h-[1px] my-4"></div>
            <div className="flex justify-between items-center">
              <h5 className="">Total:</h5>
              <p className="font-bold">
                <span className="me-1">{total + 50}</span>LE
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 justify-center mt-8 mb-4">
            <button
              className="flex-1 border-2 border-[#AB0A76] text-[#AB0A76] font-semibold rounded-xl transition hover:bg-[#AB0A76]/10"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="flex-1 bg-[#AB0A76] text-white font-semibold rounded-xl py-2 transition hover:bg-[#8a085e]"
              onClick={() => {
                setCurrentStep("OrderSummary");
              }}
            >
              Check Out
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BilingPage;
