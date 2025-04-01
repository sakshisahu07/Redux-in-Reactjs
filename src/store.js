import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { combineReducers } from "redux";
import todoReducer from "./features/todo/todoSlice";
import modalReducer from "./features/modal/modalSlice";


const persistConfig = {
  key: "root",
  storage,   
  whitelist: ["todo"],  
};

const rootReducer = combineReducers({
  todo: todoReducer,
  modal: modalReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],  // Ignore persist actions
      },
    }),
});

export const persistor = persistStore(store);
