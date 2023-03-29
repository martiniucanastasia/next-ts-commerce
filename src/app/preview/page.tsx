// Preview
import { Product } from "@/types/types";
import { getProducts } from "@/helpers/getProducts";
import { BannerAndProducts } from "@/pages/HomePage/BannerAndProducts/BannerAndProducts";

export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <>
      <BannerAndProducts products={products} />
    </>
  );
}
