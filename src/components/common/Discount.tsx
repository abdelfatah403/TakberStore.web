import React from "react";

const Discount = () => {
return (
    <>
        <div
            className="w-full h-[450px] mb-20"
            style={{
                backgroundImage: "url(/gggggg.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full flex flex-col bg-black/25 justify-center h-full">
                <h2 className="text-white ms-12 font-[700] text-[70px] leading-[70px] lg:w-[972px] lg:text-[70px] lg:leading-[70px] md:text-[50px] md:leading-[50px] sm:text-[30px] sm:leading-[30px]">
                    Buy 1, Get 50% OFF On The second ONE!
                </h2>
            </div>
        </div>
    </>
);
};

export default Discount;
