import React from 'react';
import { NavLink } from 'react-router-dom';

import css from 'components/Header/header.module.css';

export default function Header() {
  return (
    <div className={css.header}>
      {/* <h1 className={css.title}>Header</h1> */}
      <ul className={css.headerList}>
        <li className={css.headerLi}>
          <NavLink to="/" className={css.headerLink}>
            <span>Main page</span>
          </NavLink>
        </li>
        <li className={css.headerLi}>
          <NavLink to="/catalog" className={css.headerLink}>
            <span>Catalog</span>
          </NavLink>
        </li>
        <li className={css.headerLi}>
          <NavLink to="/favorites" className={css.headerLink}>
            <span>Favorites</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
