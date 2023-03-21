export async function getProducts(query = '') {
  const response = await fetch(`http://localhost:4000/products?${query}`, {
    cache: "no-store",
  });
  return response.json();
}
