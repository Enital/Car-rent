import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

import Favorite from 'components/Favorite/Favorite';
import FilterBar from 'components/FilterBar/FilterBar';

import css from './favoritePage.module.css';

export default function FavoritePage() {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favorite);

  const handleFilter = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <div className={css.container}>
      <FilterBar adverts={favorites} onFilter={handleFilter} />
      <Favorite />
    </div>
  );
}
