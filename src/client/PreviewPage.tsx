"use client";

import { Pagination } from "@/components/UI/Pagination/Pagination";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import { getProductsPerPage } from "@/helpers/getProducts";

export const PreviewPage = ({ products }: { products: Product[] }) => {
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const handleChange = (currentPage: { value: number }, perPage: number) => {
    getProductsPerPage(currentPage, perPage).then((resp) => {
      setPaginatedProducts(resp);
    });
  };

  useEffect(() => {
    handleChange({ value: 1 }, 10);
  }, []);

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
        withSelect={true}
        productsLength={products.length}
        onChange={handleChange}
      />
    </div>
  );
};
