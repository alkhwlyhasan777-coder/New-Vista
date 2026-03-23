const spanIcon = document.querySelector(".icon")
const header = document.querySelector(".navber");


                            ///////////////////////////////////////////////////////
const section = document.createElement("div");
    section.classList.add("nav-hidd")
const span = document.createElement("span");
    span.textContent = "الاقسام";
const img = document.createElement("img");
if (
    window.location.pathname === "/" ||
    window.location.pathname.includes("index.html") ||
    window.location.pathname.includes("content.html") ||
    window.location.pathname.includes("about.html")
) {
    img.src = "./image-home/img/app.png";
} else {
    img.src = "../image-home/img/app.png";
}
    img.alt = "icon";
    img.classList.add("image");

section.prepend(span, img)
header.prepend(section)
////////////////////////////////////////
////////////////////////////////////////
spanIcon.addEventListener("click", function (e) {
    e.stopPropagation();  
    header.style.display = "block";
});
header.addEventListener("click", function (e) {
    e.stopPropagation();   
});
document.addEventListener("click", function () {
    header.style.display = "none";
});
//////////////////////////////////////////
let services = document.querySelector(".services")
let dropdwen = document.querySelector(".dropdwen")
services.addEventListener("click", function (e) {
    e.stopPropagation();  
    dropdwen.style.display = "block";
});
header.addEventListener("click", function (e) {
    e.stopPropagation();   
});
document.addEventListener("click", function () {
    dropdwen.style.display = "none";
});
/////////////////////////////////////
                    //////////////// Slider////////////////////////
const slider = document.querySelector(".content-bar");
const itemWidth = slider.querySelector(".serv").offsetWidth + 15;
let autoScroll;
slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
function startAutoScroll() {
    autoScroll = setInterval(() => {
        slider.scrollBy({
            left: -itemWidth,
            behavior: "smooth"
        });
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        }
    }, 3000);
}
startAutoScroll();
//////////////////////////////////////////////////////
