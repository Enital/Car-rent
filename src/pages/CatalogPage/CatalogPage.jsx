import { useEffect, useState } from 'react';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import Filter from 'components/Filter/Filter';
import fetchData from 'Services/fetchData';

import css from './catalogPage.module.css';

export default function CatalogPage() {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = page => {
    fetchData(page)
      .then(data => {
        setAdverts(prevAdverts => {
          return [...prevAdverts, ...data];
        });
      })
      .catch(err => console.log(err));
  };
  console.log(adverts);
  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  // console.log(adverts);
  return (
    <div className={css.container}>
      <Filter adverts={adverts} />
      <div className={css.catalog}>
        {adverts.map(advert => {
          return <CatalogItem key={advert.id} advert={advert} />;
        })}
      </div>
      <button
        onClick={handleLoadMore}
        className={css.loadMoreButton}
        type="button"
      >
        Load More
      </button>
    </div>
  );
}
