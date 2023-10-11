import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { addFavorite, removeFavorite } from 'redux/favoriteSlice';
import css from './catalogItem.module.css';
export default function CatalogItem({ advert }) {
  // const [favorite, setFavorite] = useState(false);
  const address = advert.address.split(',');
  const city = address[1];
  const country = address[2];

  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favorite);
  const handleFavorite = () => {
    const isFavorite = favorite.some(item => item.id === advert.id);
    // setFavorite(!favorite);
    if (isFavorite) {
      dispatch(removeFavorite(advert));
    } else {
      dispatch(addFavorite(advert));
    }
  };

  return (
    <li className={css.item}>
      {/* <div className={css.image}></div> */}
      <div className={css.imgWrapper}>
        <button
          onClick={handleFavorite}
          className={css.heartButton}
          type="button"
        >
          {favorite.some(favorite => favorite.id === advert.id) ? (
            <BsHeartFill size={18} className={css.heartFill} />
          ) : (
            <BsHeart size={18} style={{ fill: 'white' }} />
          )}
        </button>

        <img src={advert.img} alt="car_image" className={css.img} />
      </div>

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

      <button className={css.itemButton} type="button">
        <span className={css.buttonText}>Learn more</span>
      </button>
    </li>
  );
}
