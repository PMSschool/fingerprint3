let menu = document.querySelector(".menu-icon");
let navBar = document.querySelector(".header .links nav");
let liMain1 = document.querySelector(".man");
let liMain2 = document.querySelector(".woman");
let ulInMan = document.querySelector(".man ul");
let ulInWoman = document.querySelector(".woman ul");
let myBody = document.querySelector(".body")

menu.onclick = () =>{
  menu.classList.toggle("close-icon");
  navBar.classList.toggle("open");
}

liMain1.onclick= () =>{
  ulInMan.classList.toggle("open");
}

liMain2.onclick= () =>{
  ulInWoman.classList.toggle("open");
}
