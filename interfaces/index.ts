export type Project = {
  _id: string;
  name: string;
  role: string[];
  year: number;
  description: string;
  techStack: string[];
  ref: string;
  repo: string;
  img: string;
  images: { [key: string]: { src: string, alt: string }[] };
};

export type DataProp = {
  data: Project[];
};

export type Form = {
  name: string;
  email: string;
  message: string;
};

export const BlankProject = {
  _id: '',
  name: '',
  role: [],
  year: 0,
  description: '',
  techStack: [],
  ref: '',
  repo: '',
  img: '',
  images: {
    login: [{ src: '', alt: '' }],
    home: [{ src: '', alt: '' }],
    comments: [{ src: '', alt: '' }],
    create: [{ src: '', alt: '' }],
    profile: [{ src: '', alt: '' }],
    communities: [{ src: '', alt: '' }],
    messages: [{ src: '', alt: '' }],
    figma: [{ src: '', alt: '' }],
  },
};
