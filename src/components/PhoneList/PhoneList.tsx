import React, { useState } from 'react';
import { Pagination } from '../Pagination';

export const PhoneList: React.FC = () => {
  const phones = [
    { id: 1, title: 'Item' },
    { id: 2, title: 'Item' },
    { id: 3, title: 'Item' },
    { id: 4, title: 'Item' },
    { id: 5, title: 'Item' },
    { id: 6, title: 'Item' },
    { id: 7, title: 'Item' },
    { id: 8, title: 'Item' },
    { id: 9, title: 'Item' },
    { id: 10, title: 'Item' },
    { id: 11, title: 'Item' },
    { id: 12, title: 'Item' },
    { id: 13, title: 'Item' },
    { id: 14, title: 'Item' },
    { id: 15, title: 'Item' },
    { id: 16, title: 'Item' },
    { id: 17, title: 'Item' },
    { id: 18, title: 'Item' },
    { id: 19, title: 'Item' },
    { id: 20, title: 'Item' },
    { id: 21, title: 'Item' },
    { id: 22, title: 'Item' },
    { id: 23, title: 'Item' },
    { id: 24, title: 'Item' },
    { id: 25, title: 'Item' },
    { id: 26, title: 'Item' },
    { id: 27, title: 'Item' },
    { id: 28, title: 'Item' },
    { id: 29, title: 'Item' },
    { id: 30, title: 'Item' },
    { id: 31, title: 'Item' },
    { id: 32, title: 'Item' },
  ];
  const total = phones.length;
  const [currentPage, setCurrentPage] = useState(1);
  // const [perPage, setPerPage] = useState(5);
  const perPage = 4;

  const start = perPage * currentPage - perPage + 1;
  const end = Math.min(start + perPage - 1, total);
  const visibleItems = phones.filter(
    (phone) => phone.id >= start && phone.id <= end,
  );

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
      <p className="lead" data-cy="info">
        {`Page ${currentPage} (items ${start} - ${end} of ${total})`}
      </p>

      <ul>
        {visibleItems.map((phone) => (
          <li key={phone.id}>{`${phone.id} ${phone.title}`}</li>
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
