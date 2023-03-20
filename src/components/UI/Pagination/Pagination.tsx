import {
  PaginationLink,
  paginationStyled as S,
} from "./styles/paginationStyles";

import { SelectComponent } from "../Select/Select";
import { OptionType } from "../Select/types";
import { PaginationProps } from "./types";

import ArrowLeft from "../../../assets/svg/icon/control/chevron_left.svg";
import ArrowRight from "../../../assets/svg/icon/control/chevron_right.svg";
import { useEffect, useState } from "react";

export const SELECT_PAGE_RANGES: OptionType<number>[] = [
  { value: 10, label: "Show 10" },
  { value: 15, label: "Show 15" },
  { value: 20, label: "Show 20" },
  { value: 25, label: "Show 25" },
  { value: 35, label: "Show 35" },
];

export const Pagination = ({
  withSelect = false,
  productsLength,
  onChange,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState({ value: 1 });
  const [perPage, setPerPage] = useState(SELECT_PAGE_RANGES[0].value);

  const totalPages = Math.ceil(productsLength / perPage);
  let pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePaginationChange = (
    currentPage: { value: number },
    perPage: number
  ) => {
    onChange(currentPage, perPage);
  };

  useEffect(() => {
    onChange(currentPage, perPage);
  }, [perPage, currentPage]);

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
                handlePaginationChange(currentPage, perPage);
              }}
            />
          )}
        </S.SelectWrapper>

        <S.Button
          onClick={() => {
            currentPage.value > 1 &&
              setCurrentPage({ value: currentPage.value - 1 });
          }}
          disabled={currentPage.value === 1 ? true : false}
          variant="secondary"
          visual="left"
        >
          <ArrowLeft />
        </S.Button>

        {pages.map((page) => {
          return (
            <div key={page}>
              {page === currentPage.value ? (
                <>{renderPaginationLink(page, page === currentPage.value)}</>
              ) : (
                <>{renderPaginationLink(page, page === currentPage.value)}</>
              )}
            </div>
          );
        })}

        <S.Button
          onClick={() => {
            currentPage.value < totalPages &&
              setCurrentPage({ value: currentPage.value + 1 });
          }}
          disabled={currentPage.value >= totalPages ? true : false}
          variant="secondary"
          visual="right"
        >
          <ArrowRight />
        </S.Button>
      </S.PaginationWrapper>
    </>
  );
};
