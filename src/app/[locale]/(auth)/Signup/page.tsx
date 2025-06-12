'use client';


import AuthBotton from "@/components/common/AuthBotton";
import InputFields from "@/components/common/inputFields";
import PasswordInputs from "@/components/common/PasswordInputs";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <>
      <div className="container flex justify-center">
        <div className="bg-[#FFF4FB] w-[500px] h-[600px] my-24 rounded-lg">
          <h3 className="mt-6 font-[600] text-[20px] text-[#AB0A76] flex justify-center">
            Create an account
          </h3>
          <div className="flex space-x-1 mt-3 justify-center">
            <span className="font-[600] text-[16px] leading-[100%] text-[#898989]">
              Already have an account?
            </span>
            <Link
              className="font-[600] text-[16px] leading-[100%] text-[#AB0A76]"
              href={"/Login"}
            >
              Login
            </Link>
          </div>
          <div>
            <div className="container">
              <InputFields
                htmlFor="email"
                id="email"
                type="email"
                placeholder="Email"
                name="Email"
              />
              <PasswordInputs
                htmlFor="password"
                id="password"
                name="Password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="container flex space-x-1 mt-3">
            <input type="checkbox" />
            <p className="font-[400] text-[16px] text-[#464646]">
              I agree to the{" "}
              <span className="font-[400] text-[16px] text-[#AB0A76]">
                terms and conditions and privacy policy
              </span>
            </p>
          </div>
          <p
            className="items-center mt-4 justify-center flex font-[500] text-[#AB0A76] 
            text-sm sm:text-base md:text-[20px]
            after:w-16 sm:after:w-20 md:after:w-28 
            after:h-[1px] after:items-center after:flex after:ms-2 sm:after:ms-3 
            after:content-[''] after:bg-[#DB9BC6] 
            before:w-16 sm:before:w-20 md:before:w-28 
            before:h-[1px] before:items-center before:flex before:me-2 sm:before:me-3 
            before:content-[''] before:bg-[#DB9BC6]"
          >
            Or Sign up using
          </p>
          
            <Image
            onClick={() => signIn("google")}
              src={"../svg/google-color-svgrepo-com.svg"}
              width={40}
              height={40} 
              alt="google image"
              className="mx-auto mt-6 cursor-pointer"
            ></Image>
         
          <AuthBotton name="Sign up" />
        </div>
      </div>
    </>
  );
};

export default Signup;
