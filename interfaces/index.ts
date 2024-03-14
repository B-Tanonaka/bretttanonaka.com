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
  company: string;
  name: string;
  year: string;
  role: string[];
  description: { partOne: string, partTwo: string };
  techStack: string[];
  ref: string;
  banner: string;
  images: { [key: string]: { src: string, alt: string }[] };
  videos: { [key: string]: { link: string, blurb: string } };
  order: number;
};

export type Project = VideoProject | EngineerProject;

export type AboutData = {
  engineer: {
    about: string,
    intro: {
      main: string,
      sec: string
    }
  },
  video: {
    about: string,
    intro: {
      main: string,
      sec: string
    }
  },
  about: string,
  intro: {
    main: string,
    sec: string,
  };
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
};

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
