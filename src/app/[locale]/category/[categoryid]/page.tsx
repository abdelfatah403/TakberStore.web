"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./categoryPage.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { Color } from "@/types/color";
import { Checkbox } from "@/components/ui/checkbox";
import { DualRangeSlider } from "@/components/ui/DualRangeSlider";
import { Button } from "@/components/ui/button";
import { brands, sizes } from "@/lib/sizes";
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";

const data = {
  products: [
    {
      id: 1,
      name: "towel1",
      price: 10,
      colors: [{ name: "Black", hex: "#000000" }],
    },
    {
      id: 2,
      name: "towel2",
      price: 20,
      colors: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#ffffff" },
      ],
    },
    {
      id: 3,
      name: "towel3",
      price: 30,
      colors: [{ name: "White", hex: "#ffffff" }],
    },
    {
      id: 4,
      name: "towel4",
      price: 40,
      colors: [
        { name: "Red", hex: "#ff0000" },
        { name: "Gray", hex: "#d9d9d9" },
      ],
    },
    {
      id: 5,
      name: "towel5",
      price: 50,
      colors: [
        { name: "Brown", hex: "#4c2605" },
        { name: "Beige", hex: "#d9b042" },
      ],
    },
    {
      id: 6,
      name: "towel6",
      price: 60,
      colors: [
        { name: "Blue", hex: "#0000ff" },
        { name: "Green", hex: "#008000" },
      ],
    },
    {
      id: 7,
      name: "towel7",
      price: 70,
      colors: [
        { name: "Purple", hex: "#800080" },
        { name: "Pink", hex: "#ffc0cb" },
      ],
    },
    {
      id: 8,
      name: "towel8",
      price: 80,
      colors: [
        { name: "Yellow", hex: "#ffff00" },
        { name: "Orange", hex: "#ffa500" },
      ],
    },
    {
      id: 9,
      name: "towel9",
      price: 90,
      colors: [
        { name: "Cyan", hex: "#00ffff" },
        { name: "Magenta", hex: "#ff00ff" },
      ],
    },
    {
      id: 10,
      name: "towel10",
      price: 100,
      colors: [{ name: "Magenta", hex: "#ff00ff" }],
    },
  ],
};

type CategoryPageProps = {
  params: Promise<{
    locale: string;
    categoryid: string;
  }>;
};

// Make sure to use the correct props type
export default function CategoryPage({ params }: CategoryPageProps) {
  const unwrappedParams = React.use(params);
  const { locale, categoryid } = unwrappedParams;
  const [closed, setClosed] = useState(false);

  const toggleFilter = () => {
    setClosed(!closed);
    console.log(`Filter toggled: ${!closed}`);
  };

  useEffect(() => {
    // Handle initial screen size and resize events
    const handleResize = () => {
      // Close the filter on mobile and tablet screens (below 1024px)
      if (window.innerWidth < 1024) {
        setClosed(true);
      } else {
        setClosed(false);
      }
    };

    // Set initial state based on screen size
    if (typeof window !== "undefined") {
      handleResize();
    }

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array is correct here since we only want this to run once on mount

  const pathname = usePathname();
  const category = pathname.split("/").pop() || categoryid;
  const [selectedSortMethod, setSelectedSortMethod] =
    useState<string>("Top Rated");
  const [values, setValues] = useState([0, 100]);
  const [products, setProducts] = useState<Product[]>([]);
  const [productsColors, setProductsColors] = useState<Color[]>([]);

  const handleSortChange = (value: string) => {
    setSelectedSortMethod(value);
  };

  useEffect(() => {
    // get products
    const products = data.products;

    // set products array
    setProducts(products);

    // map colors
    const colors: Color[] = [];
    products.forEach((product) => {
      product.colors.forEach((color) => {
        if (!colors.find((c) => c.name === color.name)) {
          colors.push(color);
        }
      });
      setProductsColors(colors);
    });
  }, [locale]);

  return (
    <>
      {/* Page Header */}
      <div className="page-header mb-8 md:mb-14">
        <h1 className="text-center text-white text-2xl md:text-3xl">
          {category?.toUpperCase()}
        </h1>
      </div>
      {/* Container */}
      <div className="container px-4 md:px-6">
        <button
          onClick={toggleFilter}
          className="lg:hidden bg-brightPink flex font-semibold justify-center items-center text-black w-full px-4 py-2 rounded-md"
        >
          <span className="me-2 border-2 border-pink-500 p-[2px] rounded-md">
            {closed ? <ArrowUpNarrowWide /> : <ArrowDownNarrowWide />}
          </span>
          Filter
        </button>
        {/* Sorting */}
        <div
          className={`flex flex-col mt-4 ${
            closed ? "hidden" : "sm:flex-row"
          } justify-end items-start sm:items-center mb-4 gap-2 text-base md:text-xl`}
        >
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-full sm:max-w-[210px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Recommended">Recommended</SelectItem>
              <SelectItem value="Top Rated">Top Rated</SelectItem>
              <SelectItem value="Name A to Z">Name A to Z</SelectItem>
              <SelectItem value="Name Z to A">Name Z to A</SelectItem>
              <SelectItem value="Price high to low">
                Price high to low
              </SelectItem>
              <SelectItem value="Price low to high">
                Price low to high
              </SelectItem>
              <SelectItem value="New">New</SelectItem>
            </SelectContent>
          </Select>
          <h3 className="text-sm sm:text-base">{selectedSortMethod}</h3>
        </div>
        {/* Results count */}
        <p className={`text-end text-[#464646] mb-4 md:mb-8`}>
          {"2050"} Result
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Filters */}
          <div
            className={`col-span-1 ${
              closed ? "hidden" : "sm:flex-row"
            }  bg-brightPink p-4 md:p-6 lg:p-9 rounded-lg self-start lg:sticky lg:top-0`}
          >
            <h3 className="text-xl md:text-2xl font-semibold">Filter</h3>
            <div className="mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
                Color
              </h4>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                {productsColors.map((color) => (
                  <label
                    key={color.name}
                    className="flex flex-col items-center gap-1 md:gap-2 w-1/4 sm:w-1/6 lg:w-1/4"
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={() => {
                        console.log(`color ${color.name} clicked`);
                      }}
                    />
                    <div
                      style={{ backgroundColor: color.hex }}
                      className="h-3 w-3 md:h-4 md:w-4 rounded-full shadow"
                    ></div>
                    <p className="text-xs md:text-sm">{color.name}</p>
                  </label>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
                Size
              </h4>
              <div className="flex flex-col gap-3 md:gap-4 flex-wrap">
                {sizes.map((size) => (
                  <div
                    key={Math.random()}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={size} />
                    <label
                      htmlFor={size}
                      className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
                Brand
              </h4>
              <div className="flex flex-col gap-3 md:gap-4 flex-wrap">
                {brands.map((brand) => (
                  <div
                    key={Math.random()}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox id={brand} />
                    <label
                      htmlFor={brand}
                      className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4">
                Price Range
              </h4>
              <DualRangeSlider
                label={(value) => (
                  <span className="text-nowrap text-xs md:text-sm">
                    {value} LE
                  </span>
                )}
                value={values}
                onValueChange={setValues}
                min={0}
                max={100}
                step={1}
                labelPosition="bottom"
                className="text-xs md:text-sm"
              />
            </div>
            {/* filter buttons */}
            <div className="flex justify-between mt-8 md:mt-16">
              <Button
                variant="outline"
                className="bg-transparent border-pink text-pink text-sm md:text-base"
              >
                Clear
              </Button>
              <Button className="bg-pink text-sm md:text-base">Apply</Button>
            </div>
          </div>
          {/* Products section */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Product Card */}

            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
