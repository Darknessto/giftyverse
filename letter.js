const envFront = document.querySelector(".main-cont");
const envFrontImg = document.querySelector(".wishes");
const envBack = document.querySelector(".env-cont");
const cover = document.querySelector(".cover");
const letterThumb = document.querySelector(".letter-thumb");
const letterCont = document.querySelector(".letter-cont");

let flipCount = -1;

envFront.addEventListener("click", () => {
    // Basic Letter Flip
    flipCount ++;
    if (flipCount > 0) {
        return;
    }
    const flip = [
        {transform: "rotate3d(0, 1, 0, 0deg)"},
        {transform: "rotate3d(0, 1, 0, 180deg)"},
    ];
    const flipTiming = {
        duration: 3000,
        iterations: 1,
      };
    envFront.animate(flip, flipTiming);
    setTimeout(()=>{
        envFrontImg.style.display = "none";
        envBack.style.visibility = "visible";
    }, 1450);


    // Open Envelope
    setTimeout(() => {
        cover.classList.add("cover-animate");
        // Take out letter
        setTimeout(() => {
            cover.style.zIndex = "0";
            letterThumb.classList.add("letter-thumb-animate");
        }, 3000)
    }, 3000)
})

letterThumb.addEventListener("click", () => {
    envFront.style.display = "none";
    letterCont.style.display = "block";
});