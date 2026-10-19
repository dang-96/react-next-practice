import Description from "@/components/main/Description";
import Title from "@/components/main/Title";

export default function Home() {
  return (
    <main className="main">
      <section className="card">
        <Title title="Next.js 첫 번째 페이지" />
        <Description description="Next.js 복습" />
      </section>
    </main>
  );
}
