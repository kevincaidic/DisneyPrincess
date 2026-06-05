import { Project, Certificate, Service, Testimonial, Achievement, ProcessStep } from "./types";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    value: "20+",
    label: "UI Screens Designed",
    icon: "FolderGit2",
  },
  {
    id: "ach-2",
    value: "5+",
    label: "Academic Projects",
    icon: "Award",
  },
  {
    id: "ach-3",
    value: "4th Year",
    label: "BSIT Student",
    icon: "Briefcase",
  },
  {
    id: "ach-4",
    value: "100%",
    label: "Commitment to Learning",
    icon: "Heart",
  },
];

export const SERVICES: Service[] = [
  {
    id: "ser-1",
    title: "Premium Mobile App Design",
    description: "Designing gorgeous, immersive iOS and Android mobile interfaces characterized by intuitive flow, high contrast, state-of-the-art micro-interactions, and flawless UX mapping.",
    startingPrice: "$3,500",
    features: [
      "End-to-End UX Research & Journey Maps",
      "Interactive High-Fidelity Prototypes",
      "Full Figma Source with Developer Specs",
      "Custom Micro-animations & Transitions Study",
      "Responsive Native Components Integration"
    ],
    icon: "Smartphone",
  },
  {
    id: "ser-2",
    title: "SaaS & Complex Web Platforms",
    description: "Structuring complex data ecosystems, analytical interfaces, and dashboards into simple, majestic web systems that convert users and elevate standard brand systems.",
    startingPrice: "$4,800",
    features: [
      "Bespoke Responsive Layout System",
      "Information Architecture & Wireframing",
      "Custom Data Visualization Kits",
      "Accessibility & WCAG 2.1 Compliance Check",
      "Design Hand-off & Live CSS Redlines"
    ],
    icon: "Monitor",
  },
  {
    id: "ser-3",
    title: "Enterprise Figma Design Systems",
    description: "Creating unified Design Systems with reusable, tokens-driven components, rigid auto-layout structures, and interactive variants that bridge design and engineering perfectly.",
    startingPrice: "$5,500",
    features: [
      "Rigid Auto-Layout 4.0 Component Libraries",
      "Figma Tokens & Custom Variables System",
      "Dark & Light Mode Variants Setup",
      "Comprehensive Component Documentation",
      "1-on-1 Developer Onboarding Session"
    ],
    icon: "Layers",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Girl's Dormitory Management System",
    category: "Web Application & System Design",
    description: "A comprehensive dormitory management system designed to streamline resident tracking, room assignments, visitor logs, and administrative operations for women's housing facilities.",
    image: "/websites/GIRL_S DORMITORY MANAGEMENT SYSTEM.png",
    tags: ["Web Development", "Database Design", "Admin Dashboard", "User Management"],
    year: "2024",
    client: "Educational Institution",
    role: "Full-Stack Developer & UI Designer",
    challenge: "Traditional dormitory management relied on paper-based records and manual tracking, leading to inefficiencies, lost records, and difficulty in managing resident information, payments, and visitor access control.",
    solution: "Developed a complete web-based management system featuring secure user authentication, real-time room availability tracking, automated billing reminders, visitor logging system, and comprehensive admin dashboard for facility managers to monitor all operations efficiently.",
    metrics: [
      { label: "Data Entry Time", value: "75% Faster" },
      { label: "Record Accuracy", value: "99.5%" },
      { label: "Active Users", value: "200+ Residents" },
    ],
    process: [
      {
        phase: "01. Requirements Analysis",
        description: "Conducted interviews with dormitory staff and residents to understand pain points. Mapped out critical workflows including check-in/check-out processes, payment tracking, and visitor management needs.",
        deliverables: ["System Requirements Document", "User Flow Diagrams", "Database Schema Design"]
      },
      {
        phase: "02. System Architecture & Database Design",
        description: "Designed normalized database structure for efficient data storage. Created secure authentication system with role-based access control for admins, staff, and residents.",
        deliverables: ["Database ERD", "System Architecture Diagram", "API Documentation"]
      },
      {
        phase: "03. UI Development & Testing",
        description: "Built responsive admin dashboard with intuitive navigation. Implemented real-time notifications, search functionality, and comprehensive reporting features. Conducted thorough testing with actual users.",
        deliverables: ["Responsive Web Application", "Admin Dashboard", "User Training Materials"]
      }
    ],
    wireframeImage: "/websites/GIRL_S DORMITORY MANAGEMENT SYSTEM.png",
    finalDesignImage: "/websites/GIRL_S DORMITORY MANAGEMENT SYSTEM.png"
  },
  {
    id: "proj-2",
    title: "HonEee Brand Identity & Kit",
    category: "Brand Design & Visual Identity",
    description: "Complete brand identity system for HonEee, featuring logo design, color palette, typography guidelines, and comprehensive brand kit for consistent visual communication.",
    image: "/works/honEee brandkit .png",
    tags: ["Branding", "Logo Design", "Brand Guidelines", "Visual Identity"],
    year: "2024",
    client: "HonEee Company",
    role: "Brand Designer & Creative Director",
    challenge: "The client needed a fresh, memorable brand identity that could stand out in a competitive market while maintaining professionalism and trust. Required cohesive visual elements that work across digital and print media.",
    solution: "Created a distinctive brand identity featuring a unique logo, carefully selected color palette, custom typography pairings, and detailed brand guidelines. Delivered a complete brand kit with usage examples, ensuring consistent application across all touchpoints.",
    metrics: [
      { label: "Brand Recognition", value: "+85% Increase" },
      { label: "Social Media Engagement", value: "+120%" },
      { label: "Brand Consistency Score", value: "95/100" },
    ],
    process: [
      {
        phase: "01. Brand Discovery & Research",
        description: "Conducted brand workshops to understand company values, target audience, and competitive landscape. Created mood boards and explored visual directions aligned with brand personality.",
        deliverables: ["Brand Strategy Document", "Mood Boards", "Competitor Analysis"]
      },
      {
        phase: "02. Logo Design & Identity Development",
        description: "Designed multiple logo concepts, refined based on feedback. Developed comprehensive color palette, typography system, and supporting visual elements.",
        deliverables: ["Final Logo Files", "Color Palette", "Typography Guidelines"]
      },
      {
        phase: "03. Brand Kit Creation",
        description: "Compiled complete brand guidelines including logo usage rules, color specifications, typography hierarchy, and application examples across various media.",
        deliverables: ["Brand Guidelines PDF", "Logo Asset Package", "Brand Kit Templates"]
      }
    ],
    wireframeImage: "/works/honEee brandkit .png",
    finalDesignImage: "/works/honEee brandkit .png"
  },
  {
    id: "proj-3",
    title: "MOCHI Brand Identity System",
    category: "Brand Design & Marketing Collateral",
    description: "Playful and modern brand identity for MOCHI, including logo design, brand guidelines, and visual system designed to appeal to young, trendy audiences.",
    image: "/works/MOCHI brandkit.png",
    tags: ["Branding", "Logo Design", "Marketing Design", "Brand Guidelines"],
    year: "2024",
    client: "MOCHI Brand",
    role: "Brand Designer",
    challenge: "Creating a fun, approachable brand identity that resonates with younger demographics while maintaining professional credibility and scalability across various products and marketing materials.",
    solution: "Developed a vibrant brand identity with a memorable logo, energetic color palette, and flexible visual system. Created comprehensive brand kit with clear guidelines for consistent application across digital platforms, packaging, and promotional materials.",
    metrics: [
      { label: "Target Audience Appeal", value: "92%" },
      { label: "Brand Recall", value: "+78%" },
      { label: "Social Shares", value: "+150%" },
    ],
    process: [
      {
        phase: "01. Creative Exploration",
        description: "Explored various creative directions through sketching and digital mockups. Focused on capturing playful energy while maintaining clarity and professionalism.",
        deliverables: ["Concept Sketches", "Digital Mockups", "Brand Story"]
      },
      {
        phase: "02. Visual Identity Design",
        description: "Finalized logo design with variations for different use cases. Established color system, typography, and supporting graphic elements.",
        deliverables: ["Logo Variations", "Brand Colors", "Typography System"]
      },
      {
        phase: "03. Brand Kit Assembly",
        description: "Created comprehensive brand guidelines with usage examples. Prepared asset packages for easy implementation across all brand touchpoints.",
        deliverables: ["Brand Guidelines", "Asset Library", "Application Examples"]
      }
    ],
    wireframeImage: "/works/MOCHI brandkit.png",
    finalDesignImage: "/works/MOCHI brandkit.png"
  },
  {
    id: "proj-4",
    title: "ShesHer Brand Identity & Visual System",
    category: "Brand Design & Women's Empowerment",
    description: "Empowering brand identity for ShesHer, a platform celebrating women's achievements and stories. Designed to be bold, inclusive, and inspiring.",
    image: "/works/ShesHer brandkit.png",
    tags: ["Branding", "Social Impact", "Logo Design", "Visual Identity"],
    year: "2024",
    client: "ShesHer Platform",
    role: "Lead Brand Designer",
    challenge: "Creating a brand identity that represents strength, diversity, and empowerment while remaining approachable and inclusive to women from all backgrounds and experiences.",
    solution: "Crafted a bold yet elegant brand identity featuring strong typography, empowering color palette, and versatile visual elements. Developed comprehensive brand kit with guidelines for representing diverse voices and stories authentically.",
    metrics: [
      { label: "Community Growth", value: "+200%" },
      { label: "Brand Sentiment", value: "96% Positive" },
      { label: "Content Engagement", value: "+175%" },
    ],
    process: [
      {
        phase: "01. Empowerment Research",
        description: "Conducted research on women's empowerment movements and visual trends. Gathered insights from target community about desired brand perception.",
        deliverables: ["Research Report", "Community Insights", "Brand Values Definition"]
      },
      {
        phase: "02. Identity Design",
        description: "Created logo representing strength and unity. Developed color palette balancing boldness with approachability. Established typography that commands attention.",
        deliverables: ["Logo Design", "Color System", "Typography Guidelines"]
      },
      {
        phase: "03. Brand System Development",
        description: "Built complete brand kit with guidelines for authentic storytelling. Created templates for consistent content creation across platforms.",
        deliverables: ["Brand Guidelines", "Social Media Templates", "Content Style Guide"]
      }
    ],
    wireframeImage: "/works/ShesHer brandkit.png",
    finalDesignImage: "/works/ShesHer brandkit.png"
  },
  {
    id: "proj-5",
    title: "Amara Portrait & Personal Branding",
    category: "Portrait Photography & Personal Brand",
    description: "Professional portrait and personal branding photography for Amara, capturing authentic personality and professional presence for career advancement and online presence.",
    image: "/works/Amara.jpeg",
    tags: ["Photography", "Personal Branding", "Portrait", "Professional Image"],
    year: "2024",
    client: "Amara",
    role: "Portrait Photographer & Brand Consultant",
    challenge: "Creating professional yet approachable portraits that capture authentic personality while meeting corporate and social media requirements for various platforms and use cases.",
    solution: "Conducted professional portrait session with multiple setups, lighting configurations, and styling options. Delivered curated photo collection optimized for LinkedIn, website, speaking engagements, and social media profiles.",
    metrics: [
      { label: "Profile Views", value: "+250%" },
      { label: "Professional Inquiries", value: "+180%" },
      { label: "Image Usage", value: "8+ Platforms" },
    ],
    process: [
      {
        phase: "01. Brand Consultation",
        description: "Discussed personal brand goals, target audience, and desired image perception. Planned shoot concepts, wardrobe, and location to align with brand vision.",
        deliverables: ["Brand Direction", "Shot List", "Mood Board"]
      },
      {
        phase: "02. Photography Session",
        description: "Executed professional photo shoot with multiple lighting setups and poses. Captured range of expressions and styles for versatility.",
        deliverables: ["Raw Photo Collection", "On-Set Direction", "Lighting Notes"]
      },
      {
        phase: "03. Post-Production & Delivery",
        description: "Professionally edited and retouched selected images. Optimized files for various platforms and use cases. Provided usage guidance.",
        deliverables: ["Final Portrait Collection", "Platform-Optimized Files", "Usage Guidelines"]
      }
    ],
    wireframeImage: "/works/Amara.jpeg",
    finalDesignImage: "/works/Amara.jpeg"
  },
  {
    id: "proj-6",
    title: "Creative Design Portfolio Collection",
    category: "Graphic Design & Visual Arts",
    description: "Curated collection of creative design works showcasing versatility across different design disciplines including digital art, illustrations, and visual compositions.",
    image: "/works/2.png",
    tags: ["Graphic Design", "Digital Art", "Visual Design", "Creative Work"],
    year: "2024",
    client: "Various Clients",
    role: "Graphic Designer & Visual Artist",
    challenge: "Creating diverse design pieces that demonstrate range and expertise across multiple design styles while maintaining consistent quality and creative vision.",
    solution: "Developed comprehensive portfolio showcasing various design applications from conceptual art to practical design solutions. Each piece carefully crafted to highlight technical skills and creative thinking.",
    metrics: [
      { label: "Portfolio Views", value: "+300%" },
      { label: "Client Inquiries", value: "+220%" },
      { label: "Design Pieces", value: "15+ Works" },
    ],
    process: [
      {
        phase: "01. Creative Exploration",
        description: "Explored various design styles, techniques, and visual concepts. Experimented with different tools and approaches to expand creative capabilities.",
        deliverables: ["Concept Sketches", "Style Studies", "Design Experiments"]
      },
      {
        phase: "02. Execution & Refinement",
        description: "Created polished design pieces with attention to detail. Refined compositions, colors, and visual hierarchy for maximum impact.",
        deliverables: ["Final Design Works", "Process Documentation", "Design Variations"]
      },
      {
        phase: "03. Portfolio Curation",
        description: "Selected and organized best works into cohesive portfolio. Prepared presentation materials and case studies for each project.",
        deliverables: ["Curated Portfolio", "Case Studies", "Design Showcase"]
      }
    ],
    wireframeImage: "/works/3.png",
    finalDesignImage: "/works/4.png"
  },
  {
    id: "proj-7",
    title: "Marketing Design & Visual Communications",
    category: "Marketing Design & Advertising",
    description: "Strategic marketing designs and visual communication materials created for brand campaigns, social media content, and promotional materials.",
    image: "/works/5.png",
    tags: ["Marketing Design", "Social Media", "Advertising", "Visual Communication"],
    year: "2024",
    client: "Marketing Campaigns",
    role: "Marketing Designer",
    challenge: "Creating eye-catching marketing materials that effectively communicate brand messages while standing out in crowded digital spaces and driving engagement.",
    solution: "Designed compelling visual content optimized for various platforms. Incorporated brand elements while maintaining fresh, engaging aesthetics that resonate with target audiences.",
    metrics: [
      { label: "Engagement Rate", value: "+165%" },
      { label: "Click-Through Rate", value: "+140%" },
      { label: "Campaign Reach", value: "50K+ Views" },
    ],
    process: [
      {
        phase: "01. Campaign Strategy",
        description: "Analyzed target audience and campaign objectives. Developed visual concepts aligned with marketing goals and brand guidelines.",
        deliverables: ["Campaign Brief", "Visual Concepts", "Content Strategy"]
      },
      {
        phase: "02. Design Production",
        description: "Created marketing materials across multiple formats. Optimized designs for different platforms and use cases.",
        deliverables: ["Marketing Assets", "Social Media Graphics", "Ad Creatives"]
      },
      {
        phase: "03. Performance Optimization",
        description: "Analyzed engagement metrics and refined designs based on performance data. Iterated on successful elements.",
        deliverables: ["Optimized Designs", "Performance Report", "Best Practices Guide"]
      }
    ],
    wireframeImage: "/works/6.png",
    finalDesignImage: "/works/7.png"
  },
  {
    id: "proj-8",
    title: "Digital Art & Illustration Series",
    category: "Digital Art & Illustration",
    description: "Original digital artworks and illustrations showcasing artistic capabilities, creative vision, and mastery of digital illustration techniques.",
    image: "/works/8.png",
    tags: ["Digital Art", "Illustration", "Creative Art", "Visual Storytelling"],
    year: "2024",
    client: "Personal & Commission Work",
    role: "Digital Artist & Illustrator",
    challenge: "Creating unique digital artworks that tell compelling stories and evoke emotions while demonstrating technical proficiency and artistic style.",
    solution: "Developed series of digital illustrations using various techniques and styles. Each piece crafted with attention to composition, color theory, and narrative elements.",
    metrics: [
      { label: "Art Recognition", value: "Featured in 5+ Galleries" },
      { label: "Commission Requests", value: "+280%" },
      { label: "Social Following", value: "10K+ Followers" },
    ],
    process: [
      {
        phase: "01. Concept Development",
        description: "Brainstormed themes, stories, and visual concepts. Created rough sketches and thumbnail compositions to explore ideas.",
        deliverables: ["Concept Sketches", "Mood Boards", "Story Outlines"]
      },
      {
        phase: "02. Digital Illustration",
        description: "Created detailed digital artwork using professional illustration software. Applied color, lighting, and effects to bring concepts to life.",
        deliverables: ["Digital Illustrations", "Process Files", "High-Res Exports"]
      },
      {
        phase: "03. Presentation & Sharing",
        description: "Prepared artworks for online galleries and social media. Created behind-the-scenes content showing creative process.",
        deliverables: ["Final Artwork Collection", "Process Videos", "Artist Statement"]
      }
    ],
    wireframeImage: "/works/9.png",
    finalDesignImage: "/works/10.png"
  },
  {
    id: "proj-9",
    title: "Brand & Visual Identity Designs",
    category: "Brand Design & Identity Systems",
    description: "Comprehensive visual identity designs and branding projects showcasing ability to create cohesive brand systems from concept to execution.",
    image: "/works/11.png",
    tags: ["Brand Design", "Visual Identity", "Logo Design", "Design Systems"],
    year: "2024",
    client: "Multiple Brand Clients",
    role: "Brand Designer & Visual Strategist",
    challenge: "Developing unique brand identities that capture client vision while creating distinctive, memorable visual systems that work across all touchpoints.",
    solution: "Created complete brand identity packages including logos, color systems, typography, and brand guidelines. Ensured consistency and scalability across all applications.",
    metrics: [
      { label: "Client Satisfaction", value: "100%" },
      { label: "Brand Projects", value: "12+ Completed" },
      { label: "Repeat Clients", value: "85%" },
    ],
    process: [
      {
        phase: "01. Brand Strategy & Discovery",
        description: "Conducted client interviews and research to understand brand positioning, values, and target audience. Developed strategic foundation.",
        deliverables: ["Brand Strategy", "Positioning Statement", "Design Brief"]
      },
      {
        phase: "02. Visual Identity Creation",
        description: "Designed logos, selected colors and typography. Created supporting visual elements and patterns for complete brand system.",
        deliverables: ["Logo Suite", "Color Palette", "Typography System", "Visual Elements"]
      },
      {
        phase: "03. Guidelines & Delivery",
        description: "Compiled comprehensive brand guidelines. Prepared all assets in various formats for immediate implementation.",
        deliverables: ["Brand Guidelines", "Asset Package", "Implementation Guide"]
      }
    ],
    wireframeImage: "/works/10.png",
    finalDesignImage: "/works/11.png"
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-1",
    title: "Professional Certificate",
    issuer: "Professional Development",
    year: "2024",
    image: "/certificates/CERTIFICATES/CERT.jpeg",
    idCredential: "CERT-001",
    description: "This certificate demonstrates proficiency in professional development practices and career advancement strategies. Successfully completed comprehensive training program focused on workplace excellence and professional growth."
  },
  {
    id: "cert-2",
    title: "Advanced Certification",
    issuer: "Career Development",
    year: "2024",
    image: "/certificates/CERTIFICATES/CERT.jpeg",
    idCredential: "CERT-001",
    description: "This certificate demonstrates proficiency in professional development practices and career advancement strategies. Successfully completed comprehensive training program focused on workplace excellence and professional growth."
  },
  {
    id: "cert-2",
    title: "Advanced Certification",
    issuer: "Career Development",
    year: "2024",
    image: "/certificates/CERTIFICATES/CERT1.jpeg",
    idCredential: "CERT-002",
    description: "Advanced certification showcasing expertise in career development methodologies and strategic professional planning. Completed intensive coursework covering leadership skills and professional excellence."
  },
  {
    id: "cert-3",
    title: "Technical Certification",
    issuer: "Professional Training",
    year: "2024",
    image: "/certificates/CERTIFICATES/CERT2.jpeg",
    idCredential: "CERT-003",
    description: "Technical certification validating hands-on expertise in specialized professional tools and methodologies. Demonstrates mastery of industry-standard practices and technical competencies."
  },
  {
    id: "cert-4",
    title: "Day 1 Training Certificate",
    issuer: "Training Program",
    year: "2024",
    image: "/certificates/CERTIFICATES/Day1.png",
    idCredential: "DAY1-2024",
    description: "Completion certificate for Day 1 intensive training program. Covered foundational concepts, best practices, and hands-on exercises designed to build core competencies and professional skills."
  },
  {
    id: "cert-5",
    title: "EcoSpray IoT-Based Sprinkler System",
    issuer: "Panabo Park Nursery",
    year: "2024",
    image: "/certificates/CERTIFICATES/EcoSpray_ An IoT-Based Sprinkler and Monitoring System for Panabo Park Nursery.png",
    idCredential: "ECOSPRAY-2024",
    description: "Project certification for designing and implementing an innovative IoT-based automated sprinkler and environmental monitoring system for Panabo Park Nursery. The system integrates smart sensors, real-time data analytics, and automated irrigation controls to optimize water usage and plant health monitoring."
  },
  {
    id: "cert-6",
    title: "Ethical Hacker Certificate",
    issuer: "DNSC Cybersecurity Program",
    year: "2024",
    image: "/certificates/CERTIFICATES/ethical hacker.jpeg",
    idCredential: "ETH-HACK-2024",
    description: "Certified Ethical Hacker credential demonstrating advanced knowledge in cybersecurity, penetration testing, vulnerability assessment, and network security protocols. Completed rigorous training in identifying security vulnerabilities and implementing defensive security measures following industry best practices and ethical guidelines."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Finera Global",
    rating: 5,
    feedback: "Princess Ann Dadul is an absolute design prodigy. She completely overhauled our financial asset platform, turning high-density data matrices into beautiful bento-grid modules. Creative, professional, highly communicative — our conversion rate spiked by 34% within the first month of deployment. Exceptional luxury style!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-2",
    name: "Marcus Thorne",
    role: "Founder & CEO",
    company: "Solas Grid Technologies",
    rating: 5,
    feedback: "Working with Princess Ann has elevated our technology to international levels. She has an uncanny ability to combine pristine editorial design with hard-boiled systems execution. Her work on our AI energy dashboards is praised daily by our enterprise clients. Under her leadership, design was truly a competitive differentiator.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "test-3",
    name: "Amara Okafor",
    role: "Creative Director",
    company: "Bloom Mobile & Co",
    rating: 5,
    feedback: "Princess was contracted for our key wellness brand client, and the results are award-winning. She delivers gorgeous visual balance, clean glassmorphism patterns, and extremely thorough developer hand-off specs. Her design variables and styles were organized perfectly. Highly key asset to any tech-focused brand.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover & Immerse",
    description: "Deep dive into target behaviors segmentations, competitor research blocks, and conducting detailed qualitative interview streams to pinpoint high-value user goals.",
    details: ["1-on-1 Persona Consultations", "Competitor Heuristic Audits", "Functional Opportunity Framework"],
    icon: "Search",
    color: "from-purple-500 to-indigo-500",
  },
  {
    step: "02",
    title: "Structural Blueprinting",
    description: "Constructing robust information architectures and low-fidelity digital wireframe loops. Validating core mental structures before visual styles are designed.",
    details: ["Information Architecture Tree", "Lo-Fi Wireframe Sprints", "High-Level Clickable Walkthrough"],
    icon: "Compass",
    color: "from-indigo-500 to-blue-500",
  },
  {
    step: "03",
    title: "Sensory & High-Fi UI",
    description: "Engineering stunning, high-contrast visual systems. Crafting premium token hierarchies, precise spacing grids, customized icons, and award-winning look and feels.",
    details: ["Bespoke Visual UI Styling", "Figma Design Token Set", "Interactive Responsive Layouts"],
    icon: "Palette",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "04",
    title: "Tactile Prototyping",
    description: "Assembling dense interactive prototypes within Figma. Specifying elastic micro-animations, menu transition maps, and fine-tuning every touch target perfectly.",
    details: ["Figma Component Variance Layouts", "Motion Study Diagrams", "Interactive Client Protype Showcase"],
    icon: "Cpu",
    color: "from-cyan-500 to-teal-500",
  },
  {
    step: "05",
    title: "Unified Hand-off",
    description: "Packaging complete production assets. Providing clear typography rules, code-ready CSS references, developerredlines, and active support through build cycles.",
    details: ["Developer Alignment Meeting", "Figma Asset Bundle Export", "Implementation Quality QA Reviews"],
    icon: "CheckCircle",
    color: "from-teal-500 to-purple-500",
  }
];
