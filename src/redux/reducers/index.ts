import { combineReducers } from "redux"; 
import repoReducers from './repoReducers';

const reducers = combineReducers({
    repos: repoReducers
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;