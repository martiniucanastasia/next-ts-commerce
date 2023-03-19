import { Dispatch, SetStateAction } from "react";
import { OptionType } from "../Select/types";

export interface PaginationProps {
  products: number;
  currentPage: number;
  perPage: number;
  pageNumber?: number;
  withSelect?: boolean;
  setCurrentPage: Dispatch<SetStateAction<{ value: number }>>;
  changePageCount: (obj: OptionType<number> | null) => void;
}
