import { useLikeStore } from "@/store/useLikeStore";

export default function LikeCount() {
  const count = useLikeStore((state) => state.count);

  return (
    <div>
      <p>좋아요: {count}</p>
    </div>
  );
}
