// import { configureStore } from '@reduxjs/toolkit';
// import { advertReducer } from './advertSlice';

// export const store = configureStore({
//   reducer: {
//     adverts: advertReducer,
//   },
// });

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
import advertReducer from './advertSlice';

const advertPersistConfig = {
  key: 'advert',
  storage,
};
const persistedReducer = persistReducer(advertPersistConfig, advertReducer);

export const store = configureStore({
  reducer: {
    advert: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      ignoredPaths: ['transactions.date'],
    }),
});

export const persistor = persistStore(store);
