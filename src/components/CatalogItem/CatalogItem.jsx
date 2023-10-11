import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import { addFavorite, removeFavorite } from 'redux/favoriteSlice';
import Modal from '../Modal/Modal';
import css from './catalogItem.module.css';

const body = document.querySelector('body');

export default function CatalogItem({ advert }) {
  const address = advert.address.split(',');
  const city = address[1];
  const country = address[2];
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favorite);

  const handleFavorite = () => {
    const isFavorite = favorite.some(item => item.id === advert.id);
    if (isFavorite) {
      dispatch(removeFavorite(advert));
    } else {
      dispatch(addFavorite(advert));
    }
  };

  const handleToggleModal = () => {
    setIsOpenedModal(prevState => !prevState);
    if (isOpenedModal === true) {
      body.style.overflow = 'scroll';
    }
    if (isOpenedModal === false) {
      body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsOpenedModal(false);
    body.style.overflow = 'scroll';
  };

  return (
    <>
      {isOpenedModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          closeModal={closeModal}
          advert={advert}
        />
      )}
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

          <img
            src={advert.img}
            alt="car_image"
            className={css.img}
            height={268}
          />
        </div>

        <div className={css.infoBlock}>
          <div className={css.info}>
            <h2 className={css.title}>
              {advert.make} <span className={css.model}>{advert.model}</span>
              {', '}
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

        <button
          className={css.itemButton}
          type="button"
          onClick={handleToggleModal}
        >
          Learn more
        </button>
      </li>
    </>
  );
}
