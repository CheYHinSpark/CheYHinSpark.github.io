//创建一个link来引入控制语言的css  
function languageLink (type) {
    var link = document.createElement('link');
    link.id = "lang";
    link.rel = "stylesheet";
    link.href = "css/" + type + ".css";
    link.langType = type;
    return link;
}  

//根据语言类型切换  
function changeLang(lang){
    if (lang != "zh" && lang != "en") { lang = "en"; }
    var link = document.getElementById('lang');
    if (link) {
        if (link.langType == lang) { return; }
        link.parentNode.removeChild(link);
    }
    var head = document.getElementsByTagName('head');
    head[0].appendChild(languageLink(lang));
}

//文档加载到这里时加载默认语言  
+function () {
    changeLang(navigator.language.substring(0, 2));
}();

//toggle 两种语言切换
function onClickChangeLang (){
    var link = document.getElementById('lang');
    if (link.langType == "en") { changeLang("zh"); }
    else { changeLang("en"); }
}
