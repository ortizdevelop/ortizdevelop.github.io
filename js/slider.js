let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");

let projectsTitle = document.querySelector("#projectsTitle");
let projectsText = document.querySelector("#projectsText");
let projectsToolsAndLinks = document.querySelector("#projectsToolsAndLinks");

let toolsTitle = document.querySelector("#toolsTitle");
let linksTitle = document.querySelector("#linksTitle");

let toolsImg = document.querySelector("#toolsImg");
let linksImg = document.querySelector("#linksImg");

let toolsImg1 = document.querySelector("#toolsImg1");
let toolsImg2 = document.querySelector("#toolsImg2");
let toolsImg3 = document.querySelector("#toolsImg3");
let toolsImg4 = document.querySelector("#toolsImg4");

let linksText1 = document.querySelector("#linksText1");
let linksText2 = document.querySelector("#linksText2");

let linksImg1 = document.querySelector("#linksImg1");
let linksImg2 = document.querySelector("#linksImg2");


r1.addEventListener('click', () => {
    projectsTitle.innerHTML = 
    `<p>E-<span>Wallet</span>.</p>`;

    projectsText.innerHTML = 
    `<p>
    Advanced mobile banking - <a href=""><span>E-Wallet</span></a>. <br> 
    Created using JavaScript and React <br> 
    framework, support of different <br> 
    languages, possibility to pay everything <br>
    in one application. <br>
    </p>`;

    toolsImg1.innerHTML =
    img.src = '/img/projects/slider/akar-icons_html-fill.png';

    toolsImg2.innerHTML =
    img.src = '/img/projects/slider/akar-icons_react-fill.png';

    toolsImg3.innerHTML =
    img.src = '/img/projects/slider/akar-icons_css-fill.png';

    toolsImg4.innerHTML =
    img.src = '/img/projects/slider/akar-icons_javascript-fill.png';

});

r2.addEventListener('click', () => {
    projectsTitle.innerHTML = 
    `<p><span>Origami</span> Caffe</p>`;

    projectsText.innerHTML = 
    `<p>It's a fucking caffe, what do u want?</p>`;
});