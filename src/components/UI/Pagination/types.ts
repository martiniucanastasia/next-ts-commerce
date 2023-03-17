import { OptionType } from "../Select/types";

export interface PaginationProps {
  products: number;
  currentPage: number;
  perPage: number;
  pageNumber?: number;
  withSelect?: boolean;
  triggerPageChange: (page: number) => void;
  changePageCount: (obj: OptionType<number> | null) => void;
}
