const links = Array.from(document.getElementsByClassName("nav-link"));

links.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("selected");
  });
});
