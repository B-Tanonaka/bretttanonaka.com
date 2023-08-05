const data = {
  projectData: [
    {
      name: 'Brett Tanonaka',
      year: 2023,
      role: ['Design', 'Engineering'],
      description: 'Portfolio to present my work as a full stack engineer and soon to feature my work as a video producer.',
      techStack: ['TypeScript', 'React', 'AWS', 'MongoDB', 'Node.js', 'Figma'],
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
      role: ['Design Lead', 'Front-End Engineer'],
      description: 'A single page item description page for an e-commerce brand.',
      techStack: ['JavaScript', 'React', 'HTML5/CSS3', 'Redux', 'AWS', 'Jest', 'Node.js'],
      ref: 'wired-wardrobe',
    },
  ],
  description: 'Hello, my name is Brett Tanonaka and I am a full stack developer. Prior to engineering, I was a video producer for almost 10 years. When I was exploring motion design, I discovered After Effects Expressions, a JavaScript based animation language and saw what was possible with code. Today, I use my experience with design to build end-to-end applications that are user-focused, intuitive, and scalable.',
};

export default data;

// Fitbook images
// db.portfolio.updateOne({_id: ObjectId("64b72b01af647d1064b96d48")}, {$set: {images: {
//   login: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238809151-a7a9065f-aeff-4ff2-9f14-24b422ba322e.png', alt: 'Login' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238809200-2fef05e3-8930-462c-8cd4-6f86716cf3b4.png', alt: 'Sign up' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238809260-c1e8295d-1928-47f4-b3e4-e260c1e21ea4.png', alt: 'Forgot password' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238809590-5fa94d3f-d9bd-4d3c-94b9-a93a6cc9ad6d.gif', alt: 'Forgot password gif' },
//   ],
//   home: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238805508-2c8a7f1b-f235-450e-82a4-e5585f635e8d.gif', alt: 'Bottom navigation' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238500189-62638f1e-2278-42c9-8a08-7c666dab5b95.gif', alt: 'Event carousel' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238804259-64b45413-db8b-4f9b-ad8a-929effe007dc.png', alt: 'Home - dark mode' },
//   ],
//   comments: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238511650-510a0780-eaf6-4486-b87d-f6ab2e4cf388.gif', alt: 'Opening comment' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238511331-60c8974c-48c0-4e2f-af7d-50ed795b0356.gif', alt: 'Lift/drop' },
//   ],
//   create: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238501522-fb60787f-a247-443e-8c3f-435a674a87bc.gif', alt: 'Create event' },
//   ],
//   profile: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238807754-f88be1ff-9de3-4ba1-8677-52ec4c16beae.png', alt: 'Profile - friends tab' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238807480-c91097be-c33e-4836-825b-9fb6aae80073.png', alt: 'Profile - communities tab' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238807866-90c49c0e-6843-4c04-9a6e-a25a3f22880a.png', alt: 'Profile - profile tab' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238807175-bfa5153f-94ff-4dc9-adef-e38106e7fb14.png', alt: 'Add a fitness stat' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238805701-c9c47419-0d99-434c-a71e-fafa90f8b775.gif', alt: 'Fitness stat interaction' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238805915-596c9cb5-fb45-4636-941c-283c1f7e1a5a.gif', alt: 'Profile - scrolling between tabs' },
//   ],
//   communities: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238501827-8de36655-ca86-43b0-8592-b7bced7d47fe.gif', alt: 'Search communities' },
//   ],
//   messages: [
//     { src: 'https://user-images.githubusercontent.com/118404699/238803450-6fabf363-43fd-4e29-86a4-a398a053735c.gif', alt: 'Message friend from profile friends tab' },
//     { src: 'https://user-images.githubusercontent.com/118404699/238804377-05ee188b-9218-43dc-ad70-819ab054af2d.png', alt: 'List of recent messages' },
//   ],
// }}})

// Portfolio images
// db.portfolio.updateOne({_id: ObjectId("64b72af0af647d1064b96d47")}, {$set: {images: {
//   figma: [
//     { src: 'https://live.staticflickr.com/65535/53090099930_1882462e7e_b.jpg', alt: 'Home' },
//     { src: 'https://live.staticflickr.com/65535/53089877694_b4f3066837_b.jpg', alt: 'Projects' },
//     { src: 'https://live.staticflickr.com/65535/53090186778_bc79570d30_b.jpg', alt: 'Project - individual' },
//     { src: 'https://live.staticflickr.com/65535/53089126262_2f4b1cf53f_b.jpg', alt: 'About' },
//     { src: 'https://live.staticflickr.com/65535/53089877699_978d8ef62f_b.jpg', alt: 'Contact' },
//     { src: 'https://live.staticflickr.com/65535/53090186768_d7aea90608_b.jpg', alt: 'Nav bar' },
//   ]
// }}})

// Mevify images
// db.portfolio.updateOne({_id: ObjectId("64b72b10af647d1064b96d49")}, {$set: {images: {
//   schema: [
//     { src: 'https://user-images.githubusercontent.com/118404699/232244966-fe93e175-9f0f-46e5-8f28-5faae4dbf369.png', alt: 'Schema' },
//   ],
//   loader: [
//     { src: 'https://user-images.githubusercontent.com/118404699/232247977-832f24fa-f640-45ab-96f3-b09c9143f801.png', alt: '5000 requests per second' },
//     { src: 'https://user-images.githubusercontent.com/118404699/232241888-09b4b35d-5232-4b93-a911-ec54e4c83c30.png', alt: '7500 requests per second' },
//   ],
//   k6: [
//     { src: 'https://user-images.githubusercontent.com/118404699/232246178-6739aeb1-3b72-4246-8027-ab54a512d503.png', alt: 'Pre-optimization local test product id endpoint' },
//     { src: 'https://user-images.githubusercontent.com/118404699/232246237-53a1910c-572c-4d18-951b-ed9cd1635aaf.png', alt: 'Pre-optimization local test styles endpoint' },
//   ]
// }}})

// Wired-wardrobe images
// db.portfolio.updateOne({_id: ObjectId("64b72b1caf647d1064b96d4a")}, {$set: {images: {
//   overview: [
//     { src: 'https://user-images.githubusercontent.com/91165462/229319127-6bdc5119-7f46-46e0-bb93-f69ef21cb98d.png', alt: 'Product overview' },
//   ],
//   related: [
//     { src: 'https://user-images.githubusercontent.com/118404699/229316033-ead60d0c-d80a-4444-8461-7ebda8f8e015.png', alt: 'Related items' },
//   ],
//   qna: [
//     { src: 'https://user-images.githubusercontent.com/80349718/229324161-03e53deb-c327-4987-8be9-ba3668328553.png', alt: 'Questions and answers' },
//   ],
//   rnr: [
//     { src: 'https://camo.githubusercontent.com/ddc9b133f4cdb82d13e4b6685b981d75620600f45aa8b80fe1b8cca47619d89f/68747470733a2f2f692e696d6775722e636f6d2f756934475238642e706e67', alt: 'Ratings and reviews' },
//   ]
// }}})

// db.portfolio.updateOne({_id: ObjectId("64b72b1caf647d1064b96d4a")}, {$set: {role: ['Design Lead', 'Front-End Engineer']}})
