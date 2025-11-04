//文档加载到这里时加载默认语言  
+function () {
    changeLang(navigator.language.substring(0, 2));
    document.getElementById('div-lang').langType = navigator.language.substring(0, 2);
}();

//toggle 两种语言切换
function onClickChangeLang (){
    var link = document.getElementById('div-lang');
    if (link.langType == "en") { changeLang("zh"); }
    else { changeLang("en"); }
}

function changeLang(lang){
    document.getElementById('div-lang').langType = lang;
    if (lang == "en") {
        document.getElementById("div-lang").textContent = "En ⇄ 汉";
        document.getElementById("div-HOME").textContent = "Home";
        document.getElementById("div-CV").textContent = "CV";
        document.getElementById("div-PUBLICATION").textContent = "Publications";
        
        document.getElementById("h1-NAME").textContent = "Yihong Chen, 陈奕宏";
        document.getElementById("p-affiliation").textContent = "Department of Electronic Engineering, Tsinghua University";
        document.getElementById("p-address-1").textContent = "11-309 Room, Rohm Building, Tsinghua University";
        document.getElementById("p-address-2").textContent = "Haidian District, Beijing, China, 10084";
        document.getElementById("p-email").textContent = "Email: chenyiho20@mails.tsinghua.edu.cn / chenyihong0907@foxmail.com";
        
        document.getElementById("h1-self_intro").textContent = "Introduction";
        document.getElementById("p-self_intro").textContent = "I am a post-doc at the Department of Electronic Engineering in Tsinghua Unniversity. I got my BS and PhD at the Department of Mathematical Sciences. My PhD research focused on model reduction and numerical computation of kinetic equations. My PhD work includes: (1) proposed a discrete-velocity-direction model to systematically extend methods for 1-D kinetic equations to higher dimensions; (2) developed a new extended quadrature method of moments based on Poisson kernel. \n Now I am interested in LLM and agent techniques as well as their applications. ";
        
        document.getElementById("h1-publication_list").textContent = "Publications";
    }
    if (lang == "zh") {
        document.getElementById("div-lang").textContent = "汉 ⇄ En";
        document.getElementById("div-HOME").textContent = "主页";
        document.getElementById("div-CV").textContent = "简历";
        document.getElementById("div-PUBLICATION").textContent = "发表";
        
        document.getElementById("h1-NAME").textContent = "陈奕宏，Yihong Chen";
        document.getElementById("p-affiliation").textContent = "清华大学电子工程系 博士后";
        document.getElementById("p-address-1").textContent = "中国，北京市，海淀区，10084";
        document.getElementById("p-address-2").textContent = "清华大学罗姆楼11-309";
        document.getElementById("p-email").textContent = "邮箱：chenyiho20@mails.tsinghua.edu.cn / chenyihong0907@foxmail.com";
        
        document.getElementById("h1-self_intro").textContent = "自我介绍";
        document.getElementById("p-self_intro").textContent = "我是清华大学电子工程系的博士后。我的本科和博士均就读于清华大学数学科学系，在博士期间，我的研究方向是动理学方程的模型约化与数值求解。我的博士工作包括：（1）提出了一种离散速度方向模型从而可以系统地将求解一维动理学方程的方法推广到高维；（2）提出了一种全新的基于Poisson核的扩展积分矩方法。\n现在我将视角转向人工智能领域，研究大语言模型与智能体的技术和应用。";
        
        document.getElementById("h1-publication_list").textContent = "发表清单";
    }
}
