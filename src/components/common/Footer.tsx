import { Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink text-white py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <Link href={'/'} className="self-center text-base sm:text-lg md:text-xl font-bold">LOGO</Link>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold space-y-2 sm:space-y-3 md:space-y-4">
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 flex flex-col ">
                <Link href={'/category/Pajama'} className="hover:opacity-80 cursor-pointer transition-opacity">Pajama</Link>
                <Link href={'/category/Underwear'} className="hover:opacity-80 cursor-pointer transition-opacity">Underwear</Link>
                <Link href={'/category/Slippers'} className="hover:opacity-80 cursor-pointer transition-opacity">Slippers</Link>
                <Link href={'/category/Abaya'} className="hover:opacity-80 cursor-pointer transition-opacity">Abaya</Link>
              </ul>
            </div>
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-4 sm:mt-0">
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 flex flex-col">
              <Link href={'/ContactUs'} className="hover:opacity-80 cursor-pointer transition-opacity">Contact Us</Link>
              <Link href={'/Refund'} className="hover:opacity-80 cursor-pointer transition-opacity">Refund and Return Policy</Link>
            </ul>
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg space-y-2 sm:space-y-3 md:space-y-4 mt-4 lg:mt-0">
            <div>21 Mustafa Kamel - Somooha</div>
            <div>Hassan Allam street, Tbabrak tower</div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Phone fill="white" color="transparent" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <p>01551682481</p>
            </div>
            <div>Follow us on Social Media</div>
            <div className="flex items-center gap-3 sm:gap-4">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:opacity-80 cursor-pointer transition-opacity" /> 
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 hover:opacity-80 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}