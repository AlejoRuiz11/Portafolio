/** ============================================================
 *  Portfolio Data — edit this file to update all content.
 *  To add GitHub links / images / videos to projects, use the
 *  Admin Panel in the browser (bottom-right corner).
 * ============================================================ */

export const personal = {
  name:      'Alejo Ruiz',
  role:      'Systems Engineering Student',
  tagline:   'Software Architecture · Design Patterns · Machine Learning · 3 Countries',
  bio:       'Systems Engineering student with strong foundations in software architecture, design patterns, and object-oriented systems design. I build things that are technically solid — from multi-tier enterprise systems to VR simulations and ML pipelines. I have hands-on experience with PyMC for probabilistic programming and Bayesian modeling, including MCMC sampling and MAP inference. International academic experience across Colombia, Argentina, and Austria.',
  email:     'alejoruiz1110@gmail.com',
  github:    '',
  linkedin:  '',
  adminPass: 'alejo2024',
}

/** ── Education ──────────────────────────────────────────────── */
export const education = [
  {
    id:          'uib',
    institution: 'Universidad de Ibague',
    degree:      'Systems Engineering - Current Student',
    period:      'Colombia 🇨🇴',
    note:        'Scholarship: Talento Tolima',
  },
  {
    id:          'itba',
    institution: 'ITBA - Instituto Tecnologico de Buenos Aires',
    degree:      'Exchange Semester',
    period:      'Argentina 🇦🇷',
    note:        'Machine Learning and AI coursework including Bayesian classification.',
  },
  {
    id:          'leoben',
    institution: 'Montanuniversitat Leoben',
    degree:      'Exchange Semester',
    period:      'Austria 🇦🇹',
    note:        'Mulgrain Scholarship. Courses taught fully in English.',
  },
  {
    id:          'comfa',
    institution: 'Colegio Comfatolima',
    degree:      'High School Diploma',
    period:      'Colombia 🇨🇴',
    note:        '',
  },
]

/** ── Projects — ordered by architectural complexity ─────────── */
export const projects = [
  {
    id:        'searchme',
    title:     'SearchMe - Probabilistic Object Matching',
    short:     'SearchMe',
    desc:      'Django platform for lost & found reports in university environments. Core feature: a Bayesian inference engine that computes the posterior probability that a lost report and a found report refer to the same object.',
    longDesc:  'SearchMe is built around a probabilistic matching module in Django. Given attributes from two object reports, the Bayesian engine computes a posterior probability of identity — factoring in attribute similarity, location overlap, and time proximity. The Django backend follows clean REST architecture with serialized API responses. The project was conceived to explore real-world applications of probabilistic inference in a structured software system.',
    tech:      ['Django', 'Python', 'Bayesian Inference', 'PyMC', 'MCMC', 'MAP', 'Probabilistic Programming', 'REST API'],
    cat:       'ml',
    star:      'Bayesian engine',
    highlight: true,
    minor:     false,
    github:    'https://github.com/AlejoRuiz11/SearchMe',
  },
  {
    id:        'duckventure',
    title:     'Duckventure - 3D Architecture Showcase',
    short:     'Duckventure',
    desc:      'Complete 3D project in Unity (C#) designed as a software architecture showcase. Implements Factory, Strategy, and Serializable patterns across fully modular, extensible systems.',
    longDesc:  'The primary goal of Duckventure was to apply software engineering principles rigorously inside a complex interactive system. Factory pattern manages all object instantiation; Strategy pattern provides swappable, interchangeable gameplay behaviors without modifying client code; Serializable architectures enable data-driven design and persistence. Every class was designed for single responsibility and open/closed extensibility — the game logic is almost secondary to the architecture that drives it.',
    tech:      ['Unity', 'C#', 'Factory Pattern', 'Strategy Pattern', 'Serializables', 'OOP', 'SOLID'],
    cat:       'arch',
    star:      'Architecture showcase',
    highlight: true,
    minor:     false,
    video:     'https://www.youtube.com/watch?v=LjN_yCsCLLo',
  },
  {
    id:        'dealership',
    title:     'Dealership Management System',
    short:     'Dealership System',
    desc:      'Multi-tier enterprise system: React frontend → Spring Boot REST API → Oracle SQL, with Django as a secondary admin client. Applied Singleton, Observer, and MVC patterns throughout all layers.',
    longDesc:  'A full-stack system built to demonstrate cross-tier software architecture. The Spring Boot server implements strict MVC with a service/repository layering; Singleton ensures shared resource management; Observer drives cross-client event propagation between the React and Django clients. The Oracle database was designed with full normalization, ER modeling, and relational constraints. Every architectural decision was deliberate — this project was built as much for the design as for the functionality.',
    tech:      ['Spring Boot', 'React', 'Django', 'Oracle SQL', 'MVC', 'Singleton', 'Observer', 'REST API', 'OOP'],
    cat:       'arch',
    star:      'Full-stack + 3 tiers',
    highlight: false,
    minor:     false,
  },
  {
    id:        'faroti',
    title:     'FAROTI - Digital Transformation Landing Page',
    short:     'FAROTI',
    desc:      'Informational website for FAROTI, a digital transformation consultancy that helps organizations navigate intelligent software solutions and strategic technology development.',
    longDesc:  'Built a responsive informational website for FAROTI - a consulting firm that helps organizations navigate digital transformation through intelligent software solutions and scalable technology development. Focus was placed on clean UX, clear content hierarchy, and a modern visual identity that reflects the company\'s positioning as a trusted technology partner.',
    tech:      ['React', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
    cat:       'web',
    star:      '',
    highlight: true,
    minor:     false,
    demo:      'https://www.faroti.com/',
  },
  {
    id:        'attention-chaos',
    title:     'Attention Chaos - VR Cognitive Simulation',
    short:     'Attention Chaos',
    desc:      'VR simulation in Unity (C#) that emulates ADHD-related cognitive challenges. Technically driven by multi-threading, event pipelines, and concurrent simulation systems.',
    longDesc:  'Built as a real-time concurrent system. Multiple independent threads drive simultaneous sensory distraction effects — audio triggers, visual interrupts, focus-loss events — without blocking the main render loop. An event-driven architecture connects the cognitive simulation subsystems: each distraction type is an independent event producer; the player experience layer is the consumer. The goal was empathy-driven design, but the implementation required disciplined systems engineering.',
    tech:      ['Unity', 'C#', 'VR', 'Multi-threading', 'Event-Driven Architecture', 'Physics'],
    cat:       'sim',
    star:      '',
    highlight: false,
    minor:     false,
    video:     'https://www.youtube.com/watch?v=cJmE-muFlaU',
  },
  {
    id:        'barbershop',
    title:     'Barbershop Queue & Shop Platform',
    short:     'Barbershop App',
    desc:      'Full-stack barbershop management system with real-time queue tracking and a product catalog. Spring Boot REST API backend, Firebase Firestore for live sync, and React SPA frontend.',
    longDesc:  'A complete barbershop management platform with two distinct data layers working in tandem. The Spring Boot backend exposes a RESTful API following strict MVC architecture with a service layer that orchestrates business logic and a repository layer that abstracts all data access. Firebase Firestore handles the real-time queue state — when a barber updates a turn, all connected clients see the change instantly without polling. Firebase Auth manages the authentication flow for both clients and barbers.\n\nThe React frontend consumes the Spring Boot API for appointments and product catalog management, while subscribing to Firestore listeners for live queue updates. This separation of concerns — REST for transactional operations, Firestore for event-driven state — keeps each layer clean and independently scalable. The product catalog includes inventory management with category filtering.',
    tech:      ['Spring Boot', 'React', 'Firebase', 'Firestore', 'Firebase Auth', 'REST API', 'MVC', 'Repository Pattern', 'Real-time Sync'],
    cat:       'web',
    star:      'Real-time + REST',
    highlight: false,
    minor:     false,
  },
  {
    id:        'ml-workshops',
    title:     'ML & Statistics Workshops in R',
    short:     'ML Workshops',
    desc:      'Four statistical computing workshops in R covering supervised and unsupervised machine learning: SVM, Naive Bayes, Neural Networks, K-means, and Kohonen Self-Organizing Maps.',
    longDesc:  'Each workshop is a structured implementation and analysis of a different ML technique:\n• Support Vector Machines (SVM) with kernel methods for binary classification.\n• Naive Bayes classifiers leveraging Bayesian probabilistic reasoning over feature distributions.\n• Multi-layer Neural Networks with backpropagation and activation function experiments.\n• K-means clustering with elbow-method for optimal k selection.\n• Kohonen Self-Organizing Maps for unsupervised topological dimensionality reduction.\nAll workshops include model training, performance evaluation, and interpretation of statistical outputs.',
    tech:      ['R', 'SVM', 'Naive Bayes', 'Neural Networks', 'K-means', 'Kohonen Maps', 'Statistical Computing'],
    cat:       'ml',
    star:      '',
    highlight: false,
    minor:     false,
  },
  {
    id:        'circo',
    title:     'Fuga del Circo Maldito',
    short:     'Circo Maldito',
    desc:      '3D horror escape-room in Unity, built for a UI/UX course. All player guidance emerges from environmental design — no explicit tutorial. Focus on interaction affordances and spatial UX.',
    longDesc:  'Built as a UX-first project inside a 3D environment. The design constraint: the player must always know what to do without any instructional UI. Every affordance, visual cue, and spatial arrangement was considered from a user mental model perspective. Applies 3D level design as a UX tool — lighting direction, object scale, and audio cues substitute for interface elements. A practical exercise in designing under constraint.',
    tech:      ['Unity', 'C#', 'UI/UX Design', '3D Level Design', 'Interaction Design'],
    cat:       'sim',
    star:      '',
    highlight: false,
    minor:     false,
  },
  {
    id:        'minishop',
    title:     'Mini Shop - Laravel MVC',
    short:     'Mini Shop',
    desc:      'E-commerce application built with Laravel, following strict MVC architecture with Eloquent ORM, Blade templates, and user authentication.',
    longDesc:  'A complete small-scale e-commerce system in Laravel. Implements the full MVC stack: Blade views, Eloquent models with relationship definitions, and controller-level request handling. Features user authentication, product catalog, and shopping cart. A clean exercise in applying PHP framework conventions and MVC discipline.',
    tech:      ['Laravel', 'PHP', 'MySQL', 'MVC', 'Eloquent ORM', 'Blade'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     false,
  },
  {
    id:        'habit',
    title:     'Habit Tracker',
    short:     'Habit Tracker',
    desc:      'Minimalist habit tracking web app in pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies.',
    longDesc:  'A lightweight browser-based habit tracker built intentionally without frameworks to practice clean vanilla JavaScript. Local persistence via localStorage.',
    tech:      ['HTML', 'CSS', 'JavaScript'],
    cat:       'web',
    star:      '',
    highlight: false,
    minor:     true,
  },
]

/** ── Skills — architecture-first ordering ───────────────────── */
export const skills = {
  'Software Architecture & Patterns': [
    'SOLID Principles', 'Clean Architecture', 'Layered Architecture',
    'MVC', 'MVP', 'Repository Pattern', 'Factory', 'Abstract Factory',
    'Strategy', 'Observer', 'Singleton', 'Command', 'Decorator',
    'Dependency Injection', 'REST API Design', 'OOP', 'System Design', 'Domain Modeling',
  ],
  'Machine Learning & Statistics': [
    'Supervised Learning', 'Unsupervised Learning', 'Bayesian Statistics',
    'Naive Bayes', 'SVM', 'Neural Networks', 'K-means', 'Kohonen Maps',
    'Probabilistic Reasoning', 'Statistical Computing',
  ],
  'Simulation & Game Development': [
    'Unity', 'Unity VR', 'Multi-threading', 'Event-Driven Systems',
    'Physics Simulation', 'Gameplay Scripting', 'Object Pooling', 'GPU/CPU Profiling',
  ],
  'Programming Languages': [
    'C#', 'Java', 'JavaScript', 'Python', 'PHP', 'R', 'C++', 'SQL', 'HTML / CSS',
  ],
  'Frameworks & Technologies': [
    'Spring Boot', 'Django', 'Laravel', 'React', 'Vite', 'Git', 'Blender', 'Photoshop', 'Camtasia',
  ],
  'Databases': [
    'Oracle SQL', 'MySQL', 'MySQL Workbench', 'Relational Databases', 'Data Modeling', 'ERD',
  ],
}

/** ── Certifications ─────────────────────────────────────────── */
export const certifications = [
  {
    id:       'bayesian',
    name:     'Bayesian Statistics',
    issuer:   'Online Certification',
    note:     'Covers probabilistic inference, prior/posterior distributions, Bayesian updating, and applied reasoning under uncertainty.',
    relevant: true,
  },
]

/** ── Adaptability ───────────────────────────────────────────── */
export const adaptability = [
  { icon: '🌍', text: 'Studied across three countries - Colombia, Argentina, and Austria - comfortable in multicultural and multilingual academic settings.' },
  { icon: '🇬🇧', text: 'Coursework at Montanuniversitat Leoben fully conducted in English; research and technical reading done primarily in English.' },
  { icon: '🤝', text: 'Experienced coordinating software development in international university team projects with cross-cultural collaboration.' },
  { icon: '⚡', text: 'Strong self-learning skills - independently studied probability theory, Bayesian methods, and ML outside formal coursework.' },
  { icon: '🧭', text: 'Adaptable, team-oriented, and genuinely curious toward different perspectives and ways of working.' },
]

/** ── Hobbies ────────────────────────────────────────────────── */
export const hobbies = [
  { icon: '🏀', name: 'Basketball' },
  { icon: '🏋️', name: 'Weightlifting' },
  { icon: '🏃', name: 'Running' },
  { icon: '🏓', name: 'Table Tennis' },
  { icon: '🎸', name: 'Guitar' },
  { icon: '♟️', name: 'Chess' },
  { icon: '✏️', name: 'Drawing' },
]

/** ── Architecture patterns for Home page showcase ───────────── */
export const archPatterns = [
  'SOLID', 'Factory', 'Strategy', 'Observer', 'Singleton',
  'MVC', 'Repository', 'Command', 'Clean Architecture',
  'Layered Architecture', 'REST API Design', 'OOP',
  'Dependency Injection', 'Domain Modeling',
]
