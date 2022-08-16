let button = document.querySelector(".button");
let buttonText = button.querySelector(".button__text");
let collapseArea = document.querySelector(".brands");

button.addEventListener("click",function () {
    if (buttonText.textContent == "Показать все") {
        collapseArea.setAttribute("style","max-height:400px");
        buttonText.textContent = "Скрыть";
        button.classList.add("button--reverse");
    } else {
        collapseArea.removeAttribute("style");
        button.classList.remove("button--reverse");
        buttonText.textContent = "Показать все";
    }
});