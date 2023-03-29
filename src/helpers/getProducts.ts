type PaginationQuery = {
  currentPage: { value: number };
  perPage: number;
};

export async function getProducts(query = "") {
  const response = await fetch(`http://localhost:4000/products?${query}`, {
    cache: "no-store",
  });
  return response.json();
}

export const getProductsPerPage = async (
  currentPage: PaginationQuery["currentPage"],
  perPage: PaginationQuery["perPage"]
) => {
  const response = await fetch(
    `http://localhost:4000/products?_page=${currentPage.value}&_limit=${perPage}`,
    {
      cache: "no-store",
    }
  );
  return response.json();
};
