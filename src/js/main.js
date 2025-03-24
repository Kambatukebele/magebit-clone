const toggleMenuOnSmallDevice = () => {
  const hamburgerMenu = document.querySelector("#hamburger_menu");
  const closeMenu = document.querySelector("#close_menu");
  const navigation = document.querySelector("#navigation");

  const handleToggleMenu = () => {
    if (hamburgerMenu.classList.contains("block")) {
      hamburgerMenu.classList.remove("block");
      hamburgerMenu.classList.add("hidden");
      closeMenu.classList.remove("hidden");
      closeMenu.classList.add("block");
      navigation.classList.remove("-left-[100%]");
      navigation.classList.add("left-0");
    } else {
      hamburgerMenu.classList.add("block");
      hamburgerMenu.classList.remove("hidden");
      closeMenu.classList.add("hidden");
      closeMenu.classList.remove("block");
      navigation.classList.add("-left-[100%]");
      navigation.classList.remove("left-0");
    }
  };

  hamburgerMenu.addEventListener("click", handleToggleMenu);
  closeMenu.addEventListener("click", handleToggleMenu);
};

toggleMenuOnSmallDevice();
