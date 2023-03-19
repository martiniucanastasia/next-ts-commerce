import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  productsLength: number;
  currentPage: number;
  perPage: number;
  pageNumber?: number;
  withSelect?: boolean;
  setCurrentPage: Dispatch<SetStateAction<{ value: number }>>;
  setPerPage: Dispatch<SetStateAction<number>>;
}
