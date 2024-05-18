import CarouselCustom from "@/components/CarouselCustom";
import Country from "@/components/Country";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Hero2 />
      <CarouselCustom />
      <Country />
      <Services />
      <Products />
      <Footer />
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </main>
  );
}
