const links = Array.from(document.getElementsByClassName("nav-link"));

// const highlight = (el) => {
//   console.log(el);
// };

links.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("selected");
  });
});
