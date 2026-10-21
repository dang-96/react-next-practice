export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "무선 헤드폰",
    price: 50000,
    description: "편안하게 사용할 수 있는 무선 헤드폰입니다.",
  },
  {
    id: 2,
    name: "기계식 키보드",
    price: 80000,
    description: "타이핑 경험을 향상시키는 기계식 키보드입니다.",
  },
  {
    id: 3,
    name: "무선 마우스",
    price: 30000,
    description: "휴대하기 좋은 무선 마우스입니다.",
  },
];
