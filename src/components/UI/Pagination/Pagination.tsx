import {
  PaginationLink,
  paginationStyled as S,
} from "./styles/paginationStyles";

import { SelectComponent } from "../Select/Select";
import { OptionType } from "../Select/types";
import { PaginationProps } from "./types";

import ArrowLeft from "../../../assets/svg/icon/control/chevron_left.svg";
import ArrowRight from "../../../assets/svg/icon/control/chevron_right.svg";

export const options: OptionType<number>[] = [
  { value: 10, label: "Show 10" },
  { value: 15, label: "Show 15" },
  { value: 20, label: "Show 20" },
  { value: 25, label: "Show 25" },
  { value: 35, label: "Show 35" },
];

export const Pagination = ({
  items,
  perPage,
  currentPage,
  isSelect = false,
  onPageChange,
  onPerPageChange,
}: PaginationProps) => {

  const totalPages = Math.ceil(items / perPage);
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginationLink = (page: number, active: boolean) => {
    return (
      <PaginationLink active={active} onClick={() => onPageChange(page)}>
        {page}
      </PaginationLink>
    );
  };

  return (
    <>
      <S.PaginationWrapper>

        <S.SelectWrapper>
          {isSelect && (
            <SelectComponent<number>
              placeholder={`Show ${perPage}`}
              options={options}
              onChange={(obj) => {
                onPerPageChange(obj);
              }}
            />
          )}
        </S.SelectWrapper>

        <S.Button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="secondary"
          visual="left"
        >
          <ArrowLeft />
        </S.Button>

        {pages.map((page) => {
          return (
            <div key={page}>
              {page === currentPage ? (
                <>{paginationLink(page, true)}</>
              ) : (
                <>{paginationLink(page, false)}</>
              )}
            </div>
          );
        })}

        <S.Button
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          disabled={currentPage >= totalPages}
          variant="secondary"
          visual="right"
        >
          <ArrowRight />
        </S.Button>

      </S.PaginationWrapper>
    </>
  );
};
