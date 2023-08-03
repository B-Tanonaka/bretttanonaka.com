const data = {
  projectData: [
    {
      name: 'Brett Tanonaka',
      year: 2023,
      role: ['Design', 'Engineering'],
      description: 'Portfolio to present my work as a full stack engineer and soon to feature my work as a video producer.',
      techStack: ['TypeScript', 'React', 'AWS', 'Node.js', 'Figma'],
      ref: 'portfolio',
    },
    {
      name: 'Fitbook',
      year: 2023,
      role: ['UI Lead', 'Front-End Engineer'],
      description: 'Social media application to bring together fitness minded individuals. Create communities, host events, find gym buddies and promote a healthy lifestyle.',
      techStack: ['JavaScript', 'React Native', 'Redux', 'Firebase', 'Expo', 'Figma'],
      images: {
        login: [
          { src: 'https://user-images.githubusercontent.com/118404699/238809590-5fa94d3f-d9bd-4d3c-94b9-a93a6cc9ad6d.gif', alt: 'login' },
          { src: 'https://user-images.githubusercontent.com/118404699/238809200-2fef05e3-8930-462c-8cd4-6f86716cf3b4.png', alt: 'Sign up' },
          { src: 'https://user-images.githubusercontent.com/118404699/238809260-c1e8295d-1928-47f4-b3e4-e260c1e21ea4.png', alt: 'Forgot password' },
          { src: 'https://user-images.githubusercontent.com/118404699/238809590-5fa94d3f-d9bd-4d3c-94b9-a93a6cc9ad6d.gif', alt: 'Forgot password gif' },
        ],
      },
      ref: 'fitbook',
    },
    {
      name: 'Mevify',
      year: 2023,
      role: ['Backend-Engineer'],
      description: 'An API for a client-facing e-commerce website.',
      techStack: ['JavaScript', 'Node.js', 'PostgreSQL', 'K6', 'Loader', 'AWS', 'Nginx'],
      ref: 'mevify',
    },
    {
      name: 'Wired Wardrobe',
      year: 2023,
      role: ['Design Lead, Front-End Engineer'],
      description: 'A single page item description page for an e-commerce brand.',
      techStack: ['JavaScript', 'React', 'HTML5/CSS3', 'Redux', 'AWS', 'Jest', 'Node.js'],
      ref: 'wired-wardrobe',
    },
  ],
  description: 'Hello, my name is Brett Tanonaka and I am a full stack developer. Prior to engineering, I was a video producer for almost 10 years. When I was exploring motion design, I discovered After Effects Expressions, a JavaScript based animation language and saw what was possible with code. Today, I use my experience with design to build end-to-end applications that are user-focused, intuitive, and scalable.',
};

export default data;


db.portfolio.updateOne({_id: ObjectId("64b72b01af647d1064b96d48")}, {$set: {images: {
  login: [
    { src: 'https://user-images.githubusercontent.com/118404699/238809590-5fa94d3f-d9bd-4d3c-94b9-a93a6cc9ad6d.gif', alt: 'login' },
    { src: 'https://user-images.githubusercontent.com/118404699/238809200-2fef05e3-8930-462c-8cd4-6f86716cf3b4.png', alt: 'Sign up' },
    { src: 'https://user-images.githubusercontent.com/118404699/238809260-c1e8295d-1928-47f4-b3e4-e260c1e21ea4.png', alt: 'Forgot password' },
    { src: 'https://user-images.githubusercontent.com/118404699/238809590-5fa94d3f-d9bd-4d3c-94b9-a93a6cc9ad6d.gif', alt: 'Forgot password gif' },
  ]
}}})