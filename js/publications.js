// 这个文件只维护发表相关内容。
// 发表页文案放在 SITE_PUBLICATION_CONTENT，论文条目放在 SITE_PUBLICATIONS。

window.SITE_PUBLICATION_CONTENT = {
    zh: {
        title: "学术成果",
        viewAll: "查看发表列表",
        backHome: "返回首页",
        listTitle: "发表列表",
        pageDocumentTitle: "发表列表 | 陈奕宏",
        pageDescription: "陈奕宏的正式发表论文与预印本列表。",
        pageKeywords: "陈奕宏, Yihong Chen, publications, LLM agents, kinetic equations, moment methods",
        publishedTitle: "正式发表",
        preprintTitle: "预印本",
    },
    en: {
        title: "Academic Outputs",
        viewAll: "View publications",
        backHome: "Back to home",
        listTitle: "Publications",
        pageDocumentTitle: "Publications | Yihong Chen",
        pageDescription: "Publications and preprints by Yihong Chen.",
        pageKeywords: "Yihong Chen, publications, LLM agents, kinetic equations, moment methods",
        publishedTitle: "Published",
        preprintTitle: "Preprints",
    }
};

// status 使用 "published" 或 "preprint"，JS 会自动分组。
window.SITE_PUBLICATIONS = [
    {
        status: "published",
        authors: ["Yihong Chen", "Shuai Wang", "Yaqing Wang", "Quanming Yao"],
        title: "A Survey on Benchmarks of LLM-based GUI Agents",
        venue: "Transactions on Machine Learning Research",
        detail: "2026",
        links: [
            { label: "OpenReview", href: "https://openreview.net/forum?id=ri3yPWE21Q" },
        ]
    },
    {
        status: "published",
        authors: ["Xiaohan Zheng", "Yihong Chen", "Haiquan Qiu", "Quanming Yao"],
        title: "vSpeedUI: Turning Past GUI Experience into Fast Executable Plans",
        venue: "IJCAI",
        detail: "Demo track, 2026",
        links: [
            { label: "IJCAI", href: "https://2026.ijcai.org/accepted-papers/" },
        ]
    },
    {
        status: "preprint",
        authors: ["Yihong Chen", "Zhouchen Lin", "Quanming Yao"],
        title: "Attention Sinks Induce Gradient Sinks: Massive Activations as Gradient Regulators in Transformers",
        venue: "arXiv",
        detail: "2603.17771, 2026",
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.17771" }]
    },
    {
        status: "published",
        authors: ["Yihong Chen", "Qian Huang", "Wen-An Yong", "Ruixi Zhang"],
        title: "Poisson Quadrature Method of Moments for 2D Kinetic Equations with Velocity of Constant Magnitude",
        venue: "Multiscale Modeling and Simulation",
        detail: "23(1), 577-610, 2025",
        links: [
            { label: "DOI", href: "https://doi.org/10.1137/23m1620181" },
        ]
    },
    {
        status: "published",
        authors: ["Yihong Chen", "Qian Huang", "Wen-An Yong"],
        title: "Discrete-Velocity-Direction Models of BGK-Type with Minimum Entropy: II. Weighted Models",
        venue: "Journal of Scientific Computing",
        detail: "99(84), 2024",
        links: [
            { label: "DOI", href: "https://doi.org/10.1007/s10915-024-02531-3" },
        ]
    },
    {
        status: "preprint",
        authors: ["Ruixi Zhang", "Yihong Chen", "Qian Huang", "Wen-An Yong"],
        title: "Dissipativeness of the Hyperbolic Quadrature Method of Moments for Kinetic Equations",
        venue: "arXiv",
        detail: "2406.13931, 2024",
        links: [
            { label: "arXiv", href: "https://arxiv.org/abs/2406.13931" }
        ]
    },
    {
        status: "preprint",
        authors: ["Tianshu Li", "Yihong Chen", "Qian Huang"],
        title: "Combining Hyperbolic Quadrature Method of Moments with Discrete-Velocity-Direction Models for Solving BGK-Type Equations",
        venue: "arXiv",
        detail: "2411.12654, 2024",
        links: [
            { label: "arXiv", href: "https://arxiv.org/abs/2411.12654" }
        ]
    },
    {
        status: "published",
        authors: ["Qian Huang", "Yihong Chen", "Wen-An Yong"],
        title: "Discrete-Velocity-Direction Models of BGK-Type with Minimum Entropy: I. Basic Idea",
        venue: "Journal of Scientific Computing",
        detail: "95(80), 2023",
        links: [
            { label: "DOI", href: "https://doi.org/10.1007/s10915-023-02211-8" }
        ]
    }
];
