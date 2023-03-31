export async function getCurrentOffer(id: number) {
  const response = await fetch(`http://localhost:4000/offers/${id}`, {
    cache: "no-store",
  });
  return response.json();
}
