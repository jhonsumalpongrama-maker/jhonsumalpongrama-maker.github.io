// Navbar dropdown - JavaScript DOM Activity
const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");

if (dropdownButton && dropdownMenu) {
  const dropdown = dropdownButton.closest(".dropdown");
  const dropdownArrow = dropdownButton.querySelector(".dropdown-arrow");

  function closeDropdown() {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");

    if (dropdownArrow) {
      dropdownArrow.textContent = "▼";
    }
  }

  dropdownButton.addEventListener("click", function (event) {
    event.stopPropagation();

    const isOpen = dropdownMenu.classList.toggle("show");
    dropdownButton.setAttribute("aria-expanded", String(isOpen));

    if (dropdownArrow) {
      dropdownArrow.textContent = isOpen ? "▲" : "▼";
    }
  });

  // Bonus: close the dropdown when the user clicks outside it.
  document.addEventListener("click", function (event) {
    if (dropdown && !dropdown.contains(event.target)) {
      closeDropdown();
    }
  });

  // Close after choosing an item and allow Escape-key dismissal.
  dropdownMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeDropdown);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDropdown();
      dropdownButton.focus();
    }
  });
}
