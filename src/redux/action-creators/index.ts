import axios from "axios";
import { Dispatch } from 'redux';
import { ActionTypes} from '../action-types'
import { Action} from '../actions'


export const searchrespos = (term: string) => {
 return async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionTypes.SEARCH_REPO
    });
    try {
        const { data } =  await axios.get('https://registry.npmjs.org/-/v1/search',{
            params: {
                text: term
            }
        });
        const names = data.objects.map((res: any) => {
            return res.package.name;
        })
        dispatch({
            type: ActionTypes.SEARCH_REPO_SUCCESS,
            payload: names
        });
    } catch (error: any) {
        dispatch({
            type: ActionTypes.SEARCH_REPO_ERROR,
            payload: error.message
        });
    }
 }
}