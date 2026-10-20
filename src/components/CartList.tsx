import { useCartStore } from "@/store/useCartStore";

export default function CartList() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <section>
      <h2>장바구니</h2>

      {cartItems.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        cartItems.map((cartItem) => {
          return (
            <article key={cartItem.id}>
              <p>{cartItem.name}</p>

              <button
                type="button"
                onClick={() => {
                  updateQuantity(cartItem.id, cartItem.quantity - 1);
                }}
                disabled={cartItem.quantity <= 1}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                type="button"
                onClick={() => {
                  updateQuantity(cartItem.id, cartItem.quantity + 1);
                }}
              >
                +
              </button>
              <p>{(cartItem.price * cartItem.quantity).toLocaleString()}원</p>
              <button onClick={() => removeFromCart(cartItem.id)}>삭제</button>
            </article>
          );
        })
      )}
    </section>
  );
}
