export const getLanguages = async () => {
  const response = await fetch(`http://localhost:4000/languages`, {
    cache: "no-store",
  });
  return response.json();
};
