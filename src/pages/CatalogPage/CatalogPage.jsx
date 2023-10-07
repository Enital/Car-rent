import { useEffect, useState } from 'react';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import fetchData from 'Services/fetchData';

export default function CatalogPage() {
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(page);
  }, [page]);

  const getData = page => {
    fetchData(page)
      .then(data => {
        setAdverts(data);
      })
      .catch(err => console.log(err));
  };
  // console.log(adverts);
  return (
    <div>
      <h1>CatalogPage</h1>
      {adverts.map(advert => {
        return <CatalogItem key={advert.id} advert={advert} />;
      })}
    </div>
  );
}
