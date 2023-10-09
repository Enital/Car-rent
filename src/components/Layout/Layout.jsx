// import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
// import css from './layout.module.css';

function Layout() {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default Layout;
