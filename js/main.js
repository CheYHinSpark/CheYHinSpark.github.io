// 这个文件只负责“把 js/content.js 里的数据填进 index.html”。
// 日常改文字、增删项目、增删论文时，优先改 content.js；只有改展示结构时才改这里。
(function () {
    "use strict";

    // 当前语言会优先读取浏览器本地保存的选择，其次根据浏览器语言猜测。
    var currentLang = getInitialLanguage();

    document.addEventListener("DOMContentLoaded", function () {
        bindEvents();
        renderPage(currentLang);
    });

    function getInitialLanguage() {
        var storedLang = readStoredLanguage();
        if (storedLang) {
            return storedLang;
        }

        var browserLang = (navigator.language || "zh").slice(0, 2);
        return browserLang === "zh" ? "zh" : "en";
    }

    function readStoredLanguage() {
        try {
            var value = window.localStorage.getItem("site-language");
            return value === "zh" || value === "en" ? value : "";
        } catch (error) {
            return "";
        }
    }

    function storeLanguage(lang) {
        try {
            window.localStorage.setItem("site-language", lang);
        } catch (error) {
            // 本地直接打开 HTML 时，少数浏览器可能禁用 localStorage；失败也不影响页面渲染。
        }
    }

    // 绑定页面上的交互：语言切换按钮、简历按钮。
    function bindEvents() {
        var languageToggle = document.getElementById("language-toggle");
        var cvButton = document.getElementById("cv-button");

        if (languageToggle) {
            languageToggle.addEventListener("click", function () {
                currentLang = currentLang === "zh" ? "en" : "zh";
                storeLanguage(currentLang);
                renderPage(currentLang);
            });
        }

        if (cvButton) {
            cvButton.addEventListener("click", function () {
                var content = window.SITE_CONTENT[currentLang];
                var cvHref = getCvHref(currentLang, content);
                if (cvHref) {
                    window.open(cvHref, "_blank", "noopener");
                }
            });
        }
    }

    // 页面总渲染入口：新增章节时，在这里增加对应的 renderXXX 调用。
    function renderPage(lang) {
        var content = window.SITE_CONTENT[lang] || window.SITE_CONTENT.zh;

        document.documentElement.lang = content.htmlLang;
        document.title = content.title;
        updateMetaDescription(content.description);

        setText("brand", content.brand);
        setText("language-toggle", content.languageToggle);
        setText("cv-button", content.cvButton);
        renderNav(content.nav);
        renderHero(content);
        renderProfile(content.profile);
        renderExperience(content.experience);
        renderProjects(content.projects);
        renderOutputs(content.outputs);
        renderHonors(content.honors);
        setText("footer-text", content.footer);
    }

    // 同步浏览器标题和搜索摘要。
    function updateMetaDescription(description) {
        var meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute("content", description);
        }
    }

    function renderNav(nav) {
        Object.keys(nav).forEach(function (key) {
            var item = document.querySelector("[data-nav='" + key + "']");
            if (item) {
                item.textContent = nav[key];
            }
        });
    }

    // 首屏内容：姓名、头像、简介、地址、邮箱、关键词标签。
    function renderHero(content) {
        var shared = getSharedContent();
        var hero = content.hero;
        // 姓名
        setText("profile-name", hero.name);
        // 头像
        var photo = document.getElementById("profile-photo");
        if (photo) {
            if (shared.profilePhoto) {
                photo.setAttribute("src", shared.profilePhoto);
            }
        }
        // 简介
        setText("hero-lead", hero.lead);
        // 地址和邮箱
        var list = document.getElementById("profile-lines");
        clearElement(list);

        hero.address.forEach(function (line) {
            var item = document.createElement("li");
            item.textContent = line;
            list.appendChild(item);
        });
        shared.emails.forEach(function (line) {
            var item = document.createElement("li");
            item.textContent = line;
            list.appendChild(item);
        });

        renderTagList("hero-tags", hero.tags);
    }

    // 简介区：正文段落和右侧能力关键词。
    function renderProfile(profile) {
        setText("profile-title", profile.title);

        var copy = document.getElementById("profile-copy");
        if (copy) {
            clearElement(copy);
            profile.paragraphs.forEach(function (paragraph) {
                copy.appendChild(createParagraph(paragraph));
            });
        }
    }

    // 科研与项目经历：每一项由 createprojectsItem 生成一张卡片。
    function renderProjects(projects) {
        setText("projects-title", projects.title);

        var list = document.getElementById("projects-list");

        clearElement(list);
        projects.items.forEach(function (item) {
            list.appendChild(createProjectsItem(item));
        });
    }

    function createProjectsItem(item) {
        var article = document.createElement("article");
        article.className = "projects-item";

        var header = document.createElement("div");
        header.className = "projects-item-header";

        var titleGroup = document.createElement("div");
        var title = document.createElement("h3");
        title.textContent = item.title;
        titleGroup.appendChild(title);

        var type = document.createElement("p");
        type.className = "item-type";
        type.textContent = item.type;
        titleGroup.appendChild(type);
        header.appendChild(titleGroup);

        article.appendChild(header);
        article.appendChild(createParagraph(item.description));

        return article;
    }

    // 教育与工作经历：position 决定时间轴圆点颜色，duration 决定右上角时间。
    function renderExperience(experience) {
        setText("experience-title", experience.title);

        var list = document.getElementById("experience-list");
        if (!list) {
            return;
        }

        clearElement(list);
        experience.items.forEach(function (item) {
            // 时间线装饰
            var entry = document.createElement("article");
            entry.className = "timeline-item";

            var marker = document.createElement("div");
            marker.className = "timeline-marker " + (item.position || "");
            entry.appendChild(marker);

            var body = document.createElement("div");
            body.className = "timeline-body";

            // 内容
            var title = document.createElement("h3");
            title.textContent = item.title;
            body.appendChild(title);

            var meta = document.createElement("p");
            meta.className = "item-type";
            meta.textContent = item.meta;
            body.appendChild(meta);

            if (item.duration) {
                var duration = document.createElement("p");
                duration.className = "top-right";
                duration.textContent = item.duration;
                body.appendChild(duration);
            }

            body.appendChild(createParagraph(item.description));
            entry.appendChild(body);
            list.appendChild(entry);
        });
    }

    // 学术成果：按 published / preprint 自动拆成两组列表。
    function renderOutputs(copy) {
        setText("outputs-title", copy.title);
        setText("published-title", copy.publishedTitle);
        setText("preprint-title", copy.preprintTitle);

        renderOutputsList("published-list", "published");
        renderOutputsList("preprint-list", "preprint");
    }

    function renderOutputsList(listId, status) {
        var list = document.getElementById(listId);
        if (!list) {
            return;
        }

        clearElement(list);

        window.SITE_PUBLICATIONS
            .filter(function (outputs) {
                return outputs.status === status;
            })
            .forEach(function (outputs) {
                list.appendChild(createOutputsItem(outputs));
            });
    }

    function createOutputsItem(outputs) {
        var item = document.createElement("li");

        var main = document.createElement("div");
        main.className = "outputs-main";

        var authors = document.createElement("p");
        authors.className = "outputs-authors";
        outputs.authors.forEach(function (author, index) {
            if (index > 0) {
                authors.appendChild(document.createTextNode(", "));
            }

            if (author === "Yihong Chen") {
                var strong = document.createElement("strong");
                strong.textContent = author;
                authors.appendChild(strong);
            } else {
                authors.appendChild(document.createTextNode(author));
            }
        });
        authors.appendChild(document.createTextNode("."));

        var title = document.createElement("p");
        title.className = "outputs-title";
        title.textContent = outputs.title + ".";

        var venue = document.createElement("p");
        venue.className = "outputs-venue";
        var venueName = document.createElement("em");
        venueName.textContent = outputs.venue;
        venue.appendChild(venueName);
        venue.appendChild(document.createTextNode(", " + outputs.detail + "."));

        main.appendChild(authors);
        main.appendChild(title);
        main.appendChild(venue);
        item.appendChild(main);

        var links = document.createElement("div");
        links.className = "outputs-links";
        outputs.links.forEach(function (linkData) {
            var link = document.createElement("a");
            link.href = linkData.href;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = linkData.label;
            links.appendChild(link);
        });
        item.appendChild(links);

        return item;
    }

    // 荣誉区：items 为空时显示 emptyText，避免页面出现空白章节。
    function renderHonors(honors) {
        setText("honors-title", honors.title);

        var list = document.getElementById("honor-list");

        clearElement(list);

        honors.items.forEach(function (honor) {
            list.appendChild(createHonorItem(honor));
        });
    }

    function createHonorItem(honor) {
        var item = document.createElement("article");
        // item.className = "honor-item";

        // var title = document.createElement("h3");
        // title.textContent = honor.title;
        // item.appendChild(title);

        // if (honor.meta) {
        //     var meta = document.createElement("p");
        //     meta.className = "item-type";
        //     meta.textContent = honor.meta;
        //     item.appendChild(meta);
        // }

        // if (honor.description) {
        //     item.appendChild(createParagraph(honor.description));
        // }

        return item;
    }

    // 共享配置：邮箱、PDF 路径、头像路径等中英文一致的信息都从这里读。
    function getSharedContent() {
        return window.SITE_SHARED || {};
    }

    function getCvHref(lang, content) {
        var shared = getSharedContent();
        if (shared.cvHref && shared.cvHref[lang]) {
            return shared.cvHref[lang];
        }

        return content.hero.cvHref || "";
    }

    // 通用小工具：生成一组标签。
    function renderTagList(elementId, tags) {
        var list = document.getElementById(elementId);
        if (!list) {
            return;
        }

        clearElement(list);
        tags.forEach(function (text) {
            var tag = document.createElement("span");
            tag.className = "tag";
            tag.textContent = text;
            list.appendChild(tag);
        });
    }

    function createParagraph(text) {
        var paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }

    // 安全写文本：目标节点不存在时直接跳过，方便你临时注释某个 HTML 区块。
    function setText(elementId, text) {
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
        }
    }

    // 清空容器后再重新渲染，避免语言切换时重复追加内容。
    function clearElement(element) {
        if (!element) {
            return;
        }

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
})();
