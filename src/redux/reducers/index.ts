import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import gistsReducer from "./gists";

const rootReducer = combineReducers({
    gists: gistsReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
