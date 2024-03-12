export type EngineerProject = {
  _id: string;
  name: string;
  role: string[];
  year: number;
  description: string;
  techStack: string[];
  ref: string;
  repo: string;
  banner: string;
  images: { [key: string]: { src: string, alt: string }[] };
  order: number;
  link: string;
};

export type VideoProject = {
  _id: string;
  name: string;
  year: string;
  role: string[];
  description: string;
  techStack: string[];
  ref: string;
  banner: string;
  images: { [key: string]: { src: string, alt: string }[] };
  video: { [key: string]: { src: string, alt: string }[] };
  order: number;
};

export type DataProp = {
  data: EngineerProject[];
};

export type RenderPhotoList = (
  img: { src: string, alt: string }, key: number
) => JSX.Element;

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
  banner: '',
  order: 0,
  link: '',
  images: {
    login: [{ src: '', alt: '' }],
    home: [{ src: '', alt: '' }],
    comments: [{ src: '', alt: '' }],
    create: [{ src: '', alt: '' }],
    profile: [{ src: '', alt: '' }],
    communities: [{ src: '', alt: '' }],
    messages: [{ src: '', alt: '' }],
    figma: [{ src: '', alt: '' }],
    schema: [{ src: '', alt: '' }],
    loader: [{ src: '', alt: '' }],
    k6: [{ src: '', alt: '' }],
    overview: [{ src: '', alt: '' }],
    related: [{ src: '', alt: '' }],
    qna: [{ src: '', alt: '' }],
    rnr: [{ src: '', alt: '' }],
  },
};
