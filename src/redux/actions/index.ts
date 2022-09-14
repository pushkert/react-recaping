import { ActionTypes} from '../action-types'

export interface SearchRepo {
    type: ActionTypes.SEARCH_REPO;
}

export interface SearchRepoSucces {
    type: ActionTypes.SEARCH_REPO_SUCCESS;
    payload: string[]
}

export interface SearchRepoError {
    type: ActionTypes.SEARCH_REPO_ERROR;
    payload: string;
}

export type Action = 
| SearchRepo
| SearchRepoSucces
| SearchRepoError