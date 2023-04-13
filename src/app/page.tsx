import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import { DealsAndOffers } from "@/pages/HomePage/DealsAndOffers/DealsAndOffers";
import { BannerAndProducts } from "@/pages/HomePage/BannerAndProducts/BannerAndProducts";
import { RecommendationSection } from "@/pages/HomePage/Recommendations/RecommendationSection";
import { ServicesSection } from "@/pages/HomePage/ServicesSection/ServicesSection";
import { SuppliersSection } from "@/pages/HomePage/SuppliersSection/SuppliersSection";
import { SubscribeSection } from "@/components/Subscribe/SubscribeSection";
import { Footer } from "@/components/Footer/Footer";

import { getCategories } from "@/helpers/getCategories";
import { getLanguages } from "../helpers/getLanguage";
import { getShippingInfo } from "../helpers/getShippingInfo";
import { getHeaderLinks } from "@/helpers/getHeaderLinks";
import { getBurgerData } from "@/helpers/getBurgerData";
import { getProducts } from "@/helpers/getProducts";
import { getBannersInfo } from "@/helpers/getBannersInfo";
import { getSuppliers } from "@/helpers/getSuppliers";
import { getCurrentOffer } from "@/helpers/getCurrentOffer";

import { Product, currentOffer, BannersInfo } from "@/types/types";

export default async function Page() {
  const suppliers = await getSuppliers();
  const languages = await getLanguages();
  const categories = await getCategories();
  const headerLinks = await getHeaderLinks();
  const shippingInfo = await getShippingInfo();
  const burgerContents = await getBurgerData();
  const products: Product[] = await getProducts();
  const bannersInfo: BannersInfo = await getBannersInfo();
  const currentOffer: currentOffer = await getCurrentOffer(1);

  return (
    <>
      <NavigationMenu
        categories={categories}
        languages={languages}
        shippingInfo={shippingInfo}
        headerLinks={headerLinks}
        burgerContents={burgerContents}
      />
      {/* // INTRO SECTION */}
      <DealsAndOffers products={products} currentOffer={currentOffer} />
      <BannerAndProducts products={products} bannersInfo={bannersInfo} />
      <RecommendationSection products={products} />
      <ServicesSection />
      <SuppliersSection suppliers={suppliers} />
      <SubscribeSection />
      <Footer languages={languages} />
    </>
  );
}
