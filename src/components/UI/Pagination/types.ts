import { Dispatch, SetStateAction } from "react";

export interface PaginationProps {
  products: number;
  currentPage: number;
  perPage: number;
  pageNumber?: number;
  withSelect?: boolean;
  setCurrentPage: Dispatch<SetStateAction<{ value: number }>>;
  setPerPage: Dispatch<SetStateAction<number>>;
}
