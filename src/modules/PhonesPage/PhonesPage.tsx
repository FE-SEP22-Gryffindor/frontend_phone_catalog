import React from 'react';
import './PhonesPage.scss';

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
];

export const PhonesPage = () => {
  return (
    <div className='container-phone-page'>
      <div className='breadcrumbs'>
        <a className='icon icon--home'></a>
        <a className=''>Phones</a>
      </div>
      <div>
        <h1 className="title">Mobile phones</h1>
      </div>
      <div>
        <p className="result-items">95 models</p>
      </div>
      <div className='sort-items'>
      <div>
      <label htmlFor="phones-sort">Sort buy:</label>
        <select name="phones-sort" id="phones-sort">
          <option value="newest">Newest</option>
        </select>
      </div>
      <div>
      <label htmlFor="page-items">Items on page:</label>
        <select name="page-items" id="page-items">
          <option value="16">16</option>
          <option value="32">32</option>
        </select>
      </div>
      </div>
      <div className='products-catalog'>
        {phones.map(phone => (
          <div className='products-catalog__card' key={phone.id}>
            {`${phone.title} ${phone.id}`}
          </div>
        ))}
      </div>
      <div>
        pagination
      </div>
    </div>
  );
};
