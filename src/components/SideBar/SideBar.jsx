import { NavLink } from 'react-router-dom';
import css from './sideBar.module.css';

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebarLogo}>Car Rent</div>
      <div className={css.sidebarMenu}>
        <div className={css.sidebarMenuIndicator}></div>
        <ul className={css.sidebarList}>
          <li className={css.sidebarLi}>
            <NavLink to="/" className={css.sidebarLink}>
              <span>Main page</span>
            </NavLink>
          </li>
          <li className={css.sidebarLi}>
            <NavLink to="/catalog" className={css.sidebarLink}>
              <span>Catalog</span>
            </NavLink>
          </li>
          <li className={css.sidebarLi}>
            <NavLink to="/favorites" className={css.sidebarLink}>
              <span>Favorites</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
