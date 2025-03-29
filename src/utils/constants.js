export const experiences = [
    {
        id: "1",
        imgName: "twig.png",
        title: "Twig Education - Imagine Learning",
        subTitle:
            "An E-classroom application with NGSS curriculum for US district schools",
        domain: ["E-Learning"],
        content: {
            impacts: [
                "Built robust, performant & accessible customer-facing features in a web app with millions of active users for K-5 & Middle school grades",
                "Optimized react app’s bundle size, implementing lazy loading - achieving <2s page load metrics & rewrote ORM queries resulting in 10x faster page load times.",
                "Improved load times with smaller resolution image thumbnails fetched from Cloudfront for landing page's list.",
            ],
            learnings: [
                "Developed Dashboards, Assignment & Grading workflows, Digital Glossary & Resources Hub.",
                "Implemented Read-speaker for accessibility. Added multi-lingual support with react-i18.",
            ],
        },
        techStack: [
            "React JS",
            "GraphQL",
            "Nest JS",
            "Strapi CMS",
            "Jest, React Testing Library",
            "Micro-frontend",
            "Feature flags",
            "Amazon Opensearch",
            "CDN content hosting",
            "Test-Driven Development",
        ],
    },
    {
        id: "2",
        imgName: "morningstar.png",
        title: "Fundations - Morningstar",
        subTitle:
            "A screener dashboard for funds & equities, and their security reports",
        domain: ["Fin-Tech"],
        content: {
            impacts: [
                "A scalable code architecture allowing to scale seamlessly for multiple screens & clients with maintainability.",
                "A customizable dashboard allowing user to create preferred dashboards with dynamic filters & pre-saved screeners.",
            ],
            learnings: [
                "Developed an in-house component library for financial components with cross-browser compatibility.",
                "Hosting the UI library as npm package on Azure Artifacts.",
                "Exporting security reports UI with multiple tabs data as PDF.",
            ],
        },
        techStack: ["React", "Typescript", "Antd", "Storybook", "Cypress"],
    },
    {
        id: "3",
        imgName: "keycloak.png",
        title: "Digital Innovation Platform",
        subTitle:
            "A developer portal for standardized internal enterprise tools for faster development",
        domain: ["Internal Developer Tools"],
        content: {
            impacts: [
                "Dynamic Code Gen allowed for quick bootstrap of APIs reducing setup time significantly & aided standardization of coding practices.",
                "Keycloak setup for handling authorization with cloud agnostic authentication - allowed for self hosted IAM.",
            ],
            learnings: [
                "Led the development of an API Builder with dynamic code-generation for Node, Java & .NET APIs with Yeoman templating.",
                "Implemented Identity Service using Keycloak for RBAC - integrating multiple clients & identity sources in single place.",
            ],
        },
        techStack: [
            "OIDC",
            "OAuth",
            "Yeoman",
            "Express JS",
            "React JS",
            "MUI",
            "Redux Sagas",
        ],
    },
    {
        id: "4",
        imgName: "stm.png",
        title: "E-approval, E-RFP - ST Microelectronics",
        subTitle: "ST's internal supply chain handling digital products",
        domain: ["Supply Chain"],
        content: {
            impacts: [
                "Improved efficiency of approval times by 60% with a digital approval dashboard.",
                "Enhanced UX & robustness with a draft-save functionality on multi stage form UI.",
            ],
            learnings: [
                "Implemented horizontal stepper UI for a mail-chain approval process's visual dashboard.",
                "Developed a multi-stepper form with validations & draft save functionality.",
            ],
        },
        techStack: ["HTML, CSS, JS", "Angular", "MUI"],
    },
];
