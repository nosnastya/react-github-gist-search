import { typedAction } from "../helpers/typedAction";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "../reducers/index";
import { create, ApiResponse } from "apisauce";
import {
  ADD_SEARCH_ENTRY,
  SET_GISTS_RESOLVED,
  SET_GISTS_FAILED,
  SET_GIST_FORKS_RESOLVED,
  SET_GIST_FORKS_FAILED,
} from "./types";

const api = create({
  baseURL: 'https://api.github.com'
});

const addSearchEntry = (searchEntry: string) => {
  return typedAction(ADD_SEARCH_ENTRY, searchEntry);
};

const setGistsResolved = (gists: Gist[]) => {
  return typedAction(SET_GISTS_RESOLVED, gists);
};

const setGistsFailed = (error: string) => {
  return typedAction(SET_GISTS_FAILED, error);
};

const setGistForksResolved = (forksObj:{forks: Fork[] | [], id: string}) => {
  return typedAction(SET_GIST_FORKS_RESOLVED, forksObj);
};

const setGistForksFailed = (error: string) => {
  return typedAction(SET_GIST_FORKS_FAILED, error);
};

export const loadGistForks = (id: string) => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    api.get(`gists/${id}/forks?page=1&per_page=3`)
    .then((response: ApiResponse<any>) => {
      if(response.ok) {
        if(response.data.length > 0) {
          const deserializedForks = { forks: response.data || [], id };
          dispatch(setGistForksResolved(deserializedForks));
        }
      } else {
        dispatch(setGistForksFailed(response.problem));
      }
    })
  }
};

export const loadGists = (searchQuery: string) => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    dispatch(addSearchEntry(searchQuery));
    api.get(`users/${searchQuery}/gists`)
      .then((response: ApiResponse<any>) => {
        if(response.ok) {
          if(response.data.length > 0) {
            dispatch(setGistsResolved([...response.data]))
          } else {
            dispatch(setGistsFailed('User has 0 public gists.'));
          }
        } else {
          let err = response.status === 404 ? 'User not found.' : response.problem;
          dispatch(setGistsFailed(err));
        }
      })
  }
};

export type ActionType =
ReturnType<typeof addSearchEntry
| typeof setGistsResolved
| typeof setGistsFailed
| typeof setGistForksResolved
| typeof setGistForksFailed
>;
