import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import Catalog from 'components/Catalog/Catalog';
import FilterBar from 'components/FilterBar/FilterBar';

import css from './catalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.catalog.adverts);
  const handleFilter = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.container}>
      <FilterBar adverts={adverts} onFilter={handleFilter} />
      <Catalog />
    </div>
  );
}
