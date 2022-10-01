const text = document.querySelector(".second-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Nikita";
    }, 0);

    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);

    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);