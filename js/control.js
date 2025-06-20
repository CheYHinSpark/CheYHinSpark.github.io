//点开CV
function onClickCV (){
    var link = document.getElementById('lang');
    if (link.langType == "zh") { window.open("cv/cv_zh.pdf"); }
    else { window.open("cv/cv_en.pdf"); }
}