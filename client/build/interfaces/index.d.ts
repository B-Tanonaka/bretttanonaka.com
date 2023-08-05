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
    images: {
        [key: string]: {
            src: string;
            alt: string;
        }[];
    };
};
export type DataProp = {
    data: Project[];
};
export type Form = {
    name: string;
    email: string;
    message: string;
};
export declare const BlankProject: {
    _id: string;
    name: string;
    role: never[];
    year: number;
    description: string;
    techStack: never[];
    ref: string;
    repo: string;
    img: string;
    images: {
        login: {
            src: string;
            alt: string;
        }[];
        home: {
            src: string;
            alt: string;
        }[];
        comments: {
            src: string;
            alt: string;
        }[];
        create: {
            src: string;
            alt: string;
        }[];
        profile: {
            src: string;
            alt: string;
        }[];
        communities: {
            src: string;
            alt: string;
        }[];
        messages: {
            src: string;
            alt: string;
        }[];
        figma: {
            src: string;
            alt: string;
        }[];
        schema: {
            src: string;
            alt: string;
        }[];
        loader: {
            src: string;
            alt: string;
        }[];
        k6: {
            src: string;
            alt: string;
        }[];
        overview: {
            src: string;
            alt: string;
        }[];
        related: {
            src: string;
            alt: string;
        }[];
        qna: {
            src: string;
            alt: string;
        }[];
        rnr: {
            src: string;
            alt: string;
        }[];
    };
};
