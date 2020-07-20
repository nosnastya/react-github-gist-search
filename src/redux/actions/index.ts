import { typedAction } from "../helpers/typedAction";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "../reducers/index";
import { Constants } from "../../enums/shared";

const setGists = (gists: Gist[]) => {
    return typedAction(Constants.SET_GISTS, gists);
};

const requestGists = () => {
    return typedAction(Constants.REQUEST_GISTS);
};

const setGistsResolved = (isResolved: boolean) => {
    return typedAction(Constants.SET_GISTS_RESOLVED, isResolved);
};

const setGistsFailed = (error: string) => {
  return typedAction(Constants.SET_GISTS_FAILED, error);
};

const setSearchQueue = (searchQueue: string) => {
    return typedAction(Constants.SET_SEARCH_QUEUE, searchQueue);
};

const setGistForks = (forks: Fork[]) => {
  return typedAction(Constants.SET_GIST_FORKS, forks);
};

export const requestGistForks = (id: string) => {
  return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    return await fetch(`https://api.github.com/gists/${id}/forks?page=1&per_page=3`)
      .then(res => res.json())
}
};

const gistForks = (id: string ) => {`https://api.github.com/gists/${id}/forks?page=1&per_page=3`;}

// needed for persisting query to local storage
export const changeSearchQueue = (searchQueue: string) => {
    return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
        dispatch(setSearchQueue(searchQueue));
    }
};

export const loadGists = (searchQuery: string) => {
    return async (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
        dispatch(requestGists());
        return await fetch(`https://api.github.com/users/${searchQuery}/gists?page=1&per_page=2`)
            .then(res => res.json())
            .then(json => {
              let gists = json;
              for (let i = 0; i < gists.length; i++) {
                  let item = fetch(gistForks(gists[i].id));
                  gists[i]['forks'] = item.json();
              }
              dispatch(setGists([...gists]))
            })
            .then(() => dispatch(setGistsResolved(true)))
            .catch(err => dispatch(setGistsFailed(err.message)))
    }
};

export const resetGists = () => {
    return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
        dispatch(setGistsResolved(false));
        dispatch(setGists([]));
    }
};

export type ActionType =
ReturnType<typeof requestGists
| typeof setGists
| typeof setGistsResolved
| typeof setGistsFailed
| typeof setSearchQueue
| typeof setGistForks
>;
