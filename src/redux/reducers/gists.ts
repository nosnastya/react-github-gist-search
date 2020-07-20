import { Constants } from "../../enums/shared";
import { ActionType } from '../actions';

const initialState: GistsState = { isLoading: false, isResolved: false, gists: [], error: null, searchQueue: ''};

function gistsReducer(
    state = initialState,
    action: ActionType
  ):GistsState {
    switch (action.type) {
        case Constants.SET_SEARCH_QUEUE:
            return {
                ...state,
                searchQueue: action.payload
            };
        case Constants.REQUEST_GISTS:
          return {
              ...state,
              isLoading: true,
              isResolved: false,
          };

        case Constants.SET_GISTS :
          return {
            ...state,
            isLoading: false,
            gists: action.payload
          };

        case Constants.SET_GISTS_RESOLVED:
            return {
                ...state,
                isResolved: action.payload
            };
        case Constants.SET_GISTS_FAILED:
          return {
              ...state,
              error: action.payload
          };
        default:
            return state;
    }
};

export default gistsReducer;

