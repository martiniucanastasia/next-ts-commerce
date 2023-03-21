import { OptionType } from "../Select/types";

export interface PaginationProps {
    items: number;
    perPage: number;
    options?: OptionType<number>[];
    pageNumber?: number;
    currentPage: number;
    isSelect?: boolean;
    onPageChange: (page: number) => void;
    onPerPageChange: (obj: OptionType<number> | null) => void;
    valuesFromOptions?: number;
  }
  