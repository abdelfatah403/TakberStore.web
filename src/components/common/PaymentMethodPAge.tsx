import React, { useRef, useState } from "react";
import { CheckoutStep } from "./Cart";

type PaymentMethodPageProps = {
  onClose: () => void;
  total: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<CheckoutStep>>
  setPaymentMethod: React.Dispatch<React.SetStateAction<"cod" | "instapay">>;
  onBack: () => void;
  currentStep: string;
};

const PaymentMethodPage = ({
  onClose,
  total,
  setCurrentStep,
  onBack,
  setPaymentMethod,
}: PaymentMethodPageProps) => {
  const selectedRef = useRef<"cod" | "instapay">("cod");
  
  const handlePaymentSelection = (method: "cod" | "instapay") => {
    selectedRef.current = method;
  };
  
  return (
    <>
      <div className="px-4 md:px-6 pb-6  overflow-y-auto">
        <div className="flex justify-between items-center mt-16 ">
          <h2 className="text-[#AB0A76] font-bold text-xl">Payment Method</h2>
          <button
            className="text-gray-700 hover:text-[#AB0A76] p-2 rounded-full hover:bg-gray-100"
            onClick={onBack}
            aria-label="Close cart"
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
              className="lucide lucide-chevron-left-icon lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </div>
        <div className="w-full bg-[#D1D1D1] h-[1px]"></div>

        {/* Payment method options */}
        <div className="mt-8 flex flex-col gap-8">
          <label className="flex items-center gap-4 cursor-pointer">
            <span className="relative">
              <input
                type="radio"
                name="payment"
                defaultChecked={selectedRef.current === "cod"}
                onChange={() => handlePaymentSelection("cod")}
                className="peer appearance-none w-7 h-7 rounded-full border-2 border-[#AB0A76] checked:border-[#AB0A76] checked:bg-white focus:outline-none"
              />
              <span className="pointer-events-none absolute left-1/2 top-[0.9rem] w-3.5 h-3.5 rounded-full bg-[#AB0A76] opacity-0 peer-checked:opacity-100 -translate-x-1/2 -translate-y-1/2 transition"></span>
            </span>
            <span className="text-2xl text-gray-600 font-medium">
              Cash On Delivery
            </span>
          </label>
          <label className="flex items-center gap-4 cursor-pointer">
            <span className="relative">
              <input
                type="radio"
                name="payment"
                defaultChecked={selectedRef.current === "instapay"}
                onChange={() => handlePaymentSelection("instapay")}
                className="peer appearance-none w-7 h-7 rounded-full border-2 border-[#AB0A76] checked:border-[#AB0A76] checked:bg-white focus:outline-none"
              />
              <span className="pointer-events-none absolute left-1/2 top-[0.9rem] w-3.5 h-3.5 rounded-full bg-[#AB0A76] opacity-0 peer-checked:opacity-100 -translate-x-1/2 -translate-y-1/2 transition"></span>
            </span>
            <span className="text-2xl text-gray-600 font-medium">Instapay</span>
          </label>
        </div>
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
              setCurrentStep("billing");
              setPaymentMethod(selectedRef.current);
            }}
          >
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodPage;
