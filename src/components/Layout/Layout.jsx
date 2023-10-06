import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
// import css from './layout.module.css';

function Layout() {
  return (
    <div>
      {<Header />}
      <Outlet />
    </div>
  );
}

export default Layout;
