"use client";

import React, { useEffect, useState } from "react";
import { CartItem, getCartItems, getCartTotal } from "@/api/CartApi";
import PaymentMethodPage from "./PaymentMethodPAge";
import BilingPage from "./BilingPage";
import OrderSummary from "./OrderSummary";
import Image from "next/image";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export type CheckoutStep =
  | "cart"
  | "billing"
  | "paymentMethod"
  | "OrderSummary";

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "instapay">("cod");
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("cart");
  const backHandler = () => setCurrentStep("cart");

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCartItems();
      setCartItems(items);
      setTotal(getCartTotal());
    };
    fetchCartItems();
  }, []);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const cartItemsFromStorage = JSON.parse(
    localStorage.getItem("cartItems") || "[]"
  ) as CartItem[];
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
        <aside className="fixed top-0 right-0 w-full h-full sm:w-3/4 md:w-2/3 lg:w-1/3 bg-white shadow-lg z-50 overflow-y-auto transition-all duration-300">
          {isOpen && currentStep === "cart" && (
            <>
              <div className="px-4 md:px-6 pb-6  overflow-y-auto">
                <div className="flex justify-between items-center mt-16 ">
                  <h2 className="text-[#AB0A76] font-bold text-xl">
                    Your Cart
                  </h2>
                  <button
                    className="text-gray-700 hover:text-[#AB0A76] p-2 rounded-full hover:bg-gray-100"
                    onClick={onClose}
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
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
                <div className="w-full bg-[#D1D1D1] h-[1px]"></div>
                <h2 className="font-semibold mb-2 mt-2">Product</h2>
                <div className="w-full bg-[#D1D1D1] h-[1px]"></div>
              </div>
              <div className="px-4 md:px-6 pb-6">
                {cartItemsFromStorage.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItemsFromStorage.map((item, index) => (
                    <div
                      key={item.id}
                      className={`py-4 ${
                        index < cartItemsFromStorage.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="font-bold text-[#AB0A76]">
                              <span className="me-1">{item.price}</span>LE
                            </p>
                          </div>
                          <p className="text-gray-500 text-sm">tabarak brand</p>
                          <div className="text-gray-500 text-sm mt-3">
                            <p>
                              <span className="me-1">Color:</span>Purple
                            </p>
                            <p>
                              <span className="me-1">size:</span>L
                            </p>
                          </div>
                          <div className="flex flex-wrap items-center mt-2 gap-2">
                            <span className="text-gray-500">Quantity:</span>
                            <div className="flex items-center gap-4 border-2 border-black/70 rounded px-2 py-1">
                              <button
                                className="px-1"
                                onClick={() => {
                                  const updatedItems = cartItemsFromStorage.map(
                                    (cartItem) =>
                                      cartItem.id === item.id
                                        ? {
                                            ...cartItem,
                                            quantity: Math.max(
                                              1,
                                              cartItem.quantity - 1
                                            ),
                                          }
                                        : cartItem
                                  );
                                  setCartItems(updatedItems);
                                  setTotal(
                                    updatedItems.reduce(
                                      (sum, item) =>
                                        sum + item.price * item.quantity,
                                      0
                                    )
                                  );
                                }}
                              >
                                -
                              </button>
                              <span className="font-semibold font-mono">
                                {item.quantity}
                              </span>
                              <button
                                className="px-1"
                                onClick={() => {
                                  const updatedItems = cartItems.map(
                                    (cartItem) =>
                                      cartItem.id === item.id
                                        ? {
                                            ...cartItem,
                                            quantity: cartItem.quantity + 1,
                                          }
                                        : cartItem
                                  );
                                  setCartItems(updatedItems);
                                  setTotal(
                                    updatedItems.reduce(
                                      (sum, item) =>
                                        sum + item.price * item.quantity,
                                      0
                                    )
                                  );
                                }}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="text-xs underline text-red-500 hover:text-red-700"
                              onClick={() => {
                                // Handle item removal logic here
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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
                      setCurrentStep("paymentMethod");
                    }}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </>
          )}
          {isOpen && currentStep === "paymentMethod" && (
            <PaymentMethodPage
              onClose={onClose}
              onBack={backHandler}
              currentStep={currentStep}
              total={total + 50}
              setCurrentStep={setCurrentStep}
              setPaymentMethod={setPaymentMethod}
            />
          )}
          {isOpen && currentStep === "billing" && (
            <>
              <BilingPage
                setCurrentStep={setCurrentStep}
                onClose={onClose}
                total={total + 50}
              />
            </>
          )}
          {isOpen &&
          currentStep === "OrderSummary" &&
          paymentMethod === "cod" ? (
            <OrderSummary onClose={onClose} />
          ) : null}
        </aside>
      </div>
    </>
  );
};

export default Cart;
