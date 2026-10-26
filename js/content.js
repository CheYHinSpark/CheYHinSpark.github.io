// 首页中英文内容，根据 2026 年 10 月更新的 CV 维护。
// 共用联系方式、头像和简历路径放在 SITE_SHARED；论文条目见 publications.js。
window.SITE_SHARED = {
    "profilePhoto": "img/profile.png",
    "emails": [
        "chenyihong0907@foxmail.com"
    ],
    "cvHref": {
        "zh": "cv/CV_zh.pdf",
        "en": "cv/CV_en.pdf"
    },
    "profileLinks": [
        {
            "label": "GitHub",
            "href": "https://github.com/CheYHinSpark"
        },
        {
            "label": "ResearchGate",
            "href": "https://www.researchgate.net/profile/Yihong-Chen-11"
        },
        {
            "label": "Email",
            "href": "mailto:chenyihong0907@foxmail.com"
        }
    ]
};

window.SITE_CONTENT = {
    "zh": {
        "htmlLang": "zh-CN",
        "title": "陈奕宏 | Yihong Chen",
        "description": "陈奕宏，清华大学电子工程系博士后。研究 Transformer 机制、GUI 智能体评测与记忆复用、大模型训练稳定性，以及动理学方程的模型与数值方法。",
        "keywords": "陈奕宏, Yihong Chen, Transformer, LLM, GUI Agent, Attention Sinks, Training Stability, Kinetic Equations",
        "brand": "陈奕宏",
        "languageToggle": "En",
        "cvButton": "简历",
        "nav": {
            "profile": "简介",
            "research": "研究",
            "experience": "经历",
            "projects": "项目",
            "outputs": "论文",
            "honors": "荣誉"
        },
        "hero": {
            "name": "陈奕宏 Yihong Chen",
            "eyebrow": "清华大学 · 电子工程系博士后",
            "lead": "我的研究聚焦大语言模型内部机制与 GUI 智能体，关注模型中的极端 token 现象、智能体评测与记忆复用，以及低精度计算下的训练稳定性。此前，我在清华大学数学科学系研究动理学方程的模型与数值方法。",
            "opportunity": "求职方向：大模型算法研究员 · 智能体算法研究员",
            "address": [
                "北京 · 清华大学"
            ],
            "tags": [
                "Transformer 机制",
                "GUI 智能体",
                "训练稳定性",
                "数值计算"
            ]
        },
        "profile": {
            "title": "个人简介",
            "paragraphs": [
                "我于 2020 年和 2025 年获得清华大学数学科学系理学学士与理学博士学位，博士论文为《动理学方程的离散速度方向模型与矩方法》，获清华大学优秀博士学位论文。2025 年 7 月起，我在清华大学电子工程系从事博士后研究，研究方向为大语言模型、GUI 智能体技术及其应用。",
                "目前的工作包括分析 attention sinks 与 massive activations 的形成机理，梳理 GUI Agent 评测体系，以及通过历史经验复用提升移动智能体的执行效率。我也参与华为合作项目和北京市科委项目，开展跨设备工作流、端侧语言模型部署和行业智能体算法的研究与验证。"
            ]
        },
        "researchFocus": {
            "title": "研究经历",
            "lead": "从动理学方程的建模与数值分析，到 Transformer 内部机制与面向真实界面的智能体。",
            "items": [
                {
                    "title": "Transformer 大模型中的极端 token 现象",
                    "role": "第一作者",
                    "duration": "2025—至今",
                    "description": "从反向传播视角研究注意力汇聚（attention sinks）与巨大激活（massive activations）的形成机理及因果关系。",
                    "highlights": [
                        "识别梯度汇聚现象，揭示注意力汇聚经 value 路径引起局部梯度集中的机制，并提出 pre-norm RMSNorm 下巨大激活调节局部梯度压力的解释。",
                        "设计仅调节 value 路径反向梯度的 V-scale 干预，在保留注意力汇聚的同时抑制巨大激活，为机制解释提供实验支持。相关论文被 NeurIPS 2026 接收。"
                    ],
                    "tags": [
                        "Transformer",
                        "Attention Sinks",
                        "Gradient Dynamics"
                    ],
                    "publicationIds": [
                        "attention-sinks"
                    ]
                },
                {
                    "title": "GUI Agent 评测体系与记忆复用",
                    "role": "第一作者 / 合作作者",
                    "duration": "2025—至今",
                    "description": "围绕 GUI 智能体的能力评估、执行效率与界面变化下的稳健性，开展评测基准综述与移动智能体研究。",
                    "highlights": [
                        "作为第一作者建立覆盖界面定位与问答、多步导航及开放环境的基准分类，从数据集、交互环境和评测器三个维度比较现有基准。综述发表于 TMLR 2026。",
                        "作为合作作者，将历史操作轨迹组织为可执行经验图，通过匹配新任务减少重复工作流中的逐步模型调用；在 HarmonyOS 真机上验证，成果发表于 IJCAI 2026 Demo track。"
                    ],
                    "tags": [
                        "GUI Benchmarks",
                        "Memory Reuse",
                        "Mobile Agents"
                    ],
                    "publicationIds": [
                        "gui-survey",
                        "vspeedui",
                        "deltareplay"
                    ]
                },
                {
                    "title": "动理学方程建模与数值计算",
                    "role": "第一作者 / 合作作者",
                    "duration": "2021—2025",
                    "description": "围绕高维动理学方程的模型约化、矩封闭与高效求解，研究具有理论保证的模型与数值算法。",
                    "highlights": [
                        "基于最小熵原理构建离散速度方向模型，分析平衡态与熵性质，将平衡态求解转化为低维凸优化问题，并将多种一维计算方法推广到高维。",
                        "针对二维固定速度大小的动理学方程，提出 Poisson 核矩封闭方法与矩反演算法，建立封闭的良定义性及随矩数增加的分布逼近收敛保证，提升数值收敛速度并简化封闭计算。"
                    ],
                    "tags": [
                        "Kinetic Equations",
                        "Moment Methods",
                        "Numerical Analysis"
                    ],
                    "publicationIds": [
                        "poisson-qmom",
                        "dvdm-weighted",
                        "dvdm-basic"
                    ]
                }
            ]
        },
        "experience": {
            "title": "教育与工作经历",
            "items": [
                {
                    "title": "博士后",
                    "affiliation": "清华大学电子工程系",
                    "position": "job",
                    "duration": "2025.07—2027.06（预计）",
                    "description": "研究方向：大语言模型、GUI 智能体技术及其应用。"
                },
                {
                    "title": "理学博士",
                    "affiliation": "清华大学数学科学系",
                    "position": "edu",
                    "duration": "2020.08—2025.06",
                    "description": "学位论文：动理学方程的离散速度方向模型与矩方法。获清华大学优秀博士学位论文。"
                },
                {
                    "title": "理学学士",
                    "affiliation": "清华大学数学科学系",
                    "position": "edu",
                    "duration": "2016.08—2020.06",
                    "description": "2017—2020 年为清华大学数学学堂班成员。"
                }
            ]
        },
        "projects": {
            "title": "合作项目",
            "items": [
                {
                    "title": "大模型计算舍入与训练稳定性机制",
                    "type": "华为合作项目 · 主要参与人",
                    "duration": "2026.10—至今",
                    "description": "项目处于启动阶段，聚焦低精度数值计算与舍入对大模型训练的影响。",
                    "highlights": [
                        "研究训练动态、误差传播、损失收敛和模型性能的变化机理，尤其关注大模型强化学习中的训练与推理不一致情形。",
                        "通过理论分析与实验，为数值设计和稳定训练方法优化提供依据。"
                    ]
                },
                {
                    "title": "全场景协同业务智能化高校合作项目",
                    "type": "华为合作项目 · 主要参与人",
                    "duration": "2026.01—至今",
                    "description": "面向跨设备业务中的工作流编排与端侧部署，参与方案设计、验证和交付协调。",
                    "highlights": [
                        "参与设计云端强模型探索、轨迹转执行图、本地模型识别意图的方案，通过流程复用减少重复推理，完成测试集任务验证。",
                        "参与联合量化与结构化剪枝方案，实现小模型端侧部署并完成跨设备分享任务。",
                        "对接甲方项目经理与合作导师，协调组内技术方案、任务执行和项目交付；形成在投论文 1 篇、专利申请 2 项。"
                    ]
                },
                {
                    "title": "行业适配的智能体关键技术研究及应用",
                    "type": "北京市科委项目 · 主要参与人",
                    "duration": "2025.11—至今",
                    "description": "项目编号：Z251100008125003。面向行业智能体的规划效率与执行可靠性，负责算法实现与验证的组织统筹。",
                    "highlights": [
                        "组织开展任务图搜索、工作流优化、意图识别、工具调用、任务执行与强化微调六项算法的实现和验证。",
                        "负责实施统筹、成果与文档整理，以及项目测试和评审等工作。"
                    ]
                }
            ]
        },
        "honors": {
            "title": "荣誉与奖励",
            "items": [
                {
                    "time": "2025",
                    "description": "清华大学优秀博士学位论文"
                },
                {
                    "time": "2019",
                    "description": "清华大学综合优秀奖"
                },
                {
                    "time": "2018",
                    "description": "清华大学学业优秀奖"
                },
                {
                    "time": "2017",
                    "description": "清华大学学业优秀奖"
                },
                {
                    "time": "2017—2020",
                    "description": "清华大学数学学堂班成员"
                },
                {
                    "time": "2015",
                    "description": "中国数学奥林匹克二等奖"
                }
            ]
        },
        "footer": "© Yihong Chen · 更新于 2026 年 10 月"
    },
    "en": {
        "htmlLang": "en",
        "title": "Yihong Chen | 陈奕宏",
        "description": "Yihong Chen is a postdoctoral researcher at Tsinghua University working on Transformer mechanisms, GUI agent evaluation and memory reuse, LLM training stability, and numerical methods for kinetic equations.",
        "keywords": "Yihong Chen, Transformer, LLM, GUI Agents, Attention Sinks, Training Stability, Kinetic Equations",
        "brand": "Yihong Chen",
        "languageToggle": "中文",
        "cvButton": "CV",
        "nav": {
            "profile": "About",
            "research": "Research",
            "experience": "Experience",
            "projects": "Projects",
            "outputs": "Publications",
            "honors": "Honors"
        },
        "hero": {
            "name": "Yihong Chen 陈奕宏",
            "eyebrow": "Postdoctoral Researcher · Tsinghua University",
            "lead": "I study the internal mechanisms of large language models and GUI agents, with a focus on extreme token phenomena, agent evaluation and memory reuse, and training stability under low-precision computation. Previously, I worked on modeling and numerical methods for kinetic equations at Tsinghua's Department of Mathematical Sciences.",
            "opportunity": "Seeking research scientist roles in LLMs and AI agents",
            "address": [
                "Department of Electronic Engineering, Tsinghua University",
                "Beijing, China"
            ],
            "tags": [
                "Transformer Mechanisms",
                "GUI Agents",
                "Training Stability",
                "Numerical Methods"
            ]
        },
        "profile": {
            "title": "About Me",
            "paragraphs": [
                "I received my B.S. in 2020 and Ph.D. in 2025 from the Department of Mathematical Sciences at Tsinghua University. My dissertation on discrete-velocity-direction models and moment methods for kinetic equations received Tsinghua's Outstanding Doctoral Dissertation Award. Since July 2025, I have been a postdoctoral researcher in the Department of Electronic Engineering, working on large language models, GUI agents, and their applications.",
                "My current work investigates the mechanisms behind attention sinks and massive activations, organizes GUI agent evaluation benchmarks, and explores memory reuse for efficient mobile agents. I also contribute to Huawei collaborations and a Beijing Municipal Science and Technology Commission project on cross-device workflows, edge language model deployment, and industry-specific agent algorithms."
            ]
        },
        "researchFocus": {
            "title": "Research Experience",
            "lead": "From modeling and numerical analysis of kinetic equations to Transformer mechanisms and agents that interact with real interfaces.",
            "items": [
                {
                    "title": "Extreme Token Phenomena in Transformers",
                    "role": "First author",
                    "duration": "2025–Present",
                    "description": "Investigating the mechanisms and causal relationship between attention sinks and massive activations through backpropagation analysis.",
                    "highlights": [
                        "Identified gradient sinks and showed how attention sinks concentrate local gradients along the value pathway. Proposed that massive activations regulate local gradient pressure through RMSNorm in pre-norm Transformers.",
                        "Designed V-scale to rescale gradients only along the value pathway during backpropagation. It suppresses massive activations while preserving attention sinks, providing experimental support for the mechanism. Paper accepted at NeurIPS 2026."
                    ],
                    "tags": [
                        "Transformer",
                        "Attention Sinks",
                        "Gradient Dynamics"
                    ],
                    "publicationIds": [
                        "attention-sinks"
                    ]
                },
                {
                    "title": "GUI Agent Evaluation and Memory Reuse",
                    "role": "First author / Coauthor",
                    "duration": "2025–Present",
                    "description": "Studying GUI agent evaluation, execution efficiency, and robustness to interface changes through benchmark analysis and mobile agent research.",
                    "highlights": [
                        "As first author, developed a taxonomy covering GUI grounding and question answering, multi-step navigation, and open environments. Compared benchmarks across datasets, interaction environments, and evaluators. Survey published in TMLR 2026.",
                        "As a coauthor, contributed to executable experience graphs built from past interaction trajectories. Matching graphs to new tasks reduces step-by-step model calls in recurring workflows. Validated on HarmonyOS devices and published in the IJCAI 2026 Demo track."
                    ],
                    "tags": [
                        "GUI Benchmarks",
                        "Memory Reuse",
                        "Mobile Agents"
                    ],
                    "publicationIds": [
                        "gui-survey",
                        "vspeedui",
                        "deltareplay"
                    ]
                },
                {
                    "title": "Modeling and Numerics of Kinetic Equations",
                    "role": "First author / Coauthor",
                    "duration": "2021–2025",
                    "description": "Developing reduced models, moment closures, and efficient numerical methods for high-dimensional kinetic equations with theoretical guarantees.",
                    "highlights": [
                        "Developed discrete-velocity-direction models based on the minimum-entropy principle. Analyzed equilibrium states and entropy properties, reduced equilibrium computation to low-dimensional convex optimization, and extended several one-dimensional methods to higher dimensions.",
                        "Proposed a Poisson-kernel-based moment closure and inversion algorithm for two-dimensional kinetic equations with fixed speed. Established well-definedness and convergence guarantees as the number of moments increases, while improving convergence speed and simplifying closure computations."
                    ],
                    "tags": [
                        "Kinetic Equations",
                        "Moment Methods",
                        "Numerical Analysis"
                    ],
                    "publicationIds": [
                        "poisson-qmom",
                        "dvdm-weighted",
                        "dvdm-basic"
                    ]
                }
            ]
        },
        "experience": {
            "title": "Employment and Education",
            "items": [
                {
                    "title": "Postdoctoral Researcher",
                    "affiliation": "Department of Electronic Engineering, Tsinghua University",
                    "position": "job",
                    "duration": "July 2025–June 2027 (expected)",
                    "description": "Research: large language models, GUI agents, and their applications."
                },
                {
                    "title": "Ph.D. in Science",
                    "affiliation": "Department of Mathematical Sciences, Tsinghua University",
                    "position": "edu",
                    "duration": "Aug. 2020–June 2025",
                    "description": "Dissertation on discrete-velocity-direction models and moment methods for kinetic equations. Outstanding Doctoral Dissertation Award, Tsinghua University."
                },
                {
                    "title": "B.S. in Science",
                    "affiliation": "Department of Mathematical Sciences, Tsinghua University",
                    "position": "edu",
                    "duration": "Aug. 2016–June 2020",
                    "description": "Member of the Tsinghua Xuetang Mathematics Program, 2017–2020."
                }
            ]
        },
        "projects": {
            "title": "Collaborative Projects",
            "items": [
                {
                    "title": "Rounding Effects and Training Stability in LLMs",
                    "type": "Huawei collaboration · Key contributor",
                    "duration": "Oct. 2026–Present",
                    "description": "A project in its initial phase investigating the effects of low-precision arithmetic and rounding on LLM training.",
                    "highlights": [
                        "Investigating training dynamics, error propagation, loss convergence, and model performance, particularly training-inference mismatches during LLM reinforcement learning.",
                        "Theoretical analysis and experiments aim to inform numerical design and stable training methods."
                    ]
                },
                {
                    "title": "Intelligent Cross-Device Services",
                    "type": "Huawei collaboration · Key contributor",
                    "duration": "Jan. 2026–Present",
                    "description": "Contributing to workflow design, edge deployment, validation, and delivery coordination for cross-device services.",
                    "highlights": [
                        "Contributed to a workflow where a powerful cloud model explores tasks, trajectories become execution graphs, and a local model recognizes intent. Workflow reuse reduces repeated inference; validated on test-set tasks.",
                        "Contributed to joint quantization and structured pruning for edge language models, deploying a small model on-device and demonstrating cross-device sharing tasks.",
                        "Coordinated technical design, task execution, and delivery with the Huawei project manager, faculty supervisor, and team. Outputs include one submitted manuscript and two patent applications."
                    ]
                },
                {
                    "title": "Industry-Specific Agent Algorithms",
                    "type": "Beijing Municipal Science and Technology Commission · Key contributor",
                    "duration": "Nov. 2025–Present",
                    "description": "Project Z251100008125003, targeting planning efficiency and execution reliability for industry-specific agents.",
                    "highlights": [
                        "Coordinated implementation and validation of six algorithms: task-graph search, workflow optimization, intent recognition, tool calling, task execution, and reinforcement fine-tuning.",
                        "Managed implementation coordination, results and documentation, project testing, and reviews."
                    ]
                }
            ]
        },
        "honors": {
            "title": "Honors and Awards",
            "items": [
                {
                    "time": "2025",
                    "description": "Outstanding Doctoral Dissertation Award, Tsinghua University"
                },
                {
                    "time": "2019",
                    "description": "Comprehensive Excellence Award, Tsinghua University"
                },
                {
                    "time": "2018",
                    "description": "Academic Excellence Award, Tsinghua University"
                },
                {
                    "time": "2017",
                    "description": "Academic Excellence Award, Tsinghua University"
                },
                {
                    "time": "2017–2020",
                    "description": "Member of the Tsinghua Xuetang Mathematics Program"
                },
                {
                    "time": "2015",
                    "description": "Second Prize, Chinese Mathematical Olympiad (CMO)"
                }
            ]
        },
        "footer": "© Yihong Chen · Updated October 2026"
    }
};
