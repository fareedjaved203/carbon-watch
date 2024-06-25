import Accordion from "@/components/Accordion";
import Ad from "@/components/Ad";
import Categories from "@/components/Categories";
import Elegant from "@/components/Elegant";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Newsletter from "@/components/Newsletter";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Menu />
      <Header />
      <Categories />
      <Experience />
      <Products />
      <Ad />
      <Features />
      <Elegant />
      <Accordion />
      <Newsletter />
    </main>
  );
}
