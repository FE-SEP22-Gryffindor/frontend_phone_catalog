import classNames from 'classnames';
import React, { useMemo } from 'react';
import './Pagination.scss';

import { getNumbers } from '../../utils/utils';

interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number | string) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const pageAmount = useMemo(() => {
    const pageCount = Math.ceil(total / perPage);

    return getNumbers(1, pageCount);
  }, [total, perPage]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageAmount.length;

  const onNextPage = () => {
    if (!isLastPage) {
      onPageChange('next');
    }
  };

  const onPrevPage = () => {
    if (!isFirstPage) {
      onPageChange('prev');
    }
  };

  return (
    <ul className="pagination">
      <li
        className="pagination__item"
      >
        <a
          className={classNames(
            'pagination__link pagination__link-arrow',
            {
              'pagination__link--disabled': isFirstPage,
            },
          )}
          aria-disabled={isFirstPage}
          onClick={onPrevPage}
        >
          {'<'}
        </a>
      </li>
      {pageAmount.map((numberOfPage) => (
        <li key={numberOfPage} className="pagination__item">
          <a
            className={classNames('pagination__link', {
              'pagination__link-active': numberOfPage === currentPage,
            })}
            onClick={() => onPageChange(numberOfPage)}
          >
            {numberOfPage}
          </a>
        </li>
      ))}
      <li
        className="pagination__item"
      >
        <a
          className={classNames(
            'pagination__link pagination__link-arrow',
            {
              'pagination__link--disabled': isLastPage,
            },
          )}
          aria-disabled={isLastPage}
          onClick={onNextPage}
        >
          {'>'}
        </a>
      </li>
    </ul>
  );
};
