"use client";
import Link from "next/link";
import React, { useState } from "react";
import SideBarMobile from "./SideBarMobile";
import DropDown from "./Drop-down";
import Cart from "./Cart";
import { useTranslationStore } from "@/store/translationStore";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { setLocale } = useTranslationStore();
  const router = useRouter();
  const pathname = usePathname();

  const toggleSideBar = () => {
    setOpen(!open);
  };

  const toggleLanguage = () => {
    // Get current locale from path
    const currentLocale = pathname.split("/")[1];
    // Determine new locale
    const newLocale = currentLocale === "en" ? "ar" : "en";

    // Update store
    setLocale(newLocale);
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <>
      <nav className="py-3 px-4 md:px-6 bg-[#AB0A76] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold">
            LOGO
          </Link>
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex gap-6 text-white">
              <Link
                href="/category/new-Item"
                className="navFont hover:text-pink-200 transition-colors"
              >
                New Items
              </Link>
              <Link
                href="/category/hot-deals"
                className="navFont hover:text-pink-200 transition-colors"
              >
                Hot Deals
              </Link>
              <DropDown
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
          <div className="flex items-center gap-3 md:gap-4">
            <button
              aria-label="Search"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <Link
              href={"/WishList"}
              aria-label="Wishlist"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              className="text-white hover:text-pink-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
            <div
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 cursor-pointer text-white hover:text-pink-200 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <span className="text-sm font-medium">
                {pathname.split("/")[1] === "en" ? "AR" : "EN"}
              </span>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={toggleSideBar}
              aria-label="Open menu"
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
                className="lucide lucide-align-justify"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <SideBarMobile open={open} setOpen={setOpen} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default NavBar;
