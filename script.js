let logo = document.querySelectorAll(".logo");

window.onscroll = function() {miniNav()};

function miniNav(){
    for (let i = 0, len = logo.length; i < len; i++) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            logo[i].classList.remove("logo-big");
            logo[i].classList.add("logo-small");
            console.log(logo);
        }
        else{
            logo[i].classList.remove("logo-small");
            logo[i].classList.add("logo-big");
            }
    }
}

menu.onclick = function() {responsiveNav};

function responsiveNav(){
    let nav = document.getElementById("menuBurger");

    if (nav.className === "icone"){
        nav.className += "responsiveNav";
    }

    else{
        nav.className === "icone";
    }
}