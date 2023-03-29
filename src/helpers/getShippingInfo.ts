export const getShippingInfo = async () => {
  const response = await fetch(`http://localhost:4000/shipping`, {
    cache: "no-store",
  });
  return response.json();
};
