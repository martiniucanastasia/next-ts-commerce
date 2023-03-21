"use client";

import { Pagination } from "@/components/UI/Pagination/Pagination";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import { options } from "../components/UI/Pagination/Pagination";
import { getProducts } from "@/helpers/getProducts";
import { OptionType } from "@/components/UI/Select/types";

export const PreviewPage = ({ products }: { products: Product[] }) => {
  const [currentPage, setCurrentPage] = useState({ value: 1 });
  const [perPage, setPerPage] = useState(options[0].value);
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    getProducts(`_page=${currentPage.value}&_limit=${perPage}`).then((resp) => {
      setPaginatedProducts(resp);
    });
  }, [perPage, currentPage]);

  const onPageChange = async (page: number) => {
    setCurrentPage({ value: page });
  };

  const perPageHandler = (obj: OptionType<number> | null) => {
    setPerPage(obj?.value || options[0].value);
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
        isSelect={true} // or false to use Pagination component without Select
        items={products.length}
        currentPage={currentPage.value}
        perPage={perPage}
        onPageChange={onPageChange}
        onPerPageChange={perPageHandler}
      />
    </div>
  );
};
