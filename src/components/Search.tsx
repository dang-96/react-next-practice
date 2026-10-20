"use client";

import { useEffect, useState } from "react";

const products = ["노트북", "키보드", "마우스", "모니터", "헤드셋"];

export default function Search() {
  const [search, setSearch] = useState<string>("");

  const filterProducts = products.filter((product) => {
    return product.includes(search);
  });

  useEffect(() => {
    console.log(filterProducts);
  }, [search]);

  return (
    <div>
      <h2>상품 검색</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="상품명을 입력하세요."
      />

      <ul>
        {filterProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
}
