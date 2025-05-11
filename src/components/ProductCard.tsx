import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/product";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="text-center border-0 shadow-none relative">
      <Heart size={30} className="text-pink absolute end-4 top-4" />
      {/* <CardHeader> */}
      {/* <CardDescription> */}
      <Image
        className="w-full rounded-lg mb-4 shadow-lg"
        src="/towels1.webp"
        width={200}
        height={10}
        alt="towel"
      />
      {/* </CardDescription> */}
      {/* </CardHeader> */}
      <CardContent>
        <CardTitle className="mb-2">{product.name}</CardTitle>
        <p className="text-pink font-semibold">{product.price.toFixed(2)} LE</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <button className="py-2 px-4 bg-pink text-white rounded-lg">
          Buy Now
        </button>
      </CardFooter>
    </Card>
  );
}
