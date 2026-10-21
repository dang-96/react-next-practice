import { products } from "@/data/products";
import Link from "next/link";

export default function ProductList() {
  return (
    <div>
      <h1>상품 목록</h1>

      {products.map((product) => {
        return (
          <article key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString()}원</p>

            <Link href={`/products/${product.id}`}>상품 상세보기</Link>
          </article>
        );
      })}
    </div>
  );
}
