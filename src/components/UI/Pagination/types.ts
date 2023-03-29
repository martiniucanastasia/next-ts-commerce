export interface PaginationProps {
  withSelect?: boolean;
  productsLength: number;
  onChange: (currentPage: { value: number }, perPage: number) => void;
}
