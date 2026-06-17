// 这个文件是网站的“内容数据表”。
// 维护首页文字、导航名、项目、经历、荣誉时，优先改这里，不需要改 HTML。
// 发表页文案和论文条目维护在 js/publications.js。
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
    },
    profileLinks: [
        {
            key: "github",
            label: "GitHub",
            href: "https://github.com/CheYHinSpark"
        },
        {
            key: "researchgate",
            label: "ResearchGate",
            href: "https://www.researchgate.net/profile/Yihong-Chen-11"
        },
        {
            key: "openreview",
            label: "OpenReview",
            href: "https://openreview.net/forum?id=ri3yPWE21Q"
        },
        {
            key: "email",
            label: "Email",
            href: "mailto:chenyihong@mail.tsinghua.edu.cn"
        }
    ]
};

window.SITE_CONTENT = {
    zh: {
        htmlLang: "zh-CN",
        title: "陈奕宏 | Yihong Chen",
        description: "陈奕宏的个人主页：LLM Agent、科学计算、数值算法、数学推理与工具化科研流程。",
        keywords: "陈奕宏, Yihong Chen, LLM Agent, Scientific Computing, Numerical Algorithms, Mathematical Reasoning",
        brand: "陈奕宏",
        languageToggle: "En",
        cvButton: "简历",
        // nav 的键名需要和 index.html 里的 data-nav 对应。
        nav: {
            profile: "简介",
            experience: "经历",
            projects: "项目",
            outputs: "发表",
            honors: "荣誉"
        },
        // 首屏内容：姓名、简介、关键词和对应语言的简历链接。
        hero: {
            name: "陈奕宏 Yihong Chen",
            lead: "我是一名清华大学电子工程系博士后，研究兴趣连接数值分析、科学计算与大语言模型智能体。我关注如何把严谨的数学建模、结构保持算法和工具化研究流程，转化为能在真实软件环境中工作的智能系统。",
            address: [
                "清华大学电子工程系",
                "罗姆楼11-309"
            ],
            tags: ["LLM Agents", "GUI Automation", "Scientific Computing", "Mathematical Reasoning"]
        },
        profile: {
            title: "基本信息与个人简介",
            paragraphs: [
                "我本科和博士均就读于清华大学数学科学系，博士阶段主要研究动理学方程的模型约化与数值求解，围绕离散速度方向模型、Poisson 核积分矩方法和矩闭合系统的结构性质开展工作。",
                "博士后阶段，我将这一训练迁移到更接近真实任务的 AI 场景：LLM GUI agents、工具调用、数学推理、Transformer 机制分析，以及面向科研流程的自动化系统。我尤其关心模型如何可靠地使用工具、操作界面、表达推理，并与可验证的计算流程结合。"
            ]
        },
        researchFocus: {
            title: "研究方向",
            lead: "当前主页先用三个方向概括我的研究路径：从动理学方程和矩方法出发，延伸到模型机制理解和可执行的智能体系统。",
            items: [
                {
                    title: "LLM Agents 与 GUI 自动化",
                    description: "研究面向真实软件界面的智能体评测、规划和执行，关注 GUI benchmark、移动端/桌面自动化、经验复用和低延迟执行。",
                    tags: ["GUI Agents", "Tool Use", "Automation"]
                },
                {
                    title: "Transformer 机制与数学推理",
                    description: "从 attention sinks、gradient dynamics 和 massive activations 等现象入手，理解模型训练中的结构性信号，并服务于更可靠的推理与工具调用。",
                    tags: ["Transformer", "Mechanisms", "Reasoning"]
                },
                {
                    title: "动理学方程与矩方法",
                    description: "构造具有结构性质的模型约化和数值方法，覆盖 DVDM、Poisson-EQMOM、HyQMOM 等方向，并关注可实现性、耗散性和高效求解。",
                    tags: ["Kinetic Equations", "Moment Methods", "Numerics"]
                }
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
        honors: {
            title: "荣誉与奖励",
            items: [
                {
                    time: "2025",
                    description: "清华大学博士优秀学位论文"
                },
                {
                    time: "2019",
                    description: "清华大学综合优秀奖"
                },
                {
                    time: "2018",
                    description: "清华大学学业优秀奖"
                },
                {
                    time: "2017",
                    description: "清华大学学业优秀奖"
                },
                {
                    time: "2017—2020",
                    description: "清华大学数学学堂班成员"
                },
                {
                    time: "2015",
                    description: "中国数学奥林匹克二等奖"
                }
            ]
        },
        footer: "© Yihong Chen"
    },
    en: {
        htmlLang: "en",
        title: "Yihong Chen | 陈奕宏",
        description: "Personal website of Yihong Chen, covering LLM agents, scientific computing, numerical algorithms, mathematical reasoning, and tool-based research workflows.",
        keywords: "Yihong Chen, LLM Agent, Scientific Computing, Numerical Algorithms, Mathematical Reasoning",
        brand: "Yihong Chen",
        languageToggle: "中文",
        cvButton: "CV",
        // nav 的键名需要和 index.html 里的 data-nav 对应。
        nav: {
            profile: "Profile",
            experience: "Experience",
            projects: "Projects",
            outputs: "Publications",
            honors: "Honors"
        },
        hero: {
            name: "Yihong Chen 陈奕宏",
            lead: "I am a postdoctoral researcher at the Department of Electronic Engineering, Tsinghua University. My work connects numerical analysis, scientific computing, and LLM agents, with an interest in turning rigorous modeling, structure-preserving algorithms, and tool-based research workflows into intelligent systems that can operate in real software environments.",
            address: [
                "Department of Electronic Engineering, Tsinghua University",
                "Rohm Building 11-309, Beijing, China"
            ],
            tags: ["LLM Agents", "GUI Automation", "Scientific Computing", "Mathematical Reasoning"]
        },
        profile: {
            title: "Basic Information and Profile",
            paragraphs: [
                "I received my B.S. and Ph.D. training at the Department of Mathematical Sciences, Tsinghua University. My Ph.D. research focused on model reduction and numerical computation for kinetic equations, including discrete-velocity-direction models, Poisson-kernel-based moment methods, and structural properties of moment-closure systems.",
                "As a postdoctoral researcher, I am moving this background toward AI systems that interact with real tasks: LLM GUI agents, tool use, mathematical reasoning, Transformer mechanism analysis, and automated research workflows. I am especially interested in how models can use tools, operate interfaces, express reasoning, and stay connected to verifiable computation."
            ]
        },
        researchFocus: {
            title: "Research Focus",
            lead: "This homepage currently summarizes my research path in three directions, moving from kinetic equations and moment methods toward model mechanisms and executable agent systems.",
            items: [
                {
                    title: "LLM Agents and GUI Automation",
                    description: "I study evaluation, planning, and execution for agents that act through real software interfaces, including GUI benchmarks, mobile and desktop automation, experience reuse, and low-latency execution.",
                    tags: ["GUI Agents", "Tool Use", "Automation"]
                },
                {
                    title: "Transformer Mechanisms and Mathematical Reasoning",
                    description: "I analyze phenomena such as attention sinks, gradient dynamics, and massive activations to understand structural signals in training and to support more reliable reasoning and tool use.",
                    tags: ["Transformer", "Mechanisms", "Reasoning"]
                },
                {
                    title: "Kinetic Equations and Moment Methods",
                    description: "I develop structure-aware reduced models and numerical methods, including DVDM, Poisson-EQMOM, and HyQMOM-related analysis, with attention to realizability, dissipativeness, and efficient computation.",
                    tags: ["Kinetic Equations", "Moment Methods", "Numerics"]
                }
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
        honors: {
            title: "Honors and Awards",
            items: [
                {
                    time: "2025",
                    description: "Excellent Doctoral Dissertation, Tsinghua University"
                },
                {
                    time: "2019",
                    description: "Comprehensive Excellent Award, Tsinghua University"
                },
                {
                    time: "2018",
                    description: "Academic Excellent Award, Tsinghua University"
                },
                {
                    time: "2017",
                    description: "Academic Excellent Award, Tsinghua University"
                },
                {
                    time: "2017—2020",
                    description: "Member, Tsinghua Xuetang Mathematics Program"
                },
                {
                    time: "2015",
                    description: "Second Prize, Chinese Mathematical Olympiad"
                }
            ]
        },
        footer: "© Yihong Chen"
    }
};
