"use client";

import { Pagination } from "@/components/UI/Pagination/Pagination";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import { getProductsPerPage } from "@/helpers/getProducts";
import { OptionType } from "@/components/UI/Select/types";
import { SELECT_PAGE_RANGES } from "../components/UI/Pagination/Pagination";

export const PreviewPage = ({ products }: { products: Product[] }) => {
  const [currentPage, setCurrentPage] = useState({ value: 1 });
  const [perPage, setPerPage] = useState(SELECT_PAGE_RANGES[0].value);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    getProductsPerPage(currentPage, perPage)
      .then((response) => {
        setPaginatedProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [perPage, currentPage]);

  const triggerPageChange = (page: number) => {
    setCurrentPage({ value: page });
  };

  const changePageCount = (obj: OptionType<number> | null) => {
    setPerPage(obj?.value || SELECT_PAGE_RANGES[0].value);
    setCurrentPage({ value: 1 });
  };

  return (
    <div>
      <h2 style={{ paddingBottom: "20px" }}>Preview Page</h2>

      {paginatedProducts.map((product: any) => {
        return (
          <div key={product.id} style={{ paddingBottom: "20px" }}>
            <p>{product.name}</p>
          </div>
        );
      })}

      <br />

      <Pagination
        products={products.length}
        currentPage={currentPage.value}
        perPage={perPage}
        withSelect={true}
        triggerPageChange={triggerPageChange}
        changePageCount={changePageCount}
      />
    </div>
  );
};
