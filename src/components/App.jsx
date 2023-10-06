import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';
import MainPage from 'pages/MainPage/MainPage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import Favorite from 'pages/FavoritePage/FavoritePage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />

          <Route
            path="catalog"
            element={<Route redirectTo="/" component={<CatalogPage />} />}
          />
          <Route
            path="favorites"
            element={<Route redirectTo="/" component={<Favorite />} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
