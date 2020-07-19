//GET /gists/:gist_id/forks
type Fork ={
  user: User;
  url: string;
  id: string;
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
  forks_url: string;
  files: FileType[];
  description: string;
  owner: User;
  // forks: Fork[];
};

type GistsState = {
  isLoading: boolean;
  isResolved: boolean;
  gists: Gist[];
  error: string | null;
  searchQueue: string
};

type ForkState = {
  forks: Fork[];
}
