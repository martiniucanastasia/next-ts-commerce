import { VerticalMenu } from "@/components/UI/Navigation/VerticalMenu/VerticalMenu";

const getCategories = async () => {
  const res = await fetch("http://localhost:4000/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Preview() {
  const categories = await getCategories();

  return (
    <>
      <VerticalMenu categories={categories}></VerticalMenu>
    </>
  );
}
