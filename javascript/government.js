let submit = document.querySelector(".btn-submit");
let success = document.querySelector(".success");
let body = document.querySelector("body");

function check() {

    let name = document.querySelector(".name");
    console.log("dtrt"+name)
    let phone = document.querySelector(".phone");
    let addres = document.querySelector(".addre");
    let servic = document.querySelector("#services");
    let leav = document.querySelector(".leav");
    let arriv = document.querySelector(".arriv");

    if (
        name.value === '' ||
        phone.value === '' ||
        addres.value === '' ||
        servic.value === '' 
        // leav.value === '' ||
        // arriv.value === ''
    ) {
        alert("Please fill all fields");
    } else {
        success.style.display = "block";
        let data = {
            name: name.value,
            phone: phone.value,
            address: addres.value,
            service: servic.value,
        };
        localStorage.setItem("saveData", JSON.stringify(data));
        success.style.display = "block";
        body.style.opacity = ".9";
        let confirmBtn = document.querySelector(".confirmss");
        confirmBtn.addEventListener("click", () => {
            success.style.display = "none";
            body.style.opacity = "1";
            name.value = "";
            phone.value = "";
            addres.value = "";
            servic.value = "";
        });
    }
}

submit.addEventListener("click", check);
////////////////////////////////////
let internal = document.querySelector(".tourist-areas .ternal")//The most famous internal flights
let externall = document.querySelector(".active")///The most famous external trips
let internalLocal = document.querySelector(".local ")
let internalGlobal = document.querySelector(".global ")
externall.addEventListener("click", () => {
    externall.classList.add("active")
    internal.classList.remove("active")
    internalLocal.style.display=  'block'
    internalGlobal.style.display='none' 

})
internal.addEventListener("click", () => {
    internal.classList.add("active")
    externall.classList.remove("active")
    internalLocal.style.display= 'none'
    internalGlobal.style.display= 'block'
})