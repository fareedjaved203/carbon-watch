import Categories from "@/components/Categories";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Menu />
      <Header />
      <Categories />
    </main>
  );
}
