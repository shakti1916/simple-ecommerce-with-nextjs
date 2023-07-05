import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories/>
    </main>
  );
}
