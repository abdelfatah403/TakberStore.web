import BestService from "@/components/common/BestService";
import Collection from "@/components/common/Collection";
import Discount from "@/components/common/Discount";
import Header from "@/components/common/Header";
import HotDealsCategories, { NewArrivalsCategories } from "@/components/common/HomeCategories";
import HomeCategories from "@/components/common/HomeCategories";
import NavBar from "@/components/common/NavBar";


export default function Home() {
  return (
    <>
    
    <Header />
    <Collection />
    <BestService />
    <HotDealsCategories />
    <NewArrivalsCategories/>
    <Discount />
    </>
    
  );
}

