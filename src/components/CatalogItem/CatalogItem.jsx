import css from './catalogItem.module.css';
export default function CatalogItem({ advert }) {
  // console.log(advert);
  const address = advert.address.split(',');
  const city = address[1];
  const country = address[2];
  // console.log(city);

  return (
    <>
      <li className={css.item}>
        {/* <div className={css.image}></div> */}
        <img src={advert.img} alt="car_image" className={css.img} />
        <div className={css.infoBlock}>
          <div className={css.info}>
            <h2 className={css.title}>
              {advert.make} <span className={css.model}>{advert.model}</span>{' '}
              {advert.year}
            </h2>
            <p>{advert.rentalPrice}</p>
          </div>
          <nobr>
            <p className={css.itemDescription}>
              {city} | {country} | {advert.rentalCompany} | Premium
            </p>
          </nobr>

          <nobr>
            <p className={css.itemDescription}>
              {advert.model} | {advert.mileage} | {advert.functionalities[1]}
            </p>
          </nobr>
        </div>

        <button className={css.itemButton}>Learn more</button>
      </li>
    </>
  );
}
