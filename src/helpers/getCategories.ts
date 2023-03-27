export async function getCategories() {
  const response = await fetch(`http://localhost:4000/categories`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
