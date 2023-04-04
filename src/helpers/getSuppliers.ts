export const getSuppliers = async () => {
  const response = await fetch(`http://localhost:4000/suppliers`, {
    cache: "no-store",
  });
  return response.json();
};
