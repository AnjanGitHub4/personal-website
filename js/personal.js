let nav = document.querySelector("#nav");
let header = document.querySelector("#header");
let icon = document.querySelector('#icon');
var section = document.querySelector("section");
let btn = document.querySelector('#btn');

btn.addEventListener('click', ()=> {
  nav.classList.toggle('nav');
  header.classList.toggle('header-height');
})

/*******{{dark-theme}} *********/
icon.onclick = ()=> {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.className = "fas fa-sun";
    document.body.style.background = "#000"
  } else {
    icon.className = "fas fa-moon";
    document.body.style.background = "#eee"
  }
}