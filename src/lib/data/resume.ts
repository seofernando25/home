export interface ContactInfo {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    website: string;
    websiteDisplay: string;
    github: string;
    githubDisplay: string;
    linkedin: string;
    linkedinDisplay: string;
}

export interface SkillSet {
    proficiency: string[];
    experience: string[];
    languages: { name: string; level: string }[];
}

export interface ExperienceItem {
    role: string;
    type: 'Co-op' | 'Extracurricular' | 'Founder';
    company: string;
    team: string;
    period: string;
    highlights: string[];
    metrics?: string[];
}

export interface EducationInfo {
    institution: string;
    degree: string;
    program: string;
    period: string;
    expectedGrad: string;
    logo: string;
}

export const contactInfo: ContactInfo = {
    name: "Fernando Nogueira",
    title: "Software Developer, MSc Computer Science (Applied AI)",
    location: "Ottawa, ON",
    phone: "(609) 401-9906",
    email: "toniberti.jr@gmail.com",
    website: "https://www.seofernando.com",
    websiteDisplay: "www.seofernando.com",
    github: "https://github.com/SeoFernando25",
    githubDisplay: "github.com/SeoFernando25",
    linkedin: "https://www.linkedin.com/in/fernando-n/",
    linkedinDisplay: "linkedin.com/in/fernando-n"
};

export const summary = "Master's student in Computer Science (Applied AI) at the University of Ottawa. Completed Honours BSc in Computer Science with Minor in Statistics (2021 – 2025). Co-op experience in front-end and full-stack development, plus avionics/telemetry and autonomous systems. Interests in real-time telemetry and monitoring, applied machine learning, and system architecture.";

export interface ResearchItem {
    title: string;
    slug: string;
    course: string;
    year: string;
    result: string;
    repo: string;
    repoDisplay: string;
}

export const skills: SkillSet = {
    proficiency: [
        "Python",
        "TypeScript/JavaScript",
        "Swift",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Git",
        "CI/CD",
        "GitHub Actions"
    ],
    experience: [
        "PyTorch",
        "scikit-learn",
        "Hugging Face",
        "NumPy/pandas",
        "LeRobot/LIBERO",
        "Java",
        "CSS/HTML",
        "C++",
        "Go",
        "Rust",
        "Bash",
        "C#",
        "Lean",
        "Lua",
        "Cloudflare",
        "Firebase",
        "GNU/Linux",
        "GraphQL"
    ],
    languages: [
        { name: "Portuguese", level: "Native / Fluent" },
        { name: "English", level: "Fluent" },
        { name: "French", level: "Conversational (Immersion Graduate)" },
        { name: "Spanish", level: "Conversational" }
    ]
};

export const experiences: ExperienceItem[] = [
    {
        role: "Founder",
        type: "Founder",
        company: "OhRats Technologies",
        team: "",
        period: "March 2026 – Present",
        highlights: [
            "Founded a small software company building open-source tools for people who build things",
            "Shipped WakeBar, a macOS sleep-control utility distributed via Homebrew",
            "Building RC, an MCP service giving AI assistants scoped, passkey-approved access to user machines"
        ]
    },
    {
        role: "Autonomy Developer",
        type: "Extracurricular",
        company: "University of Ottawa",
        team: "Aeronautics Team",
        period: "2025 – Present",
        highlights: [
            "Prototyping autonomous ground vehicle on Raspberry Pi in R&D phase toward a compact rover for the SAE Aero competition"
        ],
        metrics: ["Raspberry Pi", "R&D Prototype", "SAE Aero"]
    },
    {
        role: "Front-End Developer",
        type: "Co-op",
        company: "Trading Central",
        team: "Odin Team",
        period: "September 2023 – December 2023",
        highlights: [
            "Contributed to trading analysis tool Options Insight",
            "Introduced End-to-End Testing using Playwright and git commit hooks for code quality",
            "Modernized Jenkins pipelines and libraries to newer NodeJS/ECMAScript",
            "Delivered high-volume peer-reviewed code across the 4-month term"
        ],
        metrics: ["+80k / -100k lines", "Playwright E2E", "CI/CD Modernization"]
    },
    {
        role: "Full Stack Software Developer",
        type: "Co-op",
        company: "University of Ottawa",
        team: "Engineering Outreach Department",
        period: "January 2023 – April 2023",
        highlights: [
            "Ported NodeJS microservice to esbuild, slashing build times",
            "Added JUnit unit tests and Jest/Vitest integration tests for Angular front-end",
            "Led a major lint remediation across the legacy codebase",
            "Shipped high-volume peer-reviewed code across the 4-month term"
        ],
        metrics: ["-80% build times", "4000+ lint fixes", "+23k / -20k lines"]
    },
    {
        role: "Avionics Developer",
        type: "Extracurricular",
        company: "University of Ottawa",
        team: "uOttawa Rocketry",
        period: "September 2021 – Present",
        highlights: [
            "Maintained Rust/C codebase including memory-leak fixes and Conan migration from git submodules",
            "Standardized team development environments with Dev Containers",
            "Rebuilt legacy ground-station software into a modern web-based system for the Ground Crew competing in Launch Canada",
            "Led ground-station telemetry for the Gee Force One launch, delivering real-time visualization and landing-site estimation after GPS dropout",
            "Building a custom LabJack monitoring and visualization interface with configurable I/O for fuel-cart pressure-valve testing"
        ],
        metrics: ["Launch Canada", "Dev Containers", "Conan & Rust/C"]
    }
];

export const research: ResearchItem[] = [
    {
        title: "From Handcrafted Features to Double Descent on CIFAR-10",
        slug: "double-descent-cifar10",
        course: "CSI5155, 2025",
        year: "2025",
        result: "Over-parameterized CNNs beat SVM + Fisher Vectors, showing implicit regularization gains.",
        repo: "https://github.com/seofernando25/CSI5155/tree/main/project/report",
        repoDisplay: "github.com/seofernando25/CSI5155"
    },
    {
        title: "Effectiveness, Convergence, and Stability of Search-Based Hyperparameter Optimizers",
        slug: "hyperparameter-optimizers",
        course: "CSI5186, 2025",
        year: "2025",
        result: "GA/PSO matched Random Search under tight budgets (Wilcoxon p>0.05); Random Search is the baseline.",
        repo: "https://github.com/AI-Enabled-Software-Testing/Hyperparameter-Tuning-Search-Project",
        repoDisplay: "github.com/AI-Enabled-Software-Testing/Hyperparameter-Tuning-Search-Project"
    }
];

export const awards = [
    {
        title: "1st Place, IBM Qiskit Fall Fest",
        event: "uOttawa, 2026",
        detail: "Fireline, QML wildfire estimation on IBM quantum hardware vs classical with noise mitigation",
        link: "https://lnkd.in/p/gB_9JYiX"
    },
    {
        title: "2nd Place, NAV CANADA Trajectory Insight Challenge",
        event: "uOttaHack 8, 2026",
        detail: "planNAV, flight-schedule conflict insights for national flight planning",
        link: "https://github.com/seofernando25/planNAV"
    },
    {
        title: "1st Place and Grand Launch Trophy, Launch Canada",
        event: "uOttawa Rocketry, 2026",
        detail: "Perigee-Gee, Mach 2.3, 34,801 ft",
        link: "https://lnkd.in/p/gK_nmVVf"
    }
];

export const educations: EducationInfo[] = [
    {
        institution: "University of Ottawa",
        degree: "Master of Computer Science",
        program: "Concentration in Applied Artificial Intelligence",
        period: "2025 – 2027",
        expectedGrad: "Expected 2027",
        logo: "/uottawa_logo.jpeg"
    },
    {
        institution: "University of Ottawa",
        degree: "Honours Bachelor of Science",
        program: "Major in Computer Science and Minor in Statistics",
        period: "2021 – 2025",
        expectedGrad: "Graduated Summer 2025",
        logo: "/uottawa_logo.jpeg"
    }
];
