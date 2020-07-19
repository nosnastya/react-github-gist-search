import { combineReducers } from 'redux';
import gistsReducer from "./gists";
import forksReducer from "./forks";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    gists: gistsReducer,
    forks: forksReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

export type RootState = ReturnType<typeof rootReducer>;
export const persistedReducer = persistReducer(persistConfig, rootReducer);
