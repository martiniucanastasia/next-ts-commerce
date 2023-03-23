// Preview
import { Product } from "@/types/types";
import { getProducts } from "@/helpers/getProducts";
import { DealsAndOffers } from "@/pages/HomePage/DealsAndOffers/DealsAndOffers";

export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <>
      <DealsAndOffers products={products} />
    </>
  );
}
