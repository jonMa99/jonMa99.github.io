function slideMenuIn() {
  const burgerMenu = document.querySelector("#hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const headerTitle = document.querySelector("header h1");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("nav-links-active");
    headerTitle.style.zIndex = "3";

    changeMenuIcon();
  });
}

function changeMenuIcon() {
  const burgerMenu = document.querySelector("#hamburger-menu");
  burgerMenu.classList.toggle("hamburger-menu-active");
}

function slideMenuOut() {
  const navLinks = document.querySelector(".nav-links");
  const headerTitle = document.querySelector("header h1");

  navLinks.querySelectorAll("li").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.toggle("nav-links-active");
      headerTitle.style.zIndex = "2";

      changeMenuIcon();
    });
  });
}

function slideMenu() {
  slideMenuIn();
  slideMenuOut();
}

slideMenu();
