import { NavLink } from 'react-router-dom';
import css from './sideBar.module.css';

export default function Sidebar() {
  return (
    <div className={css.sidebar}>
      <h1 className={css.sidebarLogo}>Car Rent Ukraine</h1>
      <div className={css.sidebarMenu}>
        <div className={css.sidebarMenuIndicator}></div>
        <ul className={css.sidebarList}>
          <li className={css.sidebarLi}>
            <NavLink to="/" className={css.sidebarLink}>
              <span className={css.sidebarMenuItem}>Main page</span>
            </NavLink>
          </li>
          <li className={css.sidebarLi}>
            <NavLink to="/catalog" className={css.sidebarLink}>
              <span className={css.sidebarMenuItem}>Catalog</span>
            </NavLink>
          </li>
          <li className={css.sidebarLi}>
            <NavLink to="/favorites" className={css.sidebarLink}>
              <span className={css.sidebarMenuItem}>Favorites</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
