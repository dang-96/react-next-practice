"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  // useEffect(() => {
  //   axios
  //     .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => {
  //       const data = response.data.slice(0, 5);
  //       // setPosts(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("조회 실패", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts",
        );

        const data = response.data.slice(0, 5);
        setPosts(data);
      } catch (error) {
        console.error("조회 실패", error);
      }
    };

    fetchPosts();
  });

  return (
    <div>
      <h1>게시글 목록</h1>
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
