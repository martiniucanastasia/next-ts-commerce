import { PreviewPage } from "@/client/PreviewPage";
import { Product } from "@/types/types";
import { getProducts } from "@/helpers/getProducts";

export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <>
      <PreviewPage products={products} />
    </>
  );
}
