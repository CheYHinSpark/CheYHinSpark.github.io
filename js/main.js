(function () {
    "use strict";

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
            // Local files can disable storage in some browsers.
        }
    }

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
                if (content.hero.cvHref) {
                    window.open(content.hero.cvHref, "_blank", "noopener");
                }
            });
        }
    }

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
        renderSummary(content.summary);
        renderExperience(content.experience);
        renderWork(content.work);
        renderPublications(content.publications);
        renderHonors(content.honors);
        renderContact(content.contact);
        setText("footer-text", content.footer);
    }

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

    function renderHero(content) {
        var hero = content.hero;
        setText("profile-name", hero.name);
        setText("hero-lead", hero.lead);
        renderTagList("hero-tags", hero.tags);
    }

    function renderProfile(profile) {
        setText("profile-role", profile.role);

        var photo = document.getElementById("profile-photo");
        if (photo) {
            photo.setAttribute("alt", profile.alt);
        }

        var list = document.getElementById("profile-lines");
        if (!list) {
            return;
        }

        clearElement(list);
        profile.lines.forEach(function (line) {
            var item = document.createElement("li");
            item.textContent = line;
            list.appendChild(item);
        });
    }

    function renderSummary(summary) {
        setText("summary-kicker", summary.kicker);
        setText("summary-title", summary.title);
        setText("target-title", summary.targetTitle);

        var copy = document.getElementById("summary-copy");
        if (copy) {
            clearElement(copy);
            summary.paragraphs.forEach(function (paragraph) {
                copy.appendChild(createParagraph(paragraph));
            });
        }

        renderSimpleList("target-list", summary.targetRoles);
    }

    function renderWork(work) {
        setText("work-kicker", work.kicker);
        setText("work-title", work.title);

        var list = document.getElementById("work-list");
        if (!list) {
            return;
        }

        clearElement(list);
        work.items.forEach(function (item) {
            list.appendChild(createWorkItem(item));
        });
    }

    function createWorkItem(item) {
        var article = document.createElement("article");
        article.className = "work-item";

        var header = document.createElement("div");
        header.className = "work-item-header";

        var titleGroup = document.createElement("div");
        var title = document.createElement("h3");
        title.textContent = item.title;
        titleGroup.appendChild(title);

        var type = document.createElement("p");
        type.className = "item-type";
        type.textContent = item.type;
        titleGroup.appendChild(type);
        header.appendChild(titleGroup);

        if (item.href) {
            var link = document.createElement("a");
            link.className = "compact-link";
            link.href = item.href;
            link.target = "_blank";
            link.rel = "noopener";
            link.textContent = item.hrefLabel || "Link";
            header.appendChild(link);
        }

        article.appendChild(header);
        article.appendChild(createParagraph(item.description));

        var points = document.createElement("ul");
        points.className = "clean-list";
        item.points.forEach(function (point) {
            var pointItem = document.createElement("li");
            pointItem.textContent = point;
            points.appendChild(pointItem);
        });
        article.appendChild(points);

        return article;
    }

    function renderExperience(experience) {
        setText("experience-kicker", experience.kicker);
        setText("experience-title", experience.title);

        var list = document.getElementById("experience-list");
        if (!list) {
            return;
        }

        clearElement(list);
        experience.items.forEach(function (item) {
            var entry = document.createElement("article");
            entry.className = "timeline-item";

            var marker = document.createElement("div");
            marker.className = "timeline-marker " + item.position;
            entry.appendChild(marker);

            var body = document.createElement("div");
            body.className = "timeline-body";

            var title = document.createElement("h3");
            title.textContent = item.title;
            body.appendChild(title);

            var meta = document.createElement("p");
            meta.className = "item-type";
            meta.textContent = item.meta;
            body.appendChild(meta);

            var duration = document.createElement("p");
            duration.className = "top-right";
            duration.textContent = item.duration;
            body.appendChild(duration)

            body.appendChild(createParagraph(item.description));
            entry.appendChild(body);
            list.appendChild(entry);
        });
    }

    function renderPublications(copy) {
        setText("publications-kicker", copy.kicker);
        setText("publications-title", copy.title);
        setText("publications-note", copy.note);
        setText("published-title", copy.publishedTitle);
        setText("preprint-title", copy.preprintTitle);

        renderPublicationList("published-list", "published");
        renderPublicationList("preprint-list", "preprint");
    }

    function renderPublicationList(listId, status) {
        var list = document.getElementById(listId);
        if (!list) {
            return;
        }

        clearElement(list);

        window.SITE_PUBLICATIONS
            .filter(function (publication) {
                return publication.status === status;
            })
            .forEach(function (publication) {
                list.appendChild(createPublicationItem(publication));
            });
    }

    function createPublicationItem(publication) {
        var item = document.createElement("li");

        var main = document.createElement("div");
        main.className = "publication-main";

        var authors = document.createElement("p");
        authors.className = "publication-authors";
        publication.authors.forEach(function (author, index) {
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
        title.className = "publication-title";
        title.textContent = publication.title + ".";

        var venue = document.createElement("p");
        venue.className = "publication-venue";
        var venueName = document.createElement("em");
        venueName.textContent = publication.venue;
        venue.appendChild(venueName);
        venue.appendChild(document.createTextNode(", " + publication.detail + "."));

        main.appendChild(authors);
        main.appendChild(title);
        main.appendChild(venue);
        item.appendChild(main);

        var links = document.createElement("div");
        links.className = "publication-links";
        publication.links.forEach(function (linkData) {
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

    function renderHonors(honors) {
        setText("honors-kicker", honors.kicker);
        setText("honors-title", honors.title);
        setText("honors-note", honors.note);

        var list = document.getElementById("honor-list");
        if (!list) {
            return;
        }

        clearElement(list);

        if (!honors.items.length) {
            var empty = document.createElement("p");
            empty.className = "empty-state";
            empty.textContent = honors.emptyText;
            list.appendChild(empty);
            return;
        }

        honors.items.forEach(function (honor) {
            list.appendChild(createHonorItem(honor));
        });
    }

    function createHonorItem(honor) {
        var item = document.createElement("article");
        item.className = "honor-item";

        var title = document.createElement("h3");
        title.textContent = honor.title;
        item.appendChild(title);

        if (honor.meta) {
            var meta = document.createElement("p");
            meta.className = "item-type";
            meta.textContent = honor.meta;
            item.appendChild(meta);
        }

        if (honor.description) {
            item.appendChild(createParagraph(honor.description));
        }

        return item;
    }

    function renderContact(contact) {
        setText("contact-kicker", contact.kicker);
        setText("contact-title", contact.title);

        var copy = document.getElementById("contact-copy");
        if (copy) {
            clearElement(copy);
            contact.paragraphs.forEach(function (paragraph) {
                copy.appendChild(createParagraph(paragraph));
            });
        }

        var links = document.getElementById("contact-links");
        if (!links) {
            return;
        }

        clearElement(links);
        contact.links.forEach(function (linkData) {
            var link = document.createElement("a");
            link.className = "action-link";
            link.href = linkData.href;
            link.textContent = linkData.label;

            if (!linkData.href.startsWith("mailto:")) {
                link.target = "_blank";
                link.rel = "noopener";
            }

            links.appendChild(link);
        });
    }

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

    function renderSimpleList(elementId, items) {
        var list = document.getElementById(elementId);
        if (!list) {
            return;
        }

        clearElement(list);
        items.forEach(function (text) {
            var item = document.createElement("li");
            item.textContent = text;
            list.appendChild(item);
        });
    }

    function createParagraph(text) {
        var paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }

    function setText(elementId, text) {
        var element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
        }
    }

    function clearElement(element) {
        if (!element) {
            return;
        }

        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
})();
