import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
// import { setAllAdverts } from 'redux/operations';
// import { selectAdverts, selectAllAdverts } from '../../redux/selector';

import Catalog from 'components/Catalog/Catalog';
import FilterBar from 'components/FilterBar/FilterBar';

import css from './catalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const asd = dispatch(setAllAdverts());
  //   console.log(asd);
  // }, [dispatch]);
  const adverts = useSelector(state => state.catalog.adverts);
  // const allAdverts = useSelector(selectAllAdverts);
  // console.log(allAdverts);
  // console.log(adverts);
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
