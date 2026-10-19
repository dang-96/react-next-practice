"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>카운터 {count}</h2>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(0);
        }}
      >
        초기화
      </button>
    </div>
  );
}
