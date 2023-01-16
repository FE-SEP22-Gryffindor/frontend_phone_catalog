/* eslint-disable no-shadow */
import React, { useCallback, useEffect, useState } from 'react';
import './PhonesPage.scss';
import { getPhones } from '../../api/phones';
import { Pagination } from '../../components/Pagination';
import { Phone } from '../../types/Phone';
import { PhoneCard } from '../../components/PhoneCard';
import { Loader } from '../../components/Loader';
import { Link } from 'react-router-dom';

export const PhonesPage = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [totalPhonesCount, setTotalPhonesCount] = useState(0);

  const loadPhones = useCallback(async() => {
    try {
      const res = await getPhones(currentPage, perPage);

      setPhones(await res.items);
      setTotalPhonesCount(Number(await res.serverItemsCount) | 0);
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
      {phones.length
        ? (
          <>
            <div className="breadcrumbs">
              <Link to="/" className="icon icon--home"></Link>
              <a className="">Phones</a>
            </div>
            <div>
              <h1 className="title">Mobile phones</h1>
            </div>
            <div>
              <p className="result-items">{`${totalPhonesCount} models`}</p>
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
                  onChange={(event) => {
                    setPerPage(Number(event.target.value));
                    setCurrentPage(1);
                  }}
                >
                  {/* <option value={2}>2</option> */}
                  <option value={8}>8</option>
                  <option value={16}>16</option>
                  <option value={32}>32</option>
                </select>
              </div>
            </div>
            <div className="products-catalog">
              {phones.map((phone) => (
                <PhoneCard phone={phone} key={phone.slug} />
              ))}
            </div>
            <Pagination
              total={totalPhonesCount}
              perPage={perPage}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </>
        )
        : (<Loader />)}
    </div>
  );
};
