import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "노트북",
    price: 1200000,
    description: "휴대하기 좋은 노트북",
  },
  {
    id: 2,
    name: "키보드",
    price: 80000,
    description: "타이핑하기 편한 키보드",
  },
  {
    id: 3,
    name: "마우스",
    price: 40000,
    description: "가볍고 편리한 마우스",
  },
];

export default function ProductList() {
  return (
    <div>
      <h1>상품 목록</h1>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
}
