export type Project = {
  _id: string;
  name: string;
  role: string[];
  year: number;
  description: string;
  techStack: string[];
  ref: string;
  repo: string;
};

export type DataProp = {
  data: Project[];
};

export type Form = {
  name: string;
  email: string;
  message: string;
};
