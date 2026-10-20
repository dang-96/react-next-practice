type ProductCardProps = {
  name: string;
  price: number;
  description: string;
};

export default function ProductCard({
  name,
  price,
  description,
}: ProductCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price.toLocaleString()}원</p>
      <button type="button">장바구니 담기</button>
    </article>
  );
}
