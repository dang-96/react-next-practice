"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartHeader() {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header>
      <p>장바구니 ({totalCount})</p>
    </header>
  );
}
