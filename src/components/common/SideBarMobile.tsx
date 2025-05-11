import Link from "next/link";
import React from "react";

interface SideBarMobileProps {
  open: boolean;
}

const SideBarMobile = ({ open }: SideBarMobileProps) => {
  return (
    <>
      <aside
        className={`fixed lg:hidden top-0 left-0 w-64 h-full bg-white/80 backdrop-blur-md z-50 transform transition-transform duration-[9000] ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
       <div className="flex gap-9 flex-col text-center p-4 mt-10">
       <Link href={""} className="navFont ">
          New Items
        </Link>
        <Link href={""} className=" navFont  ">
          Hot Deals
        </Link>
        <Link href={""} className="navFont  ">
          Pajamas
        </Link>
        <Link href={""} className="navFont   ">
          Underwear
        </Link>
        <Link href={""} className="navFont  ">
          Slippers
        </Link>
        <Link href={""} className="navFont ">
          Abaya
        </Link>
       </div>
      </aside>
    </>
  );
};

export default SideBarMobile;
