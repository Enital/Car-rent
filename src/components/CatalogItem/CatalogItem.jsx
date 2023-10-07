import { useEffect, useState } from 'react';
import fetchData from 'Services/fetchData';

import css from './catalogItem.module.css';
export default function CatalogItem() {
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
    <>
      <li className={css.item}>
        {/* <div className={css.image}></div> */}
        <img
          src="https://www.pexels.com/photo/photo-of-red-sports-car-2684219/"
          alt="car_image"
          height={268}
        />
        <div>
          <div>
            <h2>Bulk Enclave, 2008</h2>
            <p>$80</p>
          </div>

          <p>
            city | country | rentalCompany | Premium | model | miles | Power
          </p>
        </div>

        <button>Learn more</button>
      </li>
    </>
  );
}
