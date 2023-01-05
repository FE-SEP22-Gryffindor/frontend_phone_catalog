import React, { useMemo, useState } from 'react';
import { Pagination } from '../Pagination';
import { getNumbers } from '../../utils/utils';

export const PhoneList: React.FC = () => {
  const total = 60;
  const [currentPage, setCurrentPage] = useState(1);
  // const [perPage, setPerPage] = useState(5);
  const perPage = 16;

  const start = perPage * currentPage - perPage + 1;
  const end = Math.min(start + perPage - 1, total);
  const visibleItems = useMemo(() => {
    return getNumbers(start, end).map((n) => `Item ${n}`);
  }, [start, end]);

  const onPageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }

    if (page === 'next') {
      setCurrentPage((prevCurrent) => prevCurrent + 1);
    }

    if (page === 'prev') {
      setCurrentPage((prevCurrent) => prevCurrent - 1);
    }
  };

  return (
    <div className="container">
      {/* <p className="lead" data-cy="info">
        {`Page ${currentPage} (items ${start} - ${end} of ${total})`}
      </p> */}

      <ul>
        {visibleItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
