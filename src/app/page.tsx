import Counter from "@/components/Counter";
import Dropdown from "@/components/Dropdown";
import Description from "@/components/main/Description";
import Title from "@/components/main/Title";
import Search from "@/components/Search";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <section className="card">
        <Title title="Next.js 첫 번째 페이지" />
        <Description description="Next.js 복습" />

        <Link href="/about">About 페이지 이동</Link>
        <Counter />
        <Search />
        <Dropdown />
      </section>
    </main>
  );
}
