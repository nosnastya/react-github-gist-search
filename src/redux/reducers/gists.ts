import { SET_GIST_FORKS_RESOLVED, ADD_SEARCH_ENTRY, SET_GISTS_RESOLVED, SET_GISTS_FAILED, SET_GIST_FORKS_FAILED} from "../actions/types";
import { ActionType } from '../actions';

const initialState: GistsState = { isLoading: false, isResolved: false, gists: [], error: '', recentSearch: [] };

function updateGist(newGist: Pick<Gist, 'id' | 'forks'>, oldGistList: Gist[]) {
  const { id, forks } = newGist;
  const updatedGists = oldGistList.map(gist => {
    if (gist.id === id) {
      return { ...gist, forks, isLoading: false }
    }
    return gist;
  });
  return updatedGists;
};

function updateSearchResults(recentSearches:string[], newResult: string) {
  const results = recentSearches ? [...recentSearches] : [];
  results.unshift(newResult);
  return results;
}

function gistsReducer(
    state = initialState,
    action: ActionType
  ):GistsState {
    switch (action.type) {
      case ADD_SEARCH_ENTRY:
        return {
          ...state,
          isLoading: true,
          isResolved: false,
          error: '',
          recentSearch: updateSearchResults(state.recentSearch, action.payload)
        };

      case SET_GIST_FORKS_RESOLVED:
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

      case SET_GIST_FORKS_FAILED:
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

