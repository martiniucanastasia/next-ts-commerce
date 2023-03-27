export const getCategories = async () => {
  const response = await fetch(`http://localhost:4000/categories`, {
    cache: "no-store",
  });
  return response.json();
};
