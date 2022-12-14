/* A function that calculates the scroll value and displays it in the progress bar. */
calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/ calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display="grid";
    } else{
        scrollProgress.style.display="none";
    }

    scrollProgress.addEventListener('click', () =>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#EE6C4D ${scrollValue}%, #C4C4C4 ${scrollValue}%`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

