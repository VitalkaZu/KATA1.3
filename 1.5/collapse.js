const button = document.querySelector(".button");
const buttonText = button.querySelector(".button__text");
const collapseArea = document.querySelector(".swiper-list");

button.addEventListener("click",function () {
    if (buttonText.textContent == "Показать все") {
        collapseArea.style.maxHeight = collapseArea.scrollHeight +  "px";
        buttonText.textContent = "Скрыть";
        button.classList.add("button--reverse");
    } else {
        collapseArea.removeAttribute("style");
        button.classList.remove("button--reverse");
        buttonText.textContent = "Показать все";
    }
});