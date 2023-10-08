import css from './filter.module.css';
export default function CatalogItem({ adverts }) {
  // console.log(adverts);

  const array = adverts.flatMap(advert => advert.make);
  // console.log(array);
  const makeArrayUnique = array.filter(
    (item, index) => array.indexOf(item) === index
  );
  // console.log(makeArray);
  const priceArray = adverts.flatMap(advert => advert.rentalPrice);
  const priceArrayUnique = priceArray.filter(
    (item, index) => priceArray.indexOf(item) === index
  );
  // console.log(priceArrayUnique);
  const priceArraySorted = priceArrayUnique.sort();
  console.log(priceArraySorted);
  return (
    <div className={css.filter}>
      <form action="">
        <label htmlFor="Car brand">
          <p>Car brand</p>
          <select className={css.select}>
            <option>Enter the text</option>
            {makeArrayUnique.map(make => (
              <option>{make}</option>
            ))}
          </select>
        </label>
        <label htmlFor="Price / 1 hour">
          <p>Car brand</p>
          <select className={css.select}>
            <option>Enter the text</option>
            {priceArraySorted.map(price => (
              <option>{price}</option>
            ))}
          </select>
        </label>

        <label htmlFor="Car mileage /km">
          <input type="text" />
          <input type="text" />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
