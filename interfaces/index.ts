export type AboutData = {
  engineer: {
    about: string,
    intro: {
      main: string,
      sec: string
    },
    resume: string,
  },
  video: {
    about: string,
    intro: {
      main: string,
      sec: string
    },
    resume?: string,
  },
  about: { part1: string, part2?: string },
  intro: {
    main: string,
    sec: string,
  }
  resume: string,
};

export type AboutInfo = {
  [key: string]: AboutData,
};

export type RenderPhotoList = (
  img: { src: string, alt: string }, key: number, className: string
) => JSX.Element;

export type RenderList = (text: string, index: number) => JSX.Element;

export type Form = {
  name: string;
  email: string;
  message: string;
};

export type Image = {
  src: string;
  alt: string;
  desc?: string;
  desc1?: string;
  desc2?: string;
  title?: string;
};

type Text = {
  part1: string;
  part2: string;
  part3?: string;
  title?: string;
  takeaway?: string;
};

export type EngineerProject = {
  _id: string;
  name: string;
  role: string[];
  displayRole?: string;
  year: number;
  description: string;
  techStack: string[];
  ref: string;
  repo: string;
  banner: string;
  images: any;
  order: number;
  link: string;
  visible?: boolean;
  text: { [key: string]: Text }
  & { [key: string]: string };
};

export type VideoProject = {
  _id: string;
  company: string;
  name: string;
  year: string;
  role: string[];
  displayRole?: string;
  description: { partOne: string, partTwo: string };
  techStack: string[];
  ref: string;
  banner: string;
  images: any;
  videos: any;
  order: number;
  visible?: boolean;
};

export type Project = VideoProject | EngineerProject;

export const BlankAboutData = {
  engineer: {
    about: '',
    intro: {
      main: '',
      sec: '',
    },
  },
  video: {
    about: '',
    intro: {
      main: '',
      sec: '',
    },
  },
};
