import css from './catalogItem.module.css';
export default function CatalogItem({ advert }) {
  console.log(advert);
  const address = advert.address.split(',');
  const city = address[1];
  const country = address[2];
  console.log(city);

  return (
    <>
      <li className={css.item}>
        {/* <div className={css.image}></div> */}
        <img src={advert.img} alt="car_image" className={css.img} />
        <div className={css.infoBlock}>
          <div className={css.info}>
            <h2 className={css.title}>
              {advert.make} <span className={css.model}>{advert.model}</span>
            </h2>
            <p>{advert.rentalPrice}</p>
          </div>

          <p>
            {city} | {country} | {advert.rentalCompany} | Premium
          </p>
          <p>
            | {advert.model} | {advert.miles} | {advert.functionalities[1]}
          </p>
        </div>

        <button>Learn more</button>
      </li>
    </>
  );
}
