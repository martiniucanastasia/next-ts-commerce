// Preview
import { currentOffer, Product } from "@/types/types";
import { getProducts } from "@/helpers/getProducts";
import { getCurrentOffer } from "@/helpers/getCurrentOffer";
import { DealsAndOffers } from "@/pages/HomePage/DealsAndOffers/DealsAndOffers";

export default async function Page() {
  const products: Product[] = await getProducts();
  const currentOffer: currentOffer = await getCurrentOffer(1);

  return (
    <>
      <DealsAndOffers products={products} currentOffer={currentOffer} />
    </>
  );
}
