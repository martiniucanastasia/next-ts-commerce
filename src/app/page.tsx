import { NavigationMenu } from "@/components/NavigationMenu/NavigationMenu";
import { getCategories } from "@/helpers/getCategories";
import { getLanguages } from "../helpers/getLanguage";
import { getShippingInfo } from "../helpers/getShippingInfo";
import { getHeaderLinks } from "@/helpers/getHeaderLinks";
import { getBurgerData } from "@/helpers/getBurgerData";

export default async function Page() {
  
  const categories = await getCategories();
  const languages = await getLanguages();
  const shippingInfo = await getShippingInfo();
  const headerLinks = await getHeaderLinks();
  const burgerContents = await getBurgerData();

  return (
    <NavigationMenu
      categories={categories}
      languages={languages}
      shippingInfo={shippingInfo}
      headerLinks={headerLinks}
      burgerContents={burgerContents}
    />
  );
}
