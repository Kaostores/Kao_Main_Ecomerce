import { configureStore } from "@reduxjs/toolkit";
import AllReducer from "@/services/reducers";
import { useDispatch, useSelector } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"

import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./apiSlice";

const persistConfig = {
	key: "Kao_persist",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const store = configureStore({
	reducer: {
		persistedReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
	}).concat(api.middleware),
});



// Infer the `RootState` and `AppDispatch` types from the store itself
export const useAppSelector: TypedUseSelectorHook<
	ReturnType<typeof store.getState>
> = useSelector;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const UseAppDispach: () => typeof store.dispatch = useDispatch;
