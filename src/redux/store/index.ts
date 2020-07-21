import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "../reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    undefined,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  const persistor = persistStore(store as any);
  return { store, persistor };
};

export const { store, persistor } = configureStore();
