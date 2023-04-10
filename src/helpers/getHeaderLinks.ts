export const getHeaderLinks = async () => {
  const response = await fetch(`http://localhost:4000/links`, {
    cache: "no-store",
  });
  return response.json();
};
