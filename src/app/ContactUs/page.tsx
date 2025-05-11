import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-[#8c0e71] h-12 flex items-center justify-center">
        <h1 className="text-white navFont">Contact Us</h1>
      </div>

      <div className="h-screen">
        <div className="container">
          <div className="bg-[#FFF4FB] h-28 mt-16 rounded-md">
            <h3 className="contactFont">Address</h3>
            <p className="contactFont-2 ">21 Mustafa Kamel St. Smouha, Alexandria Egypt</p>
          </div>
          <div className="bg-[#FFF4FB] h-28 mt-9 rounded-md">
            <h3 className="contactFont">Phone Number</h3>
            <p className="contactFont-2 ">01551682481</p>
          </div>
          <div className="bg-[#FFF4FB] h-28 mt-9 rounded-md">
            <h3 className="contactFont">Email</h3>
            <p className="contactFont-2 ">dummy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
