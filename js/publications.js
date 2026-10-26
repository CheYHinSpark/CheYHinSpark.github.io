// 论文与状态根据 2026 年 10 月更新的 CV 维护。
// 按研究方向分组；accepted / published / submitted / preprint 独立标注。
window.SITE_PUBLICATION_CONTENT = {
    "zh": {
        "title": "论文成果",
        "viewAll": "查看全部论文",
        "backHome": "返回首页",
        "listTitle": "论文成果",
        "lead": "按研究方向列出论文，逐篇标注接收、发表、在投与预印本状态。",
        "pageDocumentTitle": "论文成果 | 陈奕宏",
        "pageDescription": "陈奕宏的论文成果：人工智能、大语言模型与智能体，以及动理学方程建模与数值计算。包含 NeurIPS、TMLR、IJCAI 和数值计算相关期刊成果。",
        "pageKeywords": "陈奕宏, Yihong Chen, NeurIPS, TMLR, IJCAI, EdgeQPS, DeltaReplay, Kinetic Equations, Moment Methods",
        "aiTitle": "人工智能、大语言模型与智能体",
        "kineticsTitle": "动理学方程建模与数值计算",
        "statusLabels": {
            "accepted": "已接收",
            "published": "已发表",
            "submitted": "在投",
            "preprint": "预印本"
        },
        "relatedPapers": "相关论文",
        "summary": "10 篇论文，涵盖 Transformer 内部机制、GUI 智能体、端侧模型部署与动理学方程数值计算。",
        "selectedTitle": "近期代表工作"
    },
    "en": {
        "title": "Publications",
        "viewAll": "View all publications",
        "backHome": "Back to home",
        "listTitle": "Publications",
        "lead": "Papers grouped by research area, with acceptance, publication, submission, and preprint status shown for each entry.",
        "pageDocumentTitle": "Publications | Yihong Chen",
        "pageDescription": "Publications by Yihong Chen on AI, large language models, GUI agents, edge model deployment, and numerical methods for kinetic equations.",
        "pageKeywords": "Yihong Chen, NeurIPS, TMLR, IJCAI, EdgeQPS, DeltaReplay, Kinetic Equations, Moment Methods",
        "aiTitle": "AI, Large Language Models, and Agents",
        "kineticsTitle": "Modeling and Numerics of Kinetic Equations",
        "statusLabels": {
            "accepted": "Accepted",
            "published": "Published",
            "submitted": "In submission",
            "preprint": "Preprint"
        },
        "relatedPapers": "Related papers",
        "summary": "10 papers on Transformer mechanisms, GUI agents, edge model deployment, and numerical methods for kinetic equations.",
        "selectedTitle": "Recent Highlights"
    }
};

window.SITE_PUBLICATIONS = [
    {
        "id": "attention-sinks",
        "area": "ai",
        "status": "accepted",
        "authors": [
            "Yihong Chen",
            "Zhouchen Lin",
            "Quanming Yao"
        ],
        "title": "Attention Sinks Induce Gradient Sinks: Massive Activations as Gradient Regulators in Transformers",
        "venue": "NeurIPS",
        "detail": "2026",
        "links": [
            {
                "label": "OpenReview",
                "href": "https://openreview.net/forum?id=c49EUKrp1G"
            }
        ]
    },
    {
        "id": "gui-survey",
        "area": "ai",
        "status": "published",
        "authors": [
            "Yihong Chen",
            "Shuai Wang",
            "Yaqing Wang",
            "Quanming Yao"
        ],
        "title": "A Survey on Benchmarks of LLM-based GUI Agents",
        "venue": "Transactions on Machine Learning Research",
        "detail": "2026",
        "links": [
            {
                "label": "OpenReview",
                "href": "https://openreview.net/forum?id=ri3yPWE21Q"
            }
        ]
    },
    {
        "id": "vspeedui",
        "area": "ai",
        "status": "published",
        "authors": [
            "Xiaohan Zheng",
            "Yihong Chen",
            "Haiquan Qiu",
            "Quanming Yao"
        ],
        "title": "vSpeedUI: Turning Past GUI Experience into Fast Executable Plans",
        "venue": "IJCAI",
        "detail": "Demo track, 2026",
        "links": []
    },
    {
        "id": "edgeqps",
        "area": "ai",
        "status": "submitted",
        "authors": [
            "Ruibing Wang",
            "Yihong Chen",
            "Hongyi Nie",
            "Shiqi Fan",
            "Huixiang Zhang",
            "Quanming Yao"
        ],
        "title": "EdgeQPS: Deployment-Aware Joint Quantization and Structured Pruning Search for Edge Language Models",
        "venue": "",
        "detail": "2026",
        "links": []
    },
    {
        "id": "deltareplay",
        "area": "ai",
        "status": "preprint",
        "authors": [
            "Yudong Bai",
            "Yihong Chen",
            "Quanming Yao",
            "Yaqing Wang"
        ],
        "title": "DeltaReplay: Task-Relative Memory Reuse for Mobile GUI Agents",
        "venue": "arXiv",
        "detail": "2610.11707, 2026",
        "links": [
            {
                "label": "arXiv",
                "href": "https://arxiv.org/abs/2610.11707"
            }
        ]
    },
    {
        "id": "hyqmom-dissipativity",
        "area": "kinetics",
        "status": "published",
        "authors": [
            "Ruixi Zhang",
            "Yihong Chen",
            "Qian Huang",
            "Wen-An Yong"
        ],
        "title": "Dissipativeness of the Hyperbolic Quadrature Method of Moments for Kinetic Equations",
        "venue": "Journal of Statistical Physics",
        "detail": "193, 146, 2026",
        "links": [
            {
                "label": "DOI",
                "href": "https://doi.org/10.1007/s10955-026-03706-y"
            }
        ]
    },
    {
        "id": "poisson-qmom",
        "area": "kinetics",
        "status": "published",
        "authors": [
            "Yihong Chen",
            "Qian Huang",
            "Wen-An Yong",
            "Ruixi Zhang"
        ],
        "title": "Poisson Quadrature Method of Moments for 2D Kinetic Equations with Velocity of Constant Magnitude",
        "venue": "Multiscale Modeling & Simulation",
        "detail": "23(1), 2025",
        "links": [
            {
                "label": "DOI",
                "href": "https://doi.org/10.1137/23m1620181"
            }
        ]
    },
    {
        "id": "dvdm-weighted",
        "area": "kinetics",
        "status": "published",
        "authors": [
            "Yihong Chen",
            "Qian Huang",
            "Wen-An Yong"
        ],
        "title": "Discrete-Velocity-Direction Models of BGK-Type with Minimum Entropy: II. Weighted Models",
        "venue": "Journal of Scientific Computing",
        "detail": "99, 84, 2024",
        "links": [
            {
                "label": "DOI",
                "href": "https://doi.org/10.1007/s10915-024-02531-3"
            }
        ]
    },
    {
        "id": "dvdm-basic",
        "area": "kinetics",
        "status": "published",
        "authors": [
            "Qian Huang",
            "Yihong Chen",
            "Wen-An Yong"
        ],
        "title": "Discrete-Velocity-Direction Models of BGK-Type with Minimum Entropy: I. Basic Idea",
        "venue": "Journal of Scientific Computing",
        "detail": "95, 80, 2023",
        "links": [
            {
                "label": "DOI",
                "href": "https://doi.org/10.1007/s10915-023-02211-8"
            }
        ]
    },
    {
        "id": "hyqmom-dvdm",
        "area": "kinetics",
        "status": "preprint",
        "authors": [
            "Tianshu Li",
            "Yihong Chen",
            "Qian Huang",
            "Wen-An Yong"
        ],
        "title": "Combining Hyperbolic Quadrature Method of Moments and Discrete-Velocity-Direction Models for Solving BGK-Type Equations",
        "venue": "arXiv",
        "detail": "2411.12654, 2024",
        "links": [
            {
                "label": "arXiv",
                "href": "https://arxiv.org/abs/2411.12654"
            }
        ]
    }
];
