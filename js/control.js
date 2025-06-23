//点开CV
function onClickCV (){
    var link = document.getElementById('div-lang');
    if (link.langType == "zh") { window.open("cv/CV_zh.pdf"); }
    else { window.open("cv/CV_en.pdf"); }
}