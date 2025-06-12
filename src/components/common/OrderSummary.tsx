import React from 'react'

type OrderSummaryProps = {
  onClose?: () => void
}

const OrderSummary = ({onClose}:OrderSummaryProps) => {
  return (
    <div className="px-4 md:px-8 pb-10 pt-8 max-w-xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-[#AB0A76] font-bold text-lg md:text-xl mt-8 text-center">
          You have made an Order
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center">
          Thank you for your order
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-[#AB0A76] font-semibold text-lg mb-4">Order Summary</h3>
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div>
            <div className="font-bold text-sm md:text-base">Order Date</div>
            <div className="text-gray-700 text-sm md:text-base">15/2/2025</div>
          </div>
          <div>
            <div className="font-bold text-sm md:text-base">Order Number</div>
            <div className="text-gray-700 text-sm md:text-base">#1025841</div>
          </div>
          <div>
            <div className="font-bold text-sm md:text-base">Payment Method</div>
            <div className="text-gray-700 text-sm md:text-base">Cash</div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-[#E5E5E5] my-6"></div>

      <div className="mb-8">
        <h3 className="text-[#AB0A76] font-semibold text-lg mb-4">Billing Information</h3>
        <div className="mb-3">
          <div className="font-bold text-sm md:text-base">Full Name</div>
          <div className="text-gray-700 text-sm md:text-base">Zainab Ahmed Ali Mohmmmed</div>
        </div>
        <div className="mb-3">
          <div className="font-bold text-sm md:text-base">Phone Number</div>
          <div className="text-gray-700 text-sm md:text-base">0123456789</div>
        </div>
        <div>
          <div className="font-bold text-sm md:text-base">Address</div>
          <div className="text-gray-700 text-sm md:text-base">
            Alexandria, Dummy data, dummy data, building No. 13
          </div>
        </div>
      </div>

      <button
        className="w-full bg-[#AB0A76] text-white font-semibold rounded-xl py-4 text-lg mt-8 transition hover:bg-[#8a085e]"
        onClick={onClose}
      >
        Continue Shopping
      </button>
    </div>
  )
}

export default OrderSummary