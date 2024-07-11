import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import points from './slices/pointsSlice';
import categories from './slices/categorySlice';
import cards from './slices/cardSlice';
import user from './slices/userSlice'

const rootReducer = combineReducers({
  points,
  categories,
  cards,
  user
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
export default store;
