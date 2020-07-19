import { Constants } from "../../enums/shared";
import { ActionType } from '../actions';

const initialState: ForkState = { forks: []};

function forksReducer(
    state = initialState,
    action: ActionType
  ):ForkState {
    switch (action.type) {
        case Constants.SET_GIST_FORKS :
          return {
            ...state,
            forks: action.payload
          };

        default:
          return state;
    }
};

export default forksReducer;

