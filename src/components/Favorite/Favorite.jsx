import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from 'components/CatalogItem/CatalogItem';

import css from './favorite.module.css';

export default function Favorite() {
  const favorites = useSelector(state => state.favorite.favorite);

  return (
    <div className={css.favorite}>
      {favorites.length > 0 ? (
        <ul className={css.favoriteList}>
          {favorites.map(advert => (
            <CatalogItem key={advert.id} advert={advert} />
          ))}
        </ul>
      ) : (
        <p>Favorite is empty</p>
      )}
    </div>
  );
}
