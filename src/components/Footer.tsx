import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink text-white py-10">
      <div className="container">
        <div className="grid grid-cols-3 items-center">
          <div className="grid grid-cols-2">
            <div className="self-center">LOGO</div>
            <div className="text-xl font-semibold space-y-4">
              <ul className="space-y-4">
                <li>Pajama</li>
                <li>Underwear</li>
                <li>Slippers</li>
                <li>Abaya</li>
              </ul>
            </div>
          </div>
          <div className="text-xl font-semibold">
            <ul className="space-y-4">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Refund and Return Policy</li>
              <li>Discover</li>
            </ul>
          </div>
          <div className="text-xl space-y-4">
            <div>21 Mustafa Kamel - Somooha</div>
            <div>Hassan Allam street, Tbabrak tower</div>
            <div className="flex items-center gap-2">
              <Phone fill="white" color="transparent" />
              <p>01551682481</p>
            </div>
            <div>Follow us on Social Media</div>
            <div className="flex items-center gap-4">
              <Facebook /> <Instagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
