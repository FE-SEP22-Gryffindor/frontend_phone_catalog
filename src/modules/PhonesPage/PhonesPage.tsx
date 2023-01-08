/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import './PhonesPage.scss';
import { getPhones } from '../../api/phones';
import { SmallPhone } from '../../types/Phone';
import { Pagination } from '../../components/Pagination';
import { PhoneCard } from '../../components/PhoneCard';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<SmallPhone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(2);
  const total = 8;

  const loadPhones = useCallback(async() => {
    try {
      setPhones(await getPhones(currentPage, perPage));
    } catch {
      throw new Error('Error loading phones');
    }
  }, [currentPage, perPage]);

  useEffect(() => {
    loadPhones();
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
        <p className="result-items">{`${total} models`}</p>
      </div>
      <div className="sort-items">
        <div>
          <label htmlFor="phones-sort">Sort by:</label>
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
          <PhoneCard phone={phone} key={phone.slug} />
        ))}
      </div>
      <Pagination
        total={total}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
