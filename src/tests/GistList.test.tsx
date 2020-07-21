import { RootState } from "../redux/reducers";

const listGists = (state: RootState) => {
  return state.gists;
};

describe("Gist List State", () => {
  it("Should return a list of gistsfrom a state", () => {
    const gistState: RootState["gists"] = {
      isLoading: false,
      isResolved: true,
      error: '',
      recentSearch: ['react'],
      gists: [
        {
          id: "111-111-aaa",
          html_url: "testUrl.com",
          files: [{
            filename: "filename",
            type: "html",
            language: "javascript"
          }],
          description: "Some description about this gist",
          owner: {
            login: "Test user 1",
            id: 222,
            avatar_url: "testImage.png",
            html_url: "testUrl.com"
          },
          forks: [{
            html_url: "testUrl.com",
            id: "111-222-aaa",
            owner: {
              login: "Test user 2",
              id: 221,
              avatar_url: "testImage.png",
              html_url: "testUrl.com"
            }
          }],
          comments: 2
        }
      ]
    };

    const state: RootState = {
      gists: gistState,
    };

    expect(listGists(state)).toStrictEqual(gistState);
  });
});
