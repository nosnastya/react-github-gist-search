type Fork ={
  html_url: string;
  id: string;
  owner: User;
}

type User = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
};

type FileType = {
  filename: string;
  type: string;
  language: string;
};

type Gist = {
  id: string;
  html_url: string;
  files: FileType[];
  description: string;
  owner: User;
  forks: Fork[];
  comments: number;
};

type GistsState = {
  isLoading: boolean;
  isResolved: boolean;
  gists: Gist[];
  error: string,
  recentSearch: string[]
};
