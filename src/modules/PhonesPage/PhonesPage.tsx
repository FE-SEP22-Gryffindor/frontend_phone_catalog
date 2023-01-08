/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import './PhonesPage.scss';
import { getPhones } from '../../api/phones';
import { Phone } from '../../types/Phone';
import { Pagination } from '../../components/Pagination';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);

  // const start = perPage * currentPage - perPage + 1;
  // const end = Math.min(start + perPage - 1, total);
  // const visibleItems = phones.filter(
  //   (phone) => phone.id >= start && phone.id <= end,
  // );

  const loadPhones = useCallback(async() => {
    try {
      setPhones(await getPhones(currentPage, perPage));
    } catch {
      throw new Error('Error loading phones');
    }
  }, [currentPage, perPage]);

  useEffect(() => {
    loadPhones().then();
  }, [currentPage, perPage]);

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
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
      </div>
      <div className="products-catalog">
        {phones.map((phone) => (
          <div className="products-catalog__card" key={phone.slug}>
            {`${phone.name}`}
          </div>
        ))}
      </div>
      <Pagination
        total={8}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
