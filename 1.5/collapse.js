let button = document.querySelector(".button");
let buttonText = button.querySelector(".button__text");
let collapseArea = document.querySelector(".swiper-list");

button.addEventListener("click",function () {
    if (buttonText.textContent == "Показать все") {
        // collapseArea.classList.add("brands-list--open")
        collapseArea.style.maxHeight = collapseArea.scrollHeight +  "px";
        // collapseArea.setAttribute("style","max-height:400px");
        buttonText.textContent = "Скрыть";
        button.classList.add("button--reverse");
    } else {
        // collapseArea.classList.remove("brands-list--open")
        collapseArea.removeAttribute("style");
        button.classList.remove("button--reverse");
        buttonText.textContent = "Показать все";
    }
});