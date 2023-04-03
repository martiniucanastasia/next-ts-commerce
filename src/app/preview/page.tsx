// Preview
import { RecommendationSection } from "@/pages/HomePage/Recommendations/RecommendationSection";
import { getProducts } from "@/helpers/getProducts";
import { Product } from "@/types/types";


export default async function Page() {
  const products: Product[] = await getProducts();
  return (
    <>
      <RecommendationSection products={products} />
    </>
  );
}
