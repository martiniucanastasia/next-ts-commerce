import {
  PaginationLink,
  paginationStyled as S,
} from "./styles/paginationStyles";

import { SelectComponent } from "../Select/Select";
import { OptionType } from "../Select/types";
import { PaginationProps } from "./types";

import ArrowLeft from "../../../assets/svg/icon/control/chevron_left.svg";
import ArrowRight from "../../../assets/svg/icon/control/chevron_right.svg";

export const SELECT_PAGE_RANGES: OptionType<number>[] = [
  { value: 10, label: "Show 10" },
  { value: 15, label: "Show 15" },
  { value: 20, label: "Show 20" },
  { value: 25, label: "Show 25" },
  { value: 35, label: "Show 35" },
];

export const Pagination = ({
  products,
  perPage = 10,
  currentPage = 1,
  withSelect = false,
  triggerPageChange,
  changePageCount,
}: PaginationProps) => {
  const totalPages = Math.ceil(products / perPage);
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPaginationLink = (page: number, isActive: boolean) => {
    return (
      <PaginationLink
        isActive={isActive}
        onClick={() => triggerPageChange(page)}
      >
        {page}
      </PaginationLink>
    );
  };

  return (
    <>
      <S.PaginationWrapper>
        <S.SelectWrapper>
          {withSelect && (
            <SelectComponent<number>
              placeholder={`Show ${perPage}`}
              options={SELECT_PAGE_RANGES}
              onChange={(obj) => {
                changePageCount(obj);
              }}
            />
          )}
        </S.SelectWrapper>

        <S.Button
          onClick={() => currentPage > 1 && triggerPageChange(currentPage - 1)}
          disabled={currentPage === 1 ? true : false}
          variant="secondary"
          visual="left"
        >
          <ArrowLeft />
        </S.Button>

        {pages.map((page) => {
          return (
            <div key={page}>
              {page === currentPage ? (
                <>{renderPaginationLink(page, page === currentPage)}</>
              ) : (
                <>{renderPaginationLink(page, page === currentPage)}</>
              )}
            </div>
          );
        })}

        <S.Button
          onClick={() =>
            currentPage < totalPages && triggerPageChange(currentPage + 1)
          }
          disabled={currentPage >= totalPages ? true : false}
          variant="secondary"
          visual="right"
        >
          <ArrowRight />
        </S.Button>
      </S.PaginationWrapper>
    </>
  );
};
