//Preview components
import { Tabs } from "@/components/UI/Tabs/Tabs";

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
      <Tabs categories={categories} variant="primary" />
      <br />
      <Tabs categories={categories} variant="secondary" />
    </>
  );
}
