import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import { BannerAndProducts } from "@/pages/HomePage/BannerAndProducts/BannerAndProducts";

import { getCategories } from "@/helpers/getCategories";
import { getLanguages } from "../helpers/getLanguage";
import { getShippingInfo } from "../helpers/getShippingInfo";
import { getHeaderLinks } from "@/helpers/getHeaderLinks";
import { getBurgerData } from "@/helpers/getBurgerData";
import { getProducts } from "@/helpers/getProducts";
import { getBannersInfo } from "@/helpers/getBannersInfo";

import { BannersInfo, Product } from "@/types/types";

export default async function Page() {
  const categories = await getCategories();
  const languages = await getLanguages();
  const shippingInfo = await getShippingInfo();
  const headerLinks = await getHeaderLinks();
  const burgerContents = await getBurgerData();
  const products: Product[] = await getProducts();
  const bannersInfo: BannersInfo = await getBannersInfo();

  return (
    <>
      <NavigationMenu
        categories={categories}
        languages={languages}
        shippingInfo={shippingInfo}
        headerLinks={headerLinks}
        burgerContents={burgerContents}
      />
      <BannerAndProducts products={products} bannersInfo={bannersInfo} />
    </>
  );
}
