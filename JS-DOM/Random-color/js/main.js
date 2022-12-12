// const unguUurchlugd = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
//   }
//   genNew.addEventListener("click", unguUurchlugd);
// unguUurchlugd();

const changeColor = () => {
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

btnColor.addEventListener("click" , changeColor);
changeColor();