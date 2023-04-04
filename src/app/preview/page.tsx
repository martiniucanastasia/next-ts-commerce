// Preview
import { SuppliersSection } from "@/pages/HomePage/SuppliersSection/SuppliersSection";
import { getSuppliers } from "@/helpers/getSuppliers";

export default async function Page() {
  const suppliers = await getSuppliers();
  return (
    <>
      <SuppliersSection suppliers={suppliers} />
    </>
  );
}
