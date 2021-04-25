import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthReducer"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const configuration = () => {
  let store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configuration;
