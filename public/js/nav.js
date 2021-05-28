"use strict";

const menuBtn = document.querySelector(".menu-button");
const closeBtn = document.querySelector(".close-button");
const nav = document.querySelector("nav");

const showMenu = () => {
  document.body.classList.add("nav-is-open");
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
};

const hideMenu = () => {
  document.body.classList.remove("nav-is-open");
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
};

const closeMenu = () => {
  hideMenu();
};

const navigation = () => {
  hideMenu();
};

menuBtn.addEventListener("click", showMenu);

closeBtn.addEventListener("click", closeMenu);

nav.addEventListener("click", navigation);
