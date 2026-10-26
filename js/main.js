// 这个文件负责把 js/content.js 和 js/publications.js 里的数据填进页面。
// 日常改文字、增删项目、增删论文时，优先改数据文件；只有改展示结构时才改这里。
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
        var publicationContent = getPublicationContent(lang);
        var page = getPageName();
        var pageTitle = content.title;
        var pageDescription = content.description;
        var pageKeywords = content.keywords || "";

        document.documentElement.lang = content.htmlLang;
        if (page === "publications" && publicationContent) {
            pageTitle = publicationContent.pageDocumentTitle || pageTitle;
            pageDescription = publicationContent.pageDescription || pageDescription;
            pageKeywords = publicationContent.pageKeywords || pageKeywords;
        }
        document.title = pageTitle;
        updateDocumentMetadata(pageTitle, pageDescription, pageKeywords);

        setText("brand", content.brand);
        setText("language-toggle", content.languageToggle);
        setText("cv-button", content.cvButton);
        renderNav(content.nav);
        renderHero(content);
        renderProfile(content.profile);
        renderResearchFocus(content.researchFocus);
        renderExperience(content.experience);
        renderProjects(content.projects);
        renderOutputs(publicationContent);
        renderHonors(content.honors);
        setText("footer-text", content.footer);
    }

    function getPageName() {
        return document.body ? document.body.getAttribute("data-page") || "home" : "home";
    }

    function getPublicationContent(lang) {
        var allContent = window.SITE_PUBLICATION_CONTENT || {};
        return allContent[lang] || allContent.zh || null;
    }

    // 同步浏览器标题、搜索摘要和分享预览。
    function updateDocumentMetadata(title, description, keywords) {
        setMetaContent("name", "description", description);
        setMetaContent("name", "keywords", keywords);
        setMetaContent("property", "og:title", title);
        setMetaContent("property", "og:description", description);
        setMetaContent("name", "twitter:title", title);
        setMetaContent("name", "twitter:description", description);
    }

    function setMetaContent(attributeName, attributeValue, content) {
        if (!content) {
            return;
        }

        var meta = document.querySelector("meta[" + attributeName + "='" + attributeValue + "']");
        if (meta) {
            meta.setAttribute("content", content);
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
        if (!hero) {
            return;
        }
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
        setText("hero-eyebrow", hero.eyebrow);
        setText("hero-lead", hero.lead);
        setText("hero-opportunity", hero.opportunity);
        // 地址和邮箱
        var list = document.getElementById("profile-lines");
        clearElement(list);

        if (list) {
            (hero.address || []).forEach(function (line) {
                var item = document.createElement("li");
                item.textContent = line;
                list.appendChild(item);
            });
            (shared.emails || []).forEach(function (line) {
                var item = document.createElement("li");
                var link = document.createElement("a");
                link.href = "mailto:" + line;
                link.textContent = line;
                item.appendChild(link);
                list.appendChild(item);
            });
        }

        renderTagList("hero-tags", hero.tags);
        renderProfileLinks();
    }

    // 简介区：正文段落。
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

    function renderProfileLinks() {
        var list = document.getElementById("profile-links");
        var shared = getSharedContent();
        if (!list) {
            return;
        }

        clearElement(list);
        (shared.profileLinks || []).forEach(function (linkData) {
            var link = document.createElement("a");
            var isEmail = linkData.href.indexOf("mailto:") === 0;
            link.href = linkData.href;
            if (!isEmail) {
                link.target = "_blank";
                link.rel = "noopener";
            }
            link.textContent = linkData.label;
            list.appendChild(link);
        });
    }

    function renderResearchFocus(researchFocus) {
        if (!researchFocus) {
            return;
        }

        setText("research-focus-title", researchFocus.title);
        setText("research-focus-lead", researchFocus.lead);

        var list = document.getElementById("research-focus-list");
        if (!list) {
            return;
        }

        clearElement(list);
        (researchFocus.items || []).forEach(function (item) {
            list.appendChild(createResearchFocusItem(item));
        });
    }

    function createResearchFocusItem(item) {
        var article = document.createElement("article");
        article.className = "research-focus-item";

        article.appendChild(createItemHeader(item.title, item.role, item.duration));

        var description = createParagraph(item.description);
        description.className = "research-focus-description";
        article.appendChild(description);
        article.appendChild(createHighlights(item.highlights || []));

        article.appendChild(createInlineTags(item.tags || []));
        article.appendChild(createRelatedPapers(item.publicationIds || []));

        return article;
    }

    // 项目条目保留合作方、角色、时间和具体贡献。
    function renderProjects(projects) {
        setText("projects-title", projects.title);

        var list = document.getElementById("projects-list");
        if (!list) {
            return;
        }

        clearElement(list);
        projects.items.forEach(function (item) {
            list.appendChild(createProjectsItem(item));
        });
    }

    function createProjectsItem(item) {
        var article = document.createElement("article");
        article.className = "projects-item";

        article.appendChild(createItemHeader(item.title, item.type, item.duration));
        article.appendChild(createParagraph(item.description));
        article.appendChild(createHighlights(item.highlights || []));

        return article;
    }

    function createItemHeader(titleText, role, duration) {
        var header = document.createElement("div");
        header.className = "item-header";
        var title = document.createElement("h3");
        title.textContent = titleText;
        header.appendChild(title);

        var meta = document.createElement("div");
        meta.className = "item-meta";
        var roleText = createParagraph(role);
        roleText.className = "item-type";
        meta.appendChild(roleText);
        var time = createParagraph(duration);
        time.className = "item-duration";
        meta.appendChild(time);
        header.appendChild(meta);
        return header;
    }

    function createHighlights(highlights) {
        var list = document.createElement("ul");
        list.className = "item-highlights";
        highlights.forEach(function (text) {
            var item = document.createElement("li");
            item.textContent = text;
            list.appendChild(item);
        });
        return list;
    }

    function createRelatedPapers(ids) {
        var links = document.createElement("p");
        links.className = "related-papers";
        var copy = getPublicationContent(currentLang);
        links.appendChild(document.createTextNode(copy.relatedPapers + ": "));
        getPublications().forEach(function (publication, index) {
            if (ids.indexOf(publication.id) === -1) {
                return;
            }
            var link = document.createElement("a");
            link.href = "publications.html#paper-" + publication.id;
            link.textContent = "[" + (index + 1) + "]";
            link.title = publication.title;
            link.setAttribute("aria-label", publication.title);
            links.appendChild(link);
        });
        return links;
    }

    // 教育与工作经历：日期在普通文档流中排列，适应英文长标题。
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

            var affiliation = document.createElement("p");
            affiliation.className = "timeline-affiliation";
            affiliation.textContent = item.affiliation;
            body.appendChild(affiliation);

            if (item.duration) {
                var duration = document.createElement("p");
                duration.className = "timeline-time";
                duration.textContent = item.duration;
                body.appendChild(duration);
            }

            body.appendChild(createParagraph(item.description));
            entry.appendChild(body);
            list.appendChild(entry);
        });
    }

    // 首页展示近期代表作；论文页按研究方向分组，每篇独立标注状态。
    function renderOutputs(copy) {
        if (!copy) {
            return;
        }

        setText("outputs-title", copy.title);
        setText("outputs-link", copy.viewAll);
        setText("publications-back-link", copy.backHome);
        setText("publication-list-title", copy.listTitle);
        setText("publications-lead", copy.lead);
        setText("outputs-summary", copy.summary);
        setText("selected-title", copy.selectedTitle);
        setText("ai-title", copy.aiTitle);
        setText("kinetics-title", copy.kineticsTitle);

        renderOutputsList("ai-list", function (paper) { return paper.area === "ai"; }, copy);
        renderOutputsList("kinetics-list", function (paper) { return paper.area === "kinetics"; }, copy);
        renderOutputsList("selected-list", function (paper) {
            return ["attention-sinks", "gui-survey", "vspeedui"].indexOf(paper.id) !== -1;
        }, copy);
    }

    function renderOutputsList(listId, predicate, copy) {
        var list = document.getElementById(listId);
        if (!list) {
            return;
        }

        clearElement(list);
        var publications = getPublications();
        var filtered = publications.filter(predicate);
        var start = filtered.length ? publications.indexOf(filtered[0]) : 0;
        list.setAttribute("start", start + 1);
        list.style.setProperty("--publication-start", start);
        filtered.forEach(function (publication) {
            list.appendChild(createOutputsItem(publication, copy));
        });
    }

    function createOutputsItem(publication, copy) {
        var item = document.createElement("li");
        item.id = "paper-" + publication.id;
        var main = document.createElement("div");
        main.className = "outputs-main";

        var authors = document.createElement("p");
        authors.className = "outputs-authors";
        (publication.authors || []).forEach(function (author, index) {
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
        main.appendChild(authors);

        var title = document.createElement("p");
        title.className = "outputs-title";
        title.textContent = publication.title + ".";
        main.appendChild(title);

        var venue = document.createElement("p");
        venue.className = "outputs-venue";
        var venueName = document.createElement("em");
        venueName.textContent = publication.venue || "";
        if (publication.venue) {
            venue.appendChild(venueName);
        }

        var meta = document.createElement("span");
        meta.className = "outputs-meta";
        if (publication.detail) {
            meta.appendChild(document.createTextNode((publication.venue ? ", " : "") + publication.detail + "."));
        }
        var status = document.createElement("span");
        status.className = "publication-status status-" + publication.status;
        status.textContent = copy.statusLabels[publication.status];
        meta.appendChild(status);
        (publication.links || []).forEach(function (linkData) {
            var link = document.createElement("a");
            link.href = linkData.href;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = linkData.label;
            meta.appendChild(link);
        });
        venue.appendChild(meta);
        main.appendChild(venue);
        item.appendChild(main);

        return item;
    }

    function createInlineTags(tags) {
        var list = document.createElement("div");
        list.className = "inline-tags";

        tags.forEach(function (text) {
            var tag = document.createElement("span");
            tag.className = "inline-tag";
            tag.textContent = text;
            list.appendChild(tag);
        });

        return list;
    }


    function getPublications() {
        return Array.isArray(window.SITE_PUBLICATIONS) ? window.SITE_PUBLICATIONS : [];
    }

    // 荣誉区：年份和奖项名称由 createHonorItem 生成一张紧凑卡片。
    function renderHonors(honors) {
        setText("honors-title", honors.title);

        var list = document.getElementById("honor-list");
        if (!list) {
            return;
        }

        clearElement(list);

        honors.items.forEach(function (honor) {
            list.appendChild(createHonorItem(honor));
        });
    }

    function createHonorItem(honor) {
        var item = document.createElement("article");
        item.className = "honor-item";

        var time = document.createElement("p");
        time.className = "honor-time";
        time.textContent = honor.time;
        item.appendChild(time);

        var description = createParagraph(honor.description);
        description.className = "honor-description";
        item.appendChild(description);

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
