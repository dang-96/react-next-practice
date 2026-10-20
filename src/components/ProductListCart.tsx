import { useCartStore } from "@/store/useCartStore";

const products = [
  { id: 1, name: "무선 헤드폰", price: 50000 },
  { id: 2, name: "키보드", price: 80000 },
  { id: 3, name: "마우스", price: 30000 },
];

export default function ProductListCart() {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <section>
      <h2>상품 목록</h2>

      {products.map((product) => {
        return (
          <article key={product.id}>
            <p>
              {product.name} - {product.price.toLocaleString()}원
            </p>
            <button
              type="button"
              onClick={() => {
                addToCart(product);
              }}
            >
              장바구니 담기
            </button>
          </article>
        );
      })}
    </section>
  );
}
