export const personalInfo = {
  name: "Aruran Kirupanatha",
  nickname: "Aruran",
  role: "Full-Stack Developer",
  currentPosition: "Associate Software Engineer",
  company: "iVedha Inc",
  location: "Nallur, Jaffna",
  email: "arukirupa@gmail.com",
  phone: "+94 76-593-8086",
  languages: ["English (Professional)", "Tamil (Native)"],
  
  bio: `A passionate full-stack developer and undergraduate at University of Moratuwa, pursuing BSc (Hons) in IT. Currently working as an Associate Software Engineer at iVedha Inc, building enterprise security solutions and endpoint management systems. Experienced in web development, mobile apps, and production-grade applications.`,
  
  shortBio: `From the inception of a project to its completion, I employ a comprehensive and holistic approach to deliver exceptional digital experiences.`,
  
  personality: [
    "Traditional mindset, grounded, family-based",
    "Ambitious, disciplined, competitive",
    "Gen-Z energy + strong cultural roots",
    "Committed to learning & communication improvement"
  ],
  
  interests: [
    "AR Rahman & Harris Jayaraj 🎧",
    "Hackathons & coding challenges",
    "Web & Mobile Development",
    "AI/ML & New Technologies"
  ]
};

export const skills = {
  frontend: {
    title: "Frontend",
    icon: "🖥️",
    items: ["React", "Redux", "Material-UI", "Tailwind CSS", "HTML/CSS/JS"]
  },
  backend: {
    title: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "FastAPI", "Django","Rust"]
  },
  database: {
    title: "Databases",
    icon: "📦",
    items: ["MongoDB", "MySQL", "Firebase"]
  },
  devops: {
    title: "DevOps & Tools",
    icon: "🧪",
    items: ["Git/GitHub", "Docker", "REST APIs", "Azure"]
  },
  mobile: {
    title: "Mobile",
    icon: "📱",
    items: ["Flutter", "Bloc"]
  },
  design: {
    title: "Design",
    icon: "🎨",
    items: ["Figma", "Photoshop", "Illustrator", "Blender"]
  }
};

export const projects = [
  {
    id: 1,
    title: "Thrifting LK",
    subtitle: "E-Commerce Platform for Second-hand Products",
    description: "Developed and deployed a full-featured e-commerce platform for second-hand products. Implemented content-based recommendation engine using TF-IDF matrix and Cosine similarity, real-time chat application, and search, filter, and cart functionalities.",
    techStack: ["React", "ExpressJS", "Flask", "MongoDB", "Redux", "MaterialUI", "Firebase"],
    role: "Full-Stack Developer",
    type: "Academic Project | Client - CODEZILLA 2024",
    features: [
      "Content-based recommendation engine (TF-IDF, Cosine similarity)",
      "Real-time chat application",
      "Search, filter & cart functionalities"
    ],
    image: "/assets/project-thrifting.png",
    github: "https://github.com/Arunkirupa04/Thrifting.lk",
    live: "https://thrifting-lk-fe.onrender.com/",
    featured: true
  },
  {
    id: 2,
    title: "PremiereTickets",
    subtitle: "Movie Ticket Booking System",
    description: "Developed a movie ticket booking system allowing users to book movies in various theatres, select seats, verify phone numbers via OTP, and generate QR codes and payment for tickets including User Authentication.",
    techStack: ["React", "ExpressJS", "MongoDB", "Redux", "MaterialUI", "Firebase"],
    role: "Full-Stack Developer",
    type: "Individual Project 2024",
    features: [
      "Movie booking across multiple theatres",
      "Seat selection & OTP verification",
      "QR code generation & payment integration",
      "User Authentication"
    ],
    image: "/assets/project-premiere.png",
    github: "https://github.com/Arunkirupa04/PremiereTickets",
    live: "#",
    featured: true
  },
  {
    id: 3,
    title: "Spotify to YouTube Converter",
    subtitle: "Playlist Converter Tool",
    description: "Developing a tool to convert Spotify playlists to YouTube playlists, allowing users to seamlessly transfer their music preferences across platforms.",
    techStack: ["React", "Spotify API", "YouTube API"],
    role: "Full-Stack Developer",
    type: "Individual Project | Ongoing 2024",
    features: [
      "Spotify playlist import",
      "YouTube playlist creation",
      "Cross-platform music transfer"
    ],
    image: "/assets/project-spotify.png",
    github: "#",
    live: "#",
    featured: true
  },
  {
    id: 4,
    title: "Furniture Store App",
    subtitle: "Flutter Mobile Application",
    description: "Developed a Flutter-based mobile app for a furniture store with features including user authentication, product browsing, cart management, and wishlist.",
    techStack: ["Flutter", "ExpressJS", "MongoDB", "Firebase", "Bloc"],
    role: "Mobile Developer",
    type: "Individual Project 2024",
    features: [
      "User authentication",
      "Product browsing & catalog",
      "Cart management & wishlist",
      "Bloc state management"
    ],
    image: "/assets/project-furniture.png",
    github: "https://github.com/Arunkirupa04/Furniture-Store",
    live: "#",
    featured: true
  }
];

export const experience = [
  {
    id: 1,
    title: "Associate Software Engineer",
    company: "iVedha Inc",
    location: "Remote",
    period: "2024 - Present",
    type: "Full-time",
    description: "Building enterprise solutions including AgentNEX - a Rust-based endpoint management system with multi-organization support.",
    techStack: ["Rust", "FastAPI", "PostgreSQL", "Elasticsearch"],
    highlights: [
      "Developed endpoint management agent for Windows Update tracking",
      "Designed scalable architecture with token-based authentication",
      "Built real-time monitoring dashboards"
    ]
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "iVedha Inc",
    location: "Remote",
    period: "2024",
    type: "Internship",
    description: "Contributed to BotNex VAPT - a vulnerability assessment platform with real-time scan monitoring and reporting.",
    techStack: ["React", "Django", "WebSocket", "Elasticsearch"],
    highlights: [
      "Implemented scan scheduling and exclusion features",
      "Built real-time updates using WebSocket",
      "Created vulnerability cards and scan history UI"
    ]
  }
];

export const education = {
  university: {
    name: "University of Moratuwa",
    degree: "BSc (Hons) in Information Technology",
    status: "Undergraduate",
    location: "Sri Lanka",
    logo: "/assets/uom-logo.png"
  },
  certifications: [
    {
      id: 1,
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "2023",
      logo: "/assets/ibm-logo.png"
    }
  ],
  achievements: [
    {
      id: 1,
      title: "CodeRush 2023",
      position: "11th Place",
      icon: "🏆"
    },
    {
      id: 2,
      title: "MoraXtreme 8.0",
      position: "Participant",
      icon: "💻"
    },
    {
      id: 3,
      title: "ENIGMA '24",
      position: "Participant",
      icon: "🧩"
    },
    {
      id: 4,
      title: "XTREME 2023",
      position: "Participant",
      icon: "⚡"
    },
    {
      id: 5,
      title: "Leo Club UoM",
      position: "Active Member",
      icon: "🦁"
    }
  ]
};

export const socialLinks = {
  github: "https://github.com/Arunkirupa04",
  linkedin: "https://www.linkedin.com/in/aruran-kirupanantha-b94387242/",
  medium: "https://medium.com/@arukirupa",
  email: "mailto:arukirupa@gmail.com"
};

export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" }
];
