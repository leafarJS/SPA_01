"use strict";
const d = document;
const w = window;

w.addEventListener("scroll", () => {
  const _header = d.querySelector("header");
  _header.classList.toggle("sticky", w.scrollY > 0);
});

d.addEventListener("click", (e) => {
  const _menuToogle = d.querySelector(".menuToggle");
  const _navigation = d.querySelector(".navigation");
  if (e.target.matches(".menuToggle")) {
    _menuToogle.classList.toggle("active");
    _navigation.classList.toggle("active");
  }
});
