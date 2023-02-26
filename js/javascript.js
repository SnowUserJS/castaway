// Burger Menu

(function() {
  const burgerActiv = document.querySelector(".burger");
  const menu = document.querySelector(".nav_header");
  const burgerClose = document.querySelector(".header_nav_close");

  burgerActiv.addEventListener('click', () => {
    menu.classList.add("nav_header_activ");
  });

  burgerClose.addEventListener('click', () => {
    menu.classList.remove("nav_header_activ");
  })

})();