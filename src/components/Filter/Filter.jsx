import css from './filter.module.css';
export default function CatalogItem({ adverts }) {
  console.log(adverts);

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
  const priceArraySorted = priceArrayUnique.sort((a, b) => a - b);
  return (
    <div>
      <form action="">
        <select className={css.select}>
          <option>Enter the text</option>
          {makeArrayUnique.map(make => (
            <option>{make}</option>
          ))}
        </select>
        <select className={css.select}>
          <option>Enter the text</option>
          {priceArraySorted.map(price => (
            <option>{price}</option>
          ))}
        </select>
        <label htmlFor="Car mileage /km">
          <input type="text" />
          <input type="text" />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
