import Link from "next/link";
import React from "react";
import DropDown from "./Drop-down";

interface SideBarMobileProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBarMobile = ({ open, setOpen }: SideBarMobileProps) => {
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Overlay */} 
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300 ease-in-out"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
      <aside
        className={`fixed lg:hidden top-0 left-0 w-80 h-full bg-gradient-to-b from-white to-pink-100 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${ 
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-pink-200/70">
          <Link href="/" className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600" onClick={closeSidebar}>
            LOGO
          </Link>
          <button 
            onClick={closeSidebar} 
            className="text-gray-500 hover:text-pink-600 transition-colors p-2 rounded-full hover:bg-pink-100/70 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2 mt-3 overflow-y-auto h-[calc(100vh-80px)] scrollbar-thin scrollbar-thumb-pink-200 scrollbar-track-transparent">
          <Link 
            href="/category/new-Item" 
            className="navFont text-md font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-0.5 flex items-center group"
            onClick={closeSidebar}
          >
            <span className="mr-3 opacity-70 group-hover:opacity-100">✨</span> New Items
          </Link>
          <Link 
            href="/category/hot-deals" 
            className="navFont text-md font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-0.5 flex items-center group"
            onClick={closeSidebar}
          >
            <span className="mr-3 opacity-70 group-hover:opacity-100">🔥</span> Hot Deals
          </Link>
          <DropDown
           
            direction={[
              "/category/pajamas/summer-pajamas",
              "/category/pajamas/winter-pajamas",
            ]}
            Name="Pajamas"
            sideLinks={["Summer Pajamas", "Winter Pajamas"]}
            isMobile={true}
          />
          <DropDown
            direction={[
              "/category/underwear/panties",
              "/category/underwear/bras",
              "/category/underwear/lingerie",
            ]}
          
            Name="Underwear"
            sideLinks={["Panties", "Bras", "Lingerie"]}
            isMobile={true}
          />
          <Link 
            href="/category/slippers" 
            className="navFont text-md font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-0.5 flex items-center group"
            onClick={closeSidebar}
          >
             <span className="mr-3 opacity-70 group-hover:opacity-100">👟</span> Slippers
          </Link>
          <Link 
            href="/category/abaya" 
            className="navFont text-md font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-0.5 flex items-center group"
            onClick={closeSidebar}
          >
            <span className="mr-3 opacity-70 group-hover:opacity-100">👘</span> Abaya
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default SideBarMobile;
