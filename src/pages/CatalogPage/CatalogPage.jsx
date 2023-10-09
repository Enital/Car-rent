import { useDispatch, useSelector } from 'react-redux';
import Catalog from 'components/Catalog/Catalog';
import Filter from 'components/Filter/Filter';
import { setFilters } from '../../redux/catalogSlice';
import css from './catalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.catalog.adverts);

  const handleFilter = filters => {
    dispatch(setFilters(filters));
  };

  return (
    <div className={css.container}>
      <Filter adverts={adverts} onFilter={handleFilter} />
      <Catalog />
    </div>
  );
}
