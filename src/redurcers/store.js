import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import studentSlice from './studentSlice';
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { persistReducer, PURGE, REGISTER, REHYDRATE, FLUSH, PAUSE, PERSIST, persistStore } from 'redux-persist';

const routeRedurcer = combineReducers({
    student : studentSlice,
})

const persisionfig = {
    key: 'root',
    version:1,
    storage,
    // whitelist:['currentUser']
};
const persistedReducer  = persistReducer(persisionfig, routeRedurcer);
export const store = configureStore({
    reducer:persistedReducer,
    // middleware:getDefaultMiddleware({
    //     serializableCheck:{
    //         ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER,PURGE]
    //     }
    // })
});

export const persiststore = persistStore(store)