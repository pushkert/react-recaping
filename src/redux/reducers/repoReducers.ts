import { ActionTypes} from '../action-types'
import { Action} from '../actions'

interface RepoState {
    loading: boolean;
    data: string[];
    error:  string | null;
}
const initalState = {
    loading: false,
    data: [],
    error:  null
}

const reducer = (state: RepoState =  initalState, action: Action): RepoState => {
    switch (action.type) {
        case ActionTypes.SEARCH_REPO:
            return {
                ...state,
                loading: true,
                data: [],
                error: null
            }
        case ActionTypes.SEARCH_REPO_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case ActionTypes.SEARCH_REPO_ERROR:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;