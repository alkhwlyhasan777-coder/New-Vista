const spanIcon = document.querySelector(".icon")
const header = document.querySelector(".navber");


                            ///////////////////////////////////////////////////////
const section = document.createElement("div");
    section.classList.add("nav-hidd")
const span = document.createElement("span");
    span.textContent = "الاقسام";
const img = document.createElement("img");
    img.src = "../image-home/img/app.png";
    img.alt = "icon";
img.classList.add("image");
section.append(span, img)
header.append(section)
const nav = document.createElement("nav")
    nav.classList.add("nav-rigth")
    
const ulNavber = `
    <ul>
        <li><a href="./index.html">الصفحه الرئيسيه</a></li>
        <br>
        <li><a href="./الخدمات/government.html">خدمات حكوميه</a></li> 
        <li><a href="./الخدمات/travel-permit.html">جواز سفر</a></li>
        <li><a href="./الخدمات/visas.html">تاشيرات</a></li>
        <li><a href="./الخدمات/hotel.html">حجز فنادق</a></li>
        <li><a href="./الخدمات/flight.html">حجز طيران</a></li>
        <li><a href="./الخدمات/tasahel.html">حجز موعد تسهيل</a></li>
        <hr>
        <li><a href="./about.html">من نحن</a></li>
        <li><a href="./content.html">تواصل معنا</a></li>
    </ul>
`;
if (window.location.pathname === "/index.html" ) {
    const ulNavber = `
    <ul>
        <li><a href="../index.html">الصفحه الرئيسيه</a></li>
        <br>
        <li><a href="./الخدمات/government.html">خدمات حكوميه</a></li> 
        <li><a href="./الخدمات/travel-permit.html">جواز سفر</a></li>
        <li><a href="./الخدمات/visas.html">تاشيرات</a></li>
        <li><a href="./الخدمات/hotel.html">حجز فنادق</a></li>
        <li><a href="./الخدمات/flight.html">حجز طيران</a></li>
        <li><a href="./الخدمات/tasahel.html">حجز موعد تسهيل</a></li>
        <hr>
        <li><a href="../about.html">من نحن</a></li>
        <li><a href="../content.html">تواصل معنا</a></li>
    </ul>
`;
nav.insertAdjacentHTML("beforeend", ulNavber);

header.append(nav);
} else {
    const ulNavber = `
    <ul>
        <li><a href="../index.html">الصفحه الرئيسيه</a></li>
        <br>
        <li><a href="../الخدمات/government.html">خدمات حكوميه</a></li> 
        <li><a href="../الخدمات/travel-permit.html">جواز سفر</a></li>
        <li><a href="../الخدمات/visas.html">تاشيرات</a></li>
        <li><a href="../الخدمات/hotel.html">حجز فنادق</a></li>
        <li><a href="../الخدمات/flight.html">حجز طيران</a></li>
        <li><a href="../الخدمات/tasahel.html">حجز موعد تسهيل</a></li>
        <hr>
        <li><a href="../about.html">من نحن</a></li>
        <li><a href="../content.html">تواصل معنا</a></li>
    </ul>
`;
nav.insertAdjacentHTML("beforeend", ulNavber);

header.append(nav);
}

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
