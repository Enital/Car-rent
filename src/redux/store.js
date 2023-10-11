import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import filterReducer from './filterSlice';
import catalogReducer from './catalogSlice';
import favoriteReducer from './favoriteSlice';

// const advertPersistConfig = {
//   key: 'advert',
//   storage,
// };

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorite'],
};
// const persistedReducer = persistReducer(favoritePersistConfig, favoriteReducer);

const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    favorite: persistedFavoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date'],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
