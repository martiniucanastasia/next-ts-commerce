import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import { ServicesSection } from "@/pages/HomePage/ServicesSection/ServicesSection";
import { DealsAndOffers } from "@/pages/HomePage/DealsAndOffers/DealsAndOffers";
import { SuppliersSection } from "@/pages/HomePage/SuppliersSection/SuppliersSection";
import { SubscribeSection } from "@/components/Subscribe/SubscribeSection";
import { Footer } from "@/components/Footer/Footer";

import { getCategories } from "@/helpers/getCategories";
import { getLanguages } from "../helpers/getLanguage";
import { getShippingInfo } from "../helpers/getShippingInfo";
import { getHeaderLinks } from "@/helpers/getHeaderLinks";
import { getBurgerData } from "@/helpers/getBurgerData";
import { getSuppliers } from "@/helpers/getSuppliers";
import { getProducts } from "@/helpers/getProducts";
import { getCurrentOffer } from "@/helpers/getCurrentOffer";

import { Product, currentOffer } from "@/types/types";

export default async function Page() {
  const categories = await getCategories();
  const languages = await getLanguages();
  const shippingInfo = await getShippingInfo();
  const headerLinks = await getHeaderLinks();
  const burgerContents = await getBurgerData();
  const suppliers = await getSuppliers();

  const products: Product[] = await getProducts();
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
      <ServicesSection />
      <SuppliersSection suppliers={suppliers} />
      <SubscribeSection />
      <Footer languages={languages} />
    </>
  );
}
