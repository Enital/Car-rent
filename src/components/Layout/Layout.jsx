import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <div className="layout">{<Header />} </div>
      <Outlet />
    </div>
  );
}

export default Layout;
