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
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}
