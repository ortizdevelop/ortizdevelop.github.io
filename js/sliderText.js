let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");

let projectsTitle = document.querySelector("#projectsTitle");
let projectsText = document.querySelector("#projectsText");

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
});

r2.addEventListener('click', () => {
    projectsTitle.innerHTML = 
    `<p>
    <span>Origami</span> Caffe
    </p>
    `;
    projectsText.innerHTML = 
    `<p>It's a fucking caffe, what do u want?</p>`;
});