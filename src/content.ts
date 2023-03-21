document.addEventListener("click", (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  const details = target.closest(".details-reset");
  if (details) {
    const menu = details.querySelector(".dropdown-menu");
    if (menu) {
      const menuItem = menu?.querySelector("#js-add-annotation") as HTMLElement;
      if (!menuItem) {
        const menuItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.classList.add("dropdown-item");
        link.id = "js-add-annotation";
        link.textContent = "Add annotation";
        menuItem.appendChild(link);
        menu.appendChild(menuItem);
      }
    }
  }
});
