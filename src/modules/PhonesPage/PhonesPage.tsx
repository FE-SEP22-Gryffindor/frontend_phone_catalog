import React, { useState } from 'react';
import { Pagination } from '../../components/Pagination';

import './PhonesPage.scss';

export const PhonesPage = () => {
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
  const [perPage, setPerPage] = useState(8);
  // const perPage = 4;

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
    <div className="container-phone-page">
      <div className="breadcrumbs">
        <a className="icon icon--home"></a>
        <a className="">Phones</a>
      </div>
      <div>
        <h1 className="title">Mobile phones</h1>
      </div>
      <div>
        <p className="result-items">95 models</p>
      </div>
      <div className="sort-items">
        <div>
          <label htmlFor="phones-sort">Sort buy:</label>
          <select name="phones-sort" id="phones-sort">
            <option value="newest">Newest</option>
          </select>
        </div>
        <div>
          <label htmlFor="page-items">Items on page:</label>
          <select
            name="page-items"
            id="page-items"
            value={perPage}
            // eslint-disable-next-line no-shadow
            onChange={(event) => {
              setPerPage(Number(event.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={32}>32</option>
          </select>
        </div>
      </div>
      <div className="products-catalog">
        {visibleItems.map((phone) => (
          <div className="products-catalog__card" key={phone.id}>
            {`${phone.title} ${phone.id}`}
          </div>
        ))}
      </div>
      <div>
        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};
