import axios from "axios";
import { Post } from "@/type/post";

export async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  const data = response.data.slice(0, 5);

  return data;
}
