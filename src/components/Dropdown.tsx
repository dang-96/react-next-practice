"use client";

import { useState } from "react";

const menus = ["전체", "마이페이지", "예약 내역", "로그아웃"];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dropValue, setDropValue] = useState<string>("전체");

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {dropValue} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <ul>
          {menus.map((item) => {
            return (
              <li
                key={item}
                onClick={() => {
                  setDropValue(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
