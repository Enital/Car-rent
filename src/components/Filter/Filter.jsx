import React, { useState } from 'react';

import css from './filter.module.css';

export default function CatalogItem({ adverts, onFilter }) {
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const array = adverts.flatMap(advert => advert.make);
  const makeArrayUnique = array.filter(
    (item, index) => array.indexOf(item) === index
  );
  const priceArray = adverts.flatMap(advert => advert.rentalPrice);
  const priceArrayUnique = priceArray.filter(
    (item, index) => priceArray.indexOf(item) === index
  );
  const priceArraySorted = priceArrayUnique.sort();

  const handleSubmit = e => {
    e.preventDefault();
    const filters = {
      make,
      price,
      minMileage,
      maxMileage,
    };
    onFilter(filters);
  };
  return (
    <div className={css.container}>
      <div className={css.filter}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Car brand">
            <p className={css.formText}>Car brand</p>
            <select
              value={make}
              onchange={e => setMake(e.target.value)}
              className={css.select}
            >
              <option>Enter the text</option>
              {makeArrayUnique.map(make => (
                <option>{make}</option>
              ))}
            </select>
          </label>
          <label htmlFor="Price / 1 hour">
            <p className={css.formText}>Price / 1 hour</p>
            <select
              value={price}
              onchange={e => setPrice(e.target.value)}
              className={css.select}
            >
              <option>To $</option>
              {priceArraySorted.map(price => (
                <option>{price}</option>
              ))}
            </select>
          </label>

          <label htmlFor="Car mileage /km">
            <p className={`${css.formText} ${css.formTextMile}`}>
              Car mileage /km
            </p>
            <input
              type="number"
              value={minMileage}
              onChange={e => setMinMileage(e.target.value)}
              placeholder="From"
              className={css.input}
            />
            <input
              type="number"
              value={maxMileage}
              onChange={e => setMaxMileage(e.target.value)}
              placeholder="To"
              className={`${css.input} ${css.inputTo}`}
            />
          </label>

          <button type="submit" className={css.search}>
            <span className={css.searchText}>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
}
