/* SEMUA KONTEN DIEDIT DI FILE INI. Gambar: taruh di folder images/, CV di documents/ */
/* ================= EDIT EVERYTHING HERE ================= */
const CFG={
 name:"Febyanti", email:"eirene.febyanti@gmail.com", location:"Tangerang, Indonesia",
 photo:"images/profile/profile-photo.jpg",
 github:"https://github.com/febyantii", linkedin:"https://www.linkedin.com/in/febyanti-eirene",
 cv:"documents/febyanti-cv.pdf" /* setelah file CV ditaruh di folder documents, ganti dengan "documents/febyanti-cv.pdf" */
};
const CATS=[
    {
        id:"ml",
        title:"Machine Learning & Data Science",
        desc:"Exploring data, building predictive models, and extracting meaningful insights through machine learning and analytical techniques."
    },
    {
        id:"sw",
        title:"Full-Stack Development",
        desc:"Building end-to-end web applications by combining frontend interfaces, backend systems, database integration, and deployment."
    },
    {
        id:"ux",
        title:"UI/UX Design",
        desc:"Designing intuitive digital experiences through user-centered thinking, interface design, and prototyping."
    },
    {
        id:"mob",
        title:"Mobile Application Development",
        desc:"Developing mobile applications with practical functionality, intuitive interfaces, and structured data management."
    },
    {
        id:"game",
        title:"Game Development",
        desc:"Exploring interactive experiences, game mechanics, and AI-driven behavior through game development."
    }
];
const PH="[INSERT PROJECT DESCRIPTION]", U="[INSERT URL]";
/* links: [label,url]  — add/remove/reorder freely; layout adapts per category */
const PROJECTS=[
 {
    n:"01",
    cat:"ml",
    title:"Deep Learning Project",
    img:"images/projects/ml-project-01.png",
    desc:"A machine learning project exploring data preprocessing, feature engineering, model development, training, and performance evaluation.",
    tech:["Python","Pandas","NumPy","Scikit-learn"],
    links:[
        ["Google Colab","https://colab.research.google.com/drive/1sBUSrtQdoVpKr43tGe3AFA6vg8SULx6T?usp=sharing"]
    ]
},
 {
    n:"02",
    cat:"ml",
    title:"Machine Learning Project",
    img:"images/projects/ml-project-02.png",
    desc:"A data-driven project focused on analyzing datasets, identifying patterns, and developing analytical solutions to real-world problems.",
    tech:["Python","SQL","Pandas","Data Visualization"],
    links:[
        ["Google Colab","https://colab.research.google.com/drive/1sBUSrtQdoVpKr43tGe3AFA6vg8SULx6T?usp=sharing"]
    ]
},
 
{
    n:"03",
    cat:"sw",
    title:"RumahTani – AI-Powered Agricultural Surplus Platform",
    img:"images/projects/rumah-tani.png",
    desc:"A digital ecosystem designed to reduce agricultural food waste by connecting local cooperatives and redistributing surplus harvests. Features an AI Smart Matchmaker Agent that analyzes regional supply and demand, redirects excess produce, and helps farmers convert their surplus into redeemable digital points linked to their E-KTP.",
    tech:["HTML5","CSS3","JavaScript","React","Supabase","Tailwind CSS","Vercel"],
    links:[
        ["Live Website","https://rumah-tani.vercel.app/"],
        ["GitHub","https://github.com/febyantii/rumahtani"]
    ]
},
{
    n:"04",
    cat:"sw",
    title:"CHUNQING Mandarin Learning Center Website",
    img:"images/projects/chunqing.png",
    desc:"Developed a full-stack management website for a Mandarin language learning center in Tangerang to manage student and teacher records. Implemented a Node.js and Express.js backend with a JSON-based database, CRUD operations, and admin authentication. Deployed on cPanel, achieving 99% uptime and reducing manual data entry time by 40%.",
    tech:["Node.js","Express.js","JSON","JavaScript","cPanel","Web Hosting"],
    links:[
        ["GitHub","https://github.com/febyantii/CHUNQING-PROJECT"]
    ]
},
{
    n:"05",
    cat:"sw",
    title:"Interactive Web Game",
    img:"images/projects/interactive-web-game.png",
    desc:"Built an interactive browser-based game as a collaborative front-end development course project. Focused on responsive design and dynamic components using React and Tailwind CSS. Utilized GitHub for team collaboration, resolving 15+ merge conflicts and improving commit discipline. Enhanced user engagement by 25% through refined animations and responsive interactions.",
    tech:["HTML5","CSS3","JavaScript ES6","React","Tailwind CSS","Git","GitHub"],
    links:[
    ]
},
 
{
    n:"06",
    cat:"ux",
    title:"Health Hub Gading Serpong – Healthcare App UI/UX",
    img:"images/projects/health-hub.png",
    desc:"A healthcare application UI/UX concept designed to improve access to medical services in Gading Serpong. The project focuses on creating an intuitive digital experience for university students, young adults, working professionals, and families. Developed through a Human-Computer Interaction (HCI) project, with an emphasis on accessibility, usability, and user-centered interface design. Awarded Intellectual Property Rights (HAKI) in 2026.",
    tech:[
        "Figma",
        "UI/UX Design",
        "Human-Computer Interaction",
        "User-Centered Design",
        "Prototyping"
    ],
    links:[
        ["Figma Prototype","https://www.figma.com/proto/USgBziwyh7IjtUm7eqO0uq/HCI-Project?node-id=0-1"],
        ["HAKI Certificate",U]
    ]
},
{
    n:"07",
    cat:"ux",
    title:"CIMB Niaga – Mobile Banking Token Purchase UI/UX",
    img:"images/projects/cimb-niaga-uiux.png",
    desc:"A mobile banking UI/UX prototype focused on improving the electricity token purchasing experience. Designed user interfaces and interaction flows for QR code-based token purchases, including transaction confirmation and feedback screens. The project applied a hybrid Scrum approach to accommodate changing requirements while prioritizing usability, security, and consistent user experience.",
    tech:[
        "Figma",
        "UI/UX Design",
        "Mobile Banking",
        "Prototyping",
        "Scrum",
        "User Flow"
    ],
    links:[
        ["Figma Prototype","https://www.figma.com/proto/ciBqhjVw09ErBKUPFnFse4/CIMB-NIAGA-PROJECT--Software-Engineering-?node-id=10-14&starting-point-node-id=10%3A14"]
    ]
},

 
{
    n:"08",
    cat:"mob",
    title:"NutriCent – Healthy Meals, Happy Wallet",
    img:"images/projects/nutricent.png",
    desc:"An Android nutrition and food budget tracking application developed as a collaborative Mobile App Programming project. NutriCent helps users monitor daily calorie intake, food consumption, and meal expenses through an integrated dashboard, daily food journal, food details, and scanner interface. My individual contributions included developing the Login/Sign Up interface, Material Design 3 theme configuration, dummy data models, and application navigation using Navigation Compose.",
    tech:[
        "Kotlin",
        "Jetpack Compose",
        "Material Design 3",
        "Navigation Compose",
        "ViewModel",
        "Android Development"
    ],
    links:[
        ["GitHub","https://github.com/febyantii/NutriCent"]
    ]
},
{
    n:"09",
    cat:"game",
    title:"CyberPaws – 2D Cybersecurity Educational Game",
    img:"images/projects/cyberpaws.png",
    desc:"A 2D educational adventure game set in a futuristic city called CyberPaws, designed to raise cybersecurity awareness through exploration, simulation, and interactive mini-games. Players take the role of Agent Pip, protecting citizens from digital threats such as phishing, scams, fake applications, data theft, weak passwords, and deepfakes. My individual contribution focused on developing the Main Menu and World Map, supporting the game's navigation and exploration experience.",
    tech:[
        "Unity",
        "C#",
        "2D Game Development",
        "Game UI",
        "World Map Design",
        "Game Design"
    ],
    links:[
        ["Gameplay Video","https://drive.google.com/file/d/1icJbwLtmnocTXzJrELIGW1EBUzA5q8nA/view?usp=drivesdk"]
    ]
},
];
/* Placeholder responsibilities are suggestions — edit to match what you actually did */
const EXPERIENCE=[
    {
        role:"Laboratory Assistant",
        org:"Universitas Multimedia Nusantara",
        type:"Part-time",
        dur:"Feb 2026 - Dec 2026",
        desc:"Teaching Algorithm & Data Structure to University Students.",
        img:"images/experience/laboratory-assistant.jpg",
        pts:[
            "Instructed and mentored 40+ students per semester in hands-on web development lab sessions, maintaining a 90%+ student evaluation rating.",
            "Developed lesson plans for HTML, JavaScript, and React while collaborating with faculty to refine course assessments and learning materials.",
            "Communicated with students and helped maintain a productive learning environment."
        ],
        skills:["Communication","Troubleshooting","Knowledge Sharing"]
    },
    {
        role:"International STEM Teacher",
        org:"Miss Susan Learning Center",
        type:"Part-time",
        dur:"Aug 2025 - Dec 2026",
        desc:"Teaching IGCSE Math, Science, and IT to Junior & High School Students.",
        img:"images/experience/stem-teacher.jpg",
        pts:[
            "Teach STEM-related subjects, including IGCSE Mathematics, Science, and IT.",
            "Guide students through problem-solving activities and practical exercises.",
            "Explain technical and scientific concepts in an accessible way.",
            "Encourage critical thinking, creativity, and active learning.",
            "Adapt teaching approaches to students' learning needs."
        ],
        skills:["Teaching","Problem-Solving","Adaptability"]
    }
];
const ORGS=[
    {
        org:"CURSOR (Collaborative Informatics Study Program)",
        role:"Chairperson",
        dur:"Dec 2024 - Dec 2025",
        desc:"Project Coordinator (30 members in total organization)",
        pts:[
            "Led 30+ committee members in curriculum design and study programs.",
            "Achieved 90% participant satisfaction through well-organized study programs.",
            "Optimized evaluation workflows by 25% to improve program effectiveness."
        ],
        img:"images/organizations/organization-01.jpg"
    },
    {
        org:"Informatics Student Association (HMIF)",
        role:"Project Manager",
        dur:"Dec 2024 - Dec 2025",
        desc:"Project Coordinator (30 members in total organization)",
        pts:[
            "Supervised association events and led logistics for HORIZON (AI & Robotics exhibition).",
            "Coordinated BYTE, an event involving 100+ freshmen participants.",
            "Established structured communication workflows, improving coordination efficiency by 70%."
        ],
        img:"images/organizations/organization-02.jpg"
    }
];
const SKILLS={"Programming Languages":["Python","Kotlin","SQL","Java","C#"],"Software & Mobile":["Android Development","Jetpack Compose","Git","GitHub"],"Database":["PostgreSQL","Supabase","Room Database"],"Data Science & ML":["Pandas","NumPy","Scikit-learn","Data Analysis","Data Visualization"],"Cloud & Tools":["AWS","Android Studio","Visual Studio Code","Figma"]};
const SOFT=["Communication","Team Collaboration","Problem-Solving","Critical Thinking","Adaptability","Time Management","Leadership","Teaching & Knowledge Sharing","Attention to Detail","Continuous Learning"];
const EDU={degree:"Information Technology",uni:"[INSERT UNIVERSITY NAME]",status:"Currently in 5th Semester",period:"[INSERT START YEAR — EXPECTED GRADUATION]"};
const CERTS=[{name:"AWS Certified Cloud Practitioner",org:"Amazon Web Services",date:"[INSERT ISSUE DATE]",id:"",url:"[INSERT URL]"}];
/* ======================================================== */
