// بسم الله الرحمن الرحيم 


// for full nav screen
let toggle = document.querySelector("nav div")
let navigation = document.querySelector(".layout")
let close =document.querySelector(".layout span")
// for type write effects
let h3 = document.querySelector(".layout h3")



toggle.onclick = function() {
    navigation.classList.add("open")
    h3.style.cssText = " animation: control-width 3s steps(25) 2s both , blenk 0.5s infinite;"
}

close.onclick = function() {
    navigation.classList.remove("open")
    h3.style.removeProperty("animation")
}
document.onkeyup = function(ele) {
    if (ele.key === "Escape") {
        navigation.classList.remove("open")
        h3.style.removeProperty("animation")
    }
}