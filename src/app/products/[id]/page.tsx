type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return (
    <main>
      <h1>상품 상세 페이지</h1>
      <p>상품 ID: {id}</p>
    </main>
  );
}
