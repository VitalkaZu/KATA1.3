var swiper = Swiper;
var init = false;
function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");
    let swiperList = document.querySelector("#brands-list");
    if (mobile.matches) {
        if (!init) {
            init = true;
            swiperList.classList.remove("swiper-list");
            swiper = new Swiper(".swiper-container", {

                slidesPerView: "auto",

                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else {
        swiperList.classList.add("swiper-list");
        swiper.destroy();
        init = false;
    }
}

window.addEventListener("load", function () {
    swiperMode();
});

window.addEventListener("resize", function () {
    swiperMode();
});