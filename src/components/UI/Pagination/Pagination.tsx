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
  productsLength,
  perPage = 10,
  currentPage = 1,
  withSelect = false,
  setCurrentPage,
  setPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(productsLength / perPage);
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const renderPaginationLink = (page: number, isActive: boolean) => {
    return (
      <PaginationLink
        isActive={isActive}
        onClick={() => setCurrentPage({ value: page })}
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
                setPerPage(obj?.value || SELECT_PAGE_RANGES[0].value);
                setCurrentPage({ value: 1 });
              }}
            />
          )}
        </S.SelectWrapper>

        <S.Button
          onClick={() => {
            currentPage > 1 && setCurrentPage({ value: currentPage - 1 });
          }}
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
          onClick={() => {
            currentPage < totalPages &&
              setCurrentPage({ value: currentPage + 1 });
          }}
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
