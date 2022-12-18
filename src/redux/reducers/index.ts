import { combineReducers } from 'redux';
import { documentReducer } from './documentReducer';

export const rootReducer = combineReducers({
    document: documentReducer,
});

export type RootState = ReturnType<typeof rootReducer>
