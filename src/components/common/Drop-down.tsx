import Link from "next/link";
import { log } from "node:console";
import React from "react";

type Props = {
  Name: string;
  sideLinks: string[];
  direction: string[];
  isMobile?: boolean; // Added to conditionally apply styles for mobile
};

const DropDown = ({ Name, sideLinks, direction, isMobile }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={toggleDropdown}
          className="navFont text-md font-medium py-3 px-4 rounded-lg text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-200 ease-in-out transform hover:shadow-md hover:-translate-y-0.5 w-full flex justify-between items-center group"
        >
          {Name}
          <svg
            className={`ml-2 h-5 w-5 text-gray-500 group-hover:text-white transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && sideLinks && (
          <div className="mt-1 pl-6 pr-2 py-2 bg-transparent rounded-lg">
            <ul className="flex flex-col space-y-1.5">
              {sideLinks.map((link, index) => (
                <Link
                  key={index}
                  href={direction[index]}
                  className="navFont text-sm font-medium py-2.5 px-3 rounded-md text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-all duration-150 ease-in-out block transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)} // Close dropdown on link click
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  // Desktop Dropdown Logic (original with slight style adjustments)
  return (
    <div className="relative group">
      <button
        className="navFont hover:text-pink-200 transition-colors flex items-center text-white"
        onClick={toggleDropdown}
      >
        {Name}
        <svg
          className="ml-1 h-4 w-4 transition-transform duration-200 "
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {sideLinks && (
        <div
          className={`absolute  block text-nowrap z-20 mt-2 w-56 origin-top-right bg-white shadow-xl rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-out duration-100 transform opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100`}
        >
          <ul className="flex flex-col px-1 py-1 space-y-1">
            {sideLinks?.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={direction[index]}
                  className="navFont text-gray-700 hover:bg-pink-500  rounded-md px-3 py-2 text-sm transition-colors duration-150 ease-in-out block"
                >
                  {link}
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
