const DROPDOWN_ONCLICK_CLASS = ".details-reset";
const DROPDOWN_MENU_CLASS = ".dropdown-menu";
const DROPDOWN_ITEM_CLASS = "dropdown-item";
const ADD_ANNOTATION_ID = "js-add-annotation";

function handleOcticonClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  const details = target.closest(DROPDOWN_ONCLICK_CLASS);

  if (!details) {
    return;
  }

  const menu = details.querySelector(DROPDOWN_MENU_CLASS);

  if (!menu) {
    return;
  }

  const menuItem = menu.querySelector(`#${ADD_ANNOTATION_ID}`) as HTMLElement;

  if (!menuItem) {
    const newMenuItem = createAddAnnotationMenuItem();
    menu.appendChild(newMenuItem);
  }
}

function createAddAnnotationMenuItem(): HTMLElement {
  const menuItem = document.createElement("li");
  const link = document.createElement("a");

  link.href = "#";
  link.classList.add(DROPDOWN_ITEM_CLASS);
  link.id = ADD_ANNOTATION_ID;
  link.textContent = "Add annotation";

  menuItem.appendChild(link);

  return menuItem;
}

document.addEventListener("click", handleOcticonClick);
