// Preview
import { Product, BannersInfo } from "@/types/types";
import { getProducts } from "@/helpers/getProducts";
import { getBannersInfo } from "@/helpers/getBannersInfo";
import { BannerAndProducts } from "@/pages/HomePage/BannerAndProducts/BannerAndProducts";

export default async function Page() {
  const products: Product[] = await getProducts();
  const bannersInfo: BannersInfo = await getBannersInfo();

  return (
    <>
      <BannerAndProducts products={products} bannersInfo={bannersInfo} />
    </>
  );
}
