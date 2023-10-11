import React from 'react';
import { BsX } from 'react-icons/bs';

import css from './modal.module.css';

export default function Modal({ handleToggleModal, closeModal, advert }) {
  const address = advert.address.split(',');
  const city = address[1];
  const country = address[2];

  let mileage = advert.mileage.toString().split('');
  mileage.splice(mileage.length - 3, 0, ',');

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      handleToggleModal();
    }
  };
  const ifPressEscape = event => {
    if (event.code === 'Escape') {
      event.preventDefault();
      window.removeEventListener('keydown', ifPressEscape);
      closeModal();
    }
  };
  window.addEventListener('keydown', ifPressEscape);

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <BsX className={css.closeButton} onClick={closeModal} />
        <img
          src={advert.img}
          alt="car_image"
          className={css.img}
          height={268}
        />

        <div className={css.info}>
          <h2 className={css.title}>
            {advert.make} <span className={css.model}>{advert.model}</span>
            {', '}
            {advert.year}
          </h2>
          <div className={css.itemDescription}>
            <p>
              {city} | {country} | Id:{advert.id} | Year:{advert.year} | Type:
              {advert.type}
            </p>
            <p>
              Fuel Consumption: {advert.fuelConsumption} | EngineSize:{' '}
              {advert.engineSize}
            </p>
          </div>

          <p className={css.description}>{advert.description}</p>
          <p className={css.accessories}>Accessories and functionalities:</p>
          <ul className={css.functionality}>
            {advert.functionalities.map((functionality, index, array) => (
              <li key={functionality}>
                {functionality}
                {array.length - 1 !== index && ' | '}
              </li>
            ))}
          </ul>

          <p className={css.subTitle}>Rental Conditions:</p>
          <div className={css.condition}>
            <p className={css.conditionItem}>
              Mininum age: <span className={css.blueFont}> 25</span>
            </p>
            <p className={css.conditionItem}>Valid driver’s license</p>
            <p className={css.conditionItem}>Security deposite required</p>
            <p className={css.conditionItem}>
              Mileage: <span className={css.blueFont}> {advert.mileage}</span>
            </p>
            <p className={css.conditionItem}>
              Price: <span className={css.blueFont}>{advert.rentalPrice}</span>
            </p>
          </div>
          <button href="tel:+380730000000" className={css.modalButton}>
            Rental car
          </button>
        </div>
      </div>
    </div>
  );
}
