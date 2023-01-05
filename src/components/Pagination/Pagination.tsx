import classNames from 'classnames';
import React, { useMemo } from 'react';
import './Pagination.scss';

import { getNumbers } from '../../utils/utils';

interface Props {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number | string) => void,
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
      <li className={classNames(
        'pagination-item',
        {
          disabled: isFirstPage,
        },
      )}
      >
        <a
          // data-cy="prevLink"
          className="pagination-link"
          href="#prev"
          aria-disabled={isFirstPage}
          onClick={onPrevPage}
        >
          {'<'}
        </a>
      </li>
      {pageAmount.map(numberOfPage => (
        <li
          key={numberOfPage}
          className={classNames(
            'pagination-item',
            {
              active: numberOfPage === currentPage,
            },
          )}
        >
          <a
            // data-cy="pageLink"
            className="pagination-link"
            href={`#${numberOfPage}`}
            onClick={() => onPageChange(numberOfPage)}
          >
            {numberOfPage}
          </a>
        </li>
      ))}
      <li className={classNames(
        'pagination-item',
        {
          disabled: isLastPage,
        },
      )}
      >
        <a
          // data-cy="nextLink"
          className="pagination-link"
          href="#next"
          aria-disabled={isLastPage}
          onClick={onNextPage}
        >
          {'>'}
        </a>
      </li>
    </ul>
  );
};
