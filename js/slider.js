let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");

let projectsTitle = document.querySelector("#projectsTitle");
let projectsText = document.querySelector("#projectsText");
let projectsToolsAndLinks = document.querySelector("#projectsToolsAndLinks");

let toolsTitle = document.querySelector("#toolsTitle");
let linksTitle = document.querySelector("#linksTitle");

let toolsBody = document.querySelector("#toolsBody");
let linksImg = document.querySelector("#linksImg");

let toolsTitle1 = document.querySelector("#toolsTitle1");
let toolsTitle2 = document.querySelector("#toolsTitle2");
let toolsTitle3 = document.querySelector("#toolsTitle3");
let toolsTitle4 = document.querySelector("#toolsTitle4");

let toolsImg1 = document.querySelector("#toolsImg1");
let toolsImg2 = document.querySelector("#toolsImg2");
let toolsImg3 = document.querySelector("#toolsImg3");
let toolsImg4 = document.querySelector("#toolsImg4");
let toolsImg5 = document.querySelector("#toolsImg5");
let toolsImg6 = document.querySelector("#toolsImg6");

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

    toolsImg1.src = '/img/projects/slider/akar-icons_html-fill.png';
    toolsImg2.src = '/img/projects/slider/akar-icons_python-fill.png';
    toolsImg3.src = '/img/projects/slider/akar-icons_css-fill.png';
    toolsImg4.src = '/img/projects/slider/akar-icons_javascript-fill.png';
});

r2.addEventListener('click', () => {
    projectsTitle.innerHTML = 
    `<p>Caffe <span>Origami</span></p>`;

    projectsText.innerHTML = 
    `Start your day with aromatic coffee and a delicious dessert at - <a href="" target="_blank"><span>Caffe Origami</span></a>. <br>
    Site of a coffee house in Pervouralsk, <br>
    Is a fairly simple but modern design, <br>
    designed by my friend <a href="https://vk.com/uxuiuliss" target="_blank"><span>"Uliss"</span></a>, <br>
    The site looks very exciting and attractive. `;

    toolsTitle2.textContent = 'React';
    
    toolsImg1.src = '/img/projects/slider/akar-icons_html-fill.png';
    toolsImg2.src = '/img/projects/slider/akar-icons_react-fill.png';
    toolsImg3.src = '/img/projects/slider/akar-icons_css-fill.png';
    toolsImg4.src = '/img/projects/slider/akar-icons_javascript-fill.png';
});

r3.addEventListener('click', () =>{
    projectsTitle.innerHTML = "My <span>GitHub</span> Profile."

    projectsText.innerHTML = 
    `<p>A complete base and newsletter of all developments - <a href="https://github.com/AidenOrtiz" target="_blank"><span>ORTIZ DEVELOP GitHub</span></a>. <br> 
    A rapidly growing profile since July 2022, actively updated with all new additions, projects and repositories, many of them, <br> 
     in the public domain. The profile contains basic tools and links, as well as links to various social media.</p>`;

    toolsTitle2.textContent = 'Python/Django';

    toolsImg1.src = '/img/projects/slider/akar-icons_html-fill.png';
    toolsImg2.src = '/img/projects/slider/akar-icons_python-fill.png';
    toolsImg3.src = '/img/projects/slider/akar-icons_css-fill.png';
    toolsImg4.src = '/img/projects/slider/akar-icons_javascript-fill.png';
});