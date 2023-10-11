import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import fetchData from 'Services/fetchData';
import { firstAdverts, setAdverts, setPage } from '../../redux/catalogSlice';

import css from './catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const [isButton, setIsButton] = useState(true);
  const page = useSelector(state => state.catalog.page);
  const adverts = useSelector(state => state.catalog.adverts);
  const filters = useSelector(state => state.catalog.filters);

  const getData = page => {
    fetchData(page)
      .then(data => {
        dispatch(setAdverts(data));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (adverts.length === 0) {
      fetchData(page).then(data => {
        dispatch(firstAdverts(data));
      });
    }
  }, [adverts.length, page, dispatch]);

  useEffect(() => {
    if (page > 4) {
      setIsButton(false);
    } else {
      setIsButton(true);
    }
  }, [page]);
  // console.log(adverts);
  const filteredAdverts = adverts.filter(advert => {
    if (filters.make && adverts.make !== filters.make) {
      return false;
    }
    if (filters.price && advert.rentalPrice.slice(1) > filters.price) {
      return false;
    }
    if (filters.minMileage && advert.mileage < filters.minMileage) {
      return false;
    }
    if (filters.maxMileage && advert.mileage > filters.maxMileage) {
      return false;
    }
    return true;
  });

  const handleLoadMore = () => {
    dispatch(setPage());
    getData(page);
  };

  // console.log(adverts);
  return (
    <div className={css.catalog}>
      {adverts && (
        <>
          {filteredAdverts.length > 0 ? (
            <ul className={css.catalogList}>
              {filteredAdverts.map(advert => {
                return <CatalogItem key={advert.id} advert={advert} />;
              })}
            </ul>
          ) : (
            <div> No matches car found</div>
          )}
          {isButton && (
            <button
              onClick={handleLoadMore}
              className={css.loadMoreButton}
              type="button"
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
}
