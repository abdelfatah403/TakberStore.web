import Link from "next/link";
import React from "react";
type Props = {
  Name: string;
  mainLink: string;
  sideLinks: string[];
  direction: string[];
};

const DropDown = ({ Name, sideLinks,direction,mainLink }: Props) => {
     
  return (
    <>
      <div>
        <div className="group relative">
          <Link href={mainLink} className="navFont hover">
            {Name}
          </Link>
          {sideLinks && 
          <div className="absolute hidden group-hover:block text-nowrap">
            <ul className="flex flex-col bg-[#AB0A76] px-11 py-8 space-y-3 rounded-lg">
              {sideLinks?.map((link, index) => {
                return (
                  <Link key={index} href={direction[index]} className="navFont">
                    {link}
                  </Link>
                );
              })}
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
};

export default DropDown;
