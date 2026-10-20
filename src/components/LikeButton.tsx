import { useLikeStore } from "@/store/useLikeStore";

export default function LikeButton() {
  const increase = useLikeStore((state) => state.increase);
  const decrease = useLikeStore((state) => state.decrease);
  const reset = useLikeStore((state) => state.reset);

  return (
    <div>
      <button
        type="button"
        onClick={increase}
      >
        좋아요 +1
      </button>
      <button
        type="button"
        onClick={decrease}
      >
        좋아요 -1
      </button>
      <button
        type="button"
        onClick={reset}
      >
        초기화
      </button>
    </div>
  );
}
