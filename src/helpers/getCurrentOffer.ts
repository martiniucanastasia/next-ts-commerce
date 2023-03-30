export async function getCurrentOffer() {
  const response = await fetch(`http://localhost:4000/currentOffer`, {
    cache: "no-store",
  });
  return response.json();
}
