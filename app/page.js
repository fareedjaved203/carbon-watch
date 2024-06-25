import Ad from "@/components/Ad";
import Categories from "@/components/Categories";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
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
    </main>
  );
}
