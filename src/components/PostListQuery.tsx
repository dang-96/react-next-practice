import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/api/postApi";

export default function PostListQuery() {
  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isPending) {
    return <p>게시글 불러 오는중.......</p>;
  }

  if (isError) {
    return <p>오류가 발행했습니다. {error.message}</p>;
  }
  return (
    <div>
      <h1>TanStack Query 게시글</h1>

      {posts.map((post) => {
        return (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        );
      })}
    </div>
  );
}
