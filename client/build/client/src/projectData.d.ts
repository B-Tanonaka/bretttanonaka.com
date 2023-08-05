declare const data: {
    projectData: ({
        name: string;
        year: number;
        role: string[];
        description: string;
        techStack: string[];
        ref: string;
        images?: undefined;
    } | {
        name: string;
        year: number;
        role: string[];
        description: string;
        techStack: string[];
        images: {
            login: {
                src: string;
                alt: string;
            }[];
        };
        ref: string;
    })[];
    description: string;
};
export default data;
