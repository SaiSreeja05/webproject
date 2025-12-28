function toggleMenu(menuId) {
  const menus = document.querySelectorAll(".dropdown");

  menus.forEach(menu => {
    if (menu.id === menuId) {
      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    } else {
      menu.style.display = "none";
    }
  });
}


document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("nav-item")) {
    document.querySelectorAll(".dropdown").forEach(menu => {
      menu.style.display = "none";
    });
  }
});
