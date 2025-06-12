import React from "react";

const Refund = () => {
  return (
    <>
      <div className="bg-[#8c0e71] h-12 flex items-center justify-center">
        <h1 className="text-white navFont">Refund Policy</h1>
      </div>

      <div className="h-auto w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-[600]">
        <div className="py-8 sm:py-11 ">
          <div>
            <p className="max-w-lg ">
              Dear valued customers:For your health & hygiene safety, and
              according to our policy. The following products cannot be
              exchanged or refunded:
            </p>
            <ul className="ms-8 list-disc mt-4">
              <li>Silicon Bra</li>
              <li>Lingerie</li>
              <li>Pantie</li>
              <li>Corset</li>
            </ul>
          </div>
          <div className="mt-9">
            <p className="max-w-3xl">
              Exchange and refund are allowed within<span className="text-[#AB0A76] underline decoration">14 days</span> from the date of
              purchase while having the item in its original condition presented
              with the original receipt.
            </p>
            <p className="max-w-3xl mt-4">
              Refunds will be made onto the original mode of payment and will be
              processed within 10 to 45 daysdepends on the issuing bank of the
              credit card
            </p>
            <p className="mt-4 font-[600]">Shipping Fees:</p>
            <p>Shipping Fees are not refundable.</p>
          </div>
          <div className="mt-9">
            <p className="font-[600]">To get Full refund</p>
            <p className="mt-2">The company bears the product costs and shipping fees just in case :</p>
            <ul className="ms-8 list-disc mt-4">
              <li>The wrong product was sent by the merchant.</li>
              <li>The product is defective.</li>
              <li>The product was damaged in shipping.</li>
              <li>The product is tampered.</li>
            </ul>
          </div>
          <div className="mt-9">
            <p className="font-[600] ">Delivery Time:</p>
            <p className="mt-2">Five working days.</p>
            <p className="mt-4">Contact us on WhatsApp at 01551682481</p>
          </div>
        </div>
      </div>
    </> 
  );
};

export default Refund;
