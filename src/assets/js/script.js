window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      console.log("clicked");
      event.preventDefault();
      document.body.classList.add("sb-sidenav-toggled");
      sidebarToggle.style.display = "none";
      sidebarToggleClose.style.display = "block";
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }

  const sidebarToggleClose = document.body.querySelector("#sidebarToggleClose");
  sidebarToggleClose.addEventListener("click", (event) => {
    console.log("clicked");
    event.preventDefault();
    document.body.classList.remove("sb-sidenav-toggled");
    sidebarToggleClose.style.display = "none";
    sidebarToggle.style.display = "block";
  });
});
