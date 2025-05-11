"use client";

import Link from "next/link";
import React, { useState } from "react";
import SideBarMobile from "./SideBarMobile";
import DropDown from "./Drop-down";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const show = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <nav className="p-4 bg-[#AB0A76] shadow-[#9D1470] shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white">LOGO</div>
          <div className="mx-auto">
            <ul className="flex gap-5 text-white max-lg:hidden">
              <Link href="/new-items" className="navFont hover">
                New Items
              </Link>
              <Link href="/hot-deals" className="navFont hover">
                Hot Deals
              </Link>
              <DropDown
                mainLink={"/category/pajamas"}
                direction={[
                  "/category/pajamas/summer-pajamas",
                  "/category/pajamas/winter-pajamas",
                ]}
                Name="Pajamas"
                sideLinks={["Summer Pajamas", "Winter Pajamas"]}
              />
              <DropDown
                direction={[
                  "/category/underwear/panties",
                  "/category/underwear/bras",
                  "/category/underwear/lingerie",
                ]}
                mainLink={"/category/underwear"}
                Name="Underwear"
                sideLinks={["Panties", "Bras", "Lingerie"]}
              />
              <Link href="/category/slippers" className="navFont hover">
                Slippers
              </Link>
              <Link href="/category/abaya" className="navFont hover">
                Abaya
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-white">AR</span>
            </div>
            <button className="lg:hidden" onClick={show}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-align-justify"
              >
                <path d="M3 12h18" />
                <path d="M3 18h18" />
                <path d="M3 6h18" />
              </svg>
            </button>
            {open && <SideBarMobile open={open} />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
