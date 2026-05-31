// 这个文件是网站的“内容数据表”。
// 维护文字、导航名、项目、经历、论文、荣誉时，优先改这里，不需要改 HTML。
// 中英文完全相同的信息放在 SITE_SHARED，避免邮箱、PDF 路径等内容维护两次。
window.SITE_SHARED = {
    profilePhoto: "img/profile.png",
    emails: [
        "chenyihong@mail.tsinghua.edu.cn",
        "chenyihong0907@foxmail.com"
    ],
    cvHref: {
        zh: "cv/CV_zh.pdf",
        en: "cv/CV_en.pdf"
    }
};

window.SITE_CONTENT = {
    zh: {
        htmlLang: "zh-CN",
        title: "陈奕宏 | Yihong Chen",
        description: "陈奕宏的个人主页",
        brand: "陈奕宏",
        languageToggle: "En",
        cvButton: "简历",
        // nav 的键名需要和 index.html 里的 data-nav 对应。
        nav: {
            profile: "简介",
            experience: "经历",
            projects: "项目",
            outputs: "成果",
            honors: "荣誉"
        },
        // 首屏内容：姓名、简介、关键词和对应语言的简历链接。
        hero: {
            name: "陈奕宏 Yihong Chen",
            lead: "我具有动理学方程、模型约化和高效数值方法的研究训练，正在将严谨的建模与算法能力迁移到大语言模型、智能体系统、数学推理和工具化科研流程中。",
            address: [
                "清华大学电子工程系",
                "罗姆楼11-309"
            ],
            tags: ["LLM Agent", "Scientific Computing", "Numerical Algorithms", "Mathematical Reasoning"]
        },
        profile: {
            title: "基本信息与个人简介",
            paragraphs: [
                "我本科和博士均就读于清华大学数学科学系，博士期间主要研究动理学方程的模型约化与数值求解。相关工作包括离散速度方向模型，以及基于 Poisson 核的扩展积分矩方法。",
                "当前我希望把数学建模、数值算法和科研表达能力用于更接近产业的 AI 场景，尤其关注 LLM Agent、工具调用、数学推理、科学计算和自动化研究流程。"
            ]
        },
        projects: {
            title: "科研与项目经历",
            items: [
                {
                    title: "Poisson Quadrature Method of Moments",
                    type: "已发表研究",
                    description: "提出基于 Poisson 核的矩方法，用于求解二维常速动理学方程，目标是在保留关键结构的同时提高降阶计算效率。"
                },
                {
                    title: "Discrete-Velocity-Direction BGK Models",
                    type: "博士期间研究",
                    description: "构造离散速度方向模型，将一维动理学方程求解方法系统推广到高维，并结合最小熵框架建立 BGK 型模型。"
                }
            ]
        },
        // 经历条目：position 可用 "job" 或 "edu"，用于控制时间轴圆点颜色。
        experience: {
            title: "教育与工作经历",
            items: [
                {
                    title: "博士后",
                    affiliation: "清华大学电子工程系",
                    position: "job",
                    duration: "2025年7月——2027年6月",
                    description: "研究兴趣扩展到大语言模型、智能体系统、科学计算和科研流程自动化。"
                },
                {
                    title: "博士",
                    affiliation: "清华大学数学科学系",
                    position: "edu",
                    duration: "2020年9月——2025年6月",
                    description: "研究动理学方程的模型约化与数值求解，完成离散速度方向模型和 Poisson 核积分矩方法相关工作。"
                },
                {
                    title: "本科",
                    affiliation: "清华大学数学科学系",
                    position: "edu",
                    duration: "2016年8月——2020年7月",
                    description: "接受数学、建模和理论分析训练，为后续算法研究打下基础。"
                }
            ]
        },
        outputs: {
            title: "学术成果",
            publishedTitle: "正式发表",
            preprintTitle: "预印本"
        },
        // 荣誉为空时会显示 emptyText；有内容后填入 items 数组即可。
        honors: {
            title: "荣誉与奖励",
            items: [
                {
                    time: "",
                    description: ""
                },
                {
                    time: "",
                    description: ""
                }
            ]
        },
        footer: "© Yihong Chen"
    },
    en: {
        htmlLang: "en",
        title: "Yihong Chen | 陈奕宏",
        description: "Personal website of Yihong Chen",
        brand: "Yihong Chen",
        languageToggle: "中文",
        cvButton: "CV",
        // nav 的键名需要和 index.html 里的 data-nav 对应。
        nav: {
            profile: "Profile",
            experience: "Experience",
            projects: "Projects",
            outputs: "Outputs",
            honors: "Honors"
        },
        hero: {
            name: "Yihong Chen 陈奕宏",
            lead: "I have research training in kinetic equations, model reduction, and efficient numerical methods. I am now applying this background to large language models, agent systems, mathematical reasoning, and tool-based research workflows.",
            address: [
                "Department of Electronic Engineering, Tsinghua University",
                "Rohm Building 11-309, Beijing, China"
            ],
            tags: ["LLM Agent", "Scientific Computing", "Numerical Algorithms", "Mathematical Reasoning"]
        },
        profile: {
            title: "Basic Information and Profile",
            paragraphs: [
                "I received my B.S. and Ph.D. training at the Department of Mathematical Sciences, Tsinghua University. My Ph.D. research focused on model reduction and numerical computation for kinetic equations, including discrete-velocity-direction models and a Poisson-kernel-based extended quadrature method of moments.",
                "I am interested in bringing mathematical modeling, numerical algorithms, and research communication into industry-oriented AI scenarios, especially LLM agents, tool use, mathematical reasoning, scientific computing, and automated research workflows."
            ]
        },
        projects: {
            title: "Research and Project Experience",
            items: [
                {
                    title: "Poisson Quadrature Method of Moments",
                    type: "Published research",
                    description: "Developed a moment method based on the Poisson kernel for 2D kinetic equations with constant-speed velocity, targeting efficient reduced-order computation while preserving key structures."
                },
                {
                    title: "Discrete-Velocity-Direction BGK Models",
                    type: "PhD research",
                    description: "Constructed discrete-velocity-direction models to systematically extend one-dimensional kinetic solvers to higher-dimensional settings under a minimum-entropy BGK framework."
                }
            ]
        },
        // position 与中文版一致：job 表示工作经历，edu 表示教育经历。
        experience: {
            title: "Education and Work Experience",
            items: [
                {
                    title: "Postdoctoral Researcher",
                    affiliation: "Department of Electronic Engineering, Tsinghua University",
                    position: "job",
                    duration: "July 2025--June 2027",
                    description: "Expanding my research focus toward large language models, agent systems, scientific computing, and automated research workflows."
                },
                {
                    title: "Ph.D.",
                    affiliation: "Department of Mathematical Sciences, Tsinghua University",
                    position: "edu",
                    duration: "Sept. 2020--June 2025",
                    description: "Studied model reduction and numerical computation for kinetic equations, including discrete-velocity-direction models and Poisson-kernel-based moment methods."
                },
                {
                    title: "B.S.",
                    affiliation: "Department of Mathematical Sciences, Tsinghua University",
                    position: "edu",
                    duration: "Oct. 2016--July 2020",
                    description: "Built a foundation in mathematics, modeling, and theoretical analysis for later algorithmic research."
                }
            ]
        },
        outputs: {
            title: "Academic Output",
            publishedTitle: "Peer-reviewed publications",
            preprintTitle: "Preprints"
        },
        // 英文荣誉内容为空时同样显示 emptyText。
        honors: {
            title: "Honors and Awards",
            items: [
                {
                    time: "",
                    description: ""
                },
                {
                    time: "",
                    description: ""
                }
            ]
        },
        footer: "© Yihong Chen"
    }
};

// 论文列表独立出来，方便按 status 自动分到“正式发表”和“预印本”。
// status 使用 "published" 或 "preprint"。
window.SITE_PUBLICATIONS = [
    {
        status: "published",
        authors: ["Yihong Chen", "Qian Huang", "Wen-An Yong", "Ruixi Zhang"],
        title: "Poisson quadrature method of moments for 2D kinetic equations with velocity of constant magnitude",
        venue: "Multiscale Modeling and Simulation",
        detail: "23(1), 2025",
        links: [{ label: "DOI", href: "https://doi.org/10.1137/23m1620181" }]
    },
    {
        status: "published",
        authors: ["Yihong Chen", "Qian Huang", "Wen-An Yong"],
        title: "Discrete-velocity-direction models of BGK-type with minimum entropy: II. Weighted models",
        venue: "Journal of Scientific Computing",
        detail: "99(84), 2024",
        links: [{ label: "DOI", href: "https://doi.org/10.1007/s10915-024-02531-3" }]
    },
    {
        status: "published",
        authors: ["Qian Huang", "Yihong Chen", "Wen-An Yong"],
        title: "Discrete-Velocity-Direction Models of BGK-type with Minimum Entropy: I. Basic Idea",
        venue: "Journal of Scientific Computing",
        detail: "95(3), 2023",
        links: [{ label: "DOI", href: "https://doi.org/10.1007/s10915-023-02211-8" }]
    },
    {
        status: "preprint",
        authors: ["Ruixi Zhang", "Yihong Chen", "Qian Huang", "Wen-An Yong"],
        title: "Dissipativeness of the hyperbolic quadrature method of moments for kinetic equations",
        venue: "arXiv",
        detail: "2406.13931, 2024",
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2406.13931" }]
    },
    {
        status: "preprint",
        authors: ["Tianshu Li", "Yihong Chen", "Qian Huang", "Wen-An Yong"],
        title: "Combining hyperbolic quadrature method of moments with discrete-velocity-direction models for solving BGK-type equations",
        venue: "arXiv",
        detail: "2411.12654, 2024",
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2411.12654" }]
    }
];
