import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString()}원</p>

      <Link href="/">목록으로 돌아가기</Link>
    </main>
  );
}
