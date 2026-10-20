"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export default function CartHeader() {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header>
      <Link href="/">상품 목록</Link>
      {" | "}
      <Link href="/cart">장바구니 ({totalCount})</Link>
    </header>
  );
}
