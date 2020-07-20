import { SET_GIST_FORKS_RESOLVED, REQUEST_GISTS, SET_GISTS_RESOLVED, SET_GISTS_FAILED, SET_GIST_FORKS_FAILED} from "../actions/types";
import { ActionType } from '../actions';

const initialState: GistsState = { isLoading: false, isResolved: false, gists: [], error: '' };

function updateGist(newFork:any, oldGistList: Gist[]) {
  const { id, forks } = newFork;
  const newGists = oldGistList.map(gist => {
    if (gist.id === id) {
      return { ...gist, forks, isLoading: false }
    }
    return gist;
  });
  return newGists;
}

function gistsReducer(
    state = initialState,
    action: ActionType
  ):GistsState {
    switch (action.type) {
        case REQUEST_GISTS:
          return {
              ...state,
              isLoading: true,
              isResolved: false,
              error: ''
          };

        case SET_GIST_FORKS_RESOLVED :
          return {
            ...state,
            gists: updateGist(action.payload, state.gists)
          };

        case SET_GISTS_RESOLVED:
            return {
                ...state,
                isLoading: false,
                isResolved: true,
                gists: action.payload
            };

        case SET_GISTS_FAILED:
          return {
              ...state,
              isLoading: false,
              error: action.payload
          };

        case SET_GIST_FORKS_FAILED :
          return {
            ...state,
            isLoading: false,
            error: action.payload
          };

        default:
            return state;
    }
};

export default gistsReducer;

