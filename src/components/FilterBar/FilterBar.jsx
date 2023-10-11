import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import css from './filterBar.module.css';

export default function CatalogItem({ adverts, onFilter }) {
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const array = adverts.flatMap(advert => advert.make);
  const makeArrayUnique = array.filter(
    (item, index) => array.indexOf(item) === index
  );
  const makeArraySorted = makeArrayUnique.sort();

  const priceArray = adverts.flatMap(advert => advert.rentalPrice);
  const priceArrayUnique = priceArray.filter(
    (item, index) => priceArray.indexOf(item) === index
  );
  priceArrayUnique.forEach((item, index) => {
    priceArrayUnique[index] = item.slice(1);
  });
  const priceArraySorted = priceArrayUnique.sort(function (a, b) {
    return a - b;
  });

  const handleFormSubmit = e => {
    e.preventDefault();
    const filter = {
      make,
      price,
      minMileage,
      maxMileage,
    };
    onFilter(filter);
  };
  return (
    // <div className={css.container}>
    <div className={css.filter}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="Car brand">
          <p className={css.formText}>Car brand</p>
          <select
            value={make}
            onChange={e => setMake(e.target.value)}
            className={css.select}
          >
            <option>Enter the text</option>
            {makeArraySorted.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Price / 1 hour">
          <p className={css.formText}>Price / 1 hour</p>
          <select
            value={price}
            onChange={e => setPrice(e.target.value)}
            className={css.select}
          >
            <option>To $</option>
            {priceArraySorted.map((price, index) => (
              <option key={index} value={price}>
                {price}
              </option>
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
          Search
        </button>
      </form>
    </div>
    // </div>
  );
}
