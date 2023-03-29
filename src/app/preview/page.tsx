// Preview components
import { Footer } from "@/components/Footer/Footer";
import { getLanguages } from "@/helpers/getLanguage";

export default async function Preview() {
  const languages = await getLanguages();

  return <Footer languages={languages} />;
}
