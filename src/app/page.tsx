"use client";

import Counter from "@/components/Counter";
import Dropdown from "@/components/Dropdown";
import Description from "@/components/main/Description";
import Title from "@/components/main/Title";
import Modal from "@/components/Modal";
import PostList from "@/components/PostList";
import PostListQuery from "@/components/PostListQuery";
import ProductList from "@/components/ProductList";
import Search from "@/components/Search";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="main">
      <section className="card">
        {/* <Title title="Next.js 첫 번째 페이지" />
        <Description description="Next.js 복습" />

        <Link href="/about">About 페이지 이동</Link>
        <Counter />
        <Search />
        <Dropdown />
        <button
          type="button"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          모달 열기
        </button>
        {isModalOpen && (
          <Modal
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}
        <ProductList /> */}
        <PostListQuery />
      </section>
    </main>
  );
}
