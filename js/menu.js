(() => {
    const refs = {
      openMenuBtn: document.querySelector(".mob-menu-btn-open"),
      closeMenuBtn: document.querySelector(".mob-menu-btn-close"),
      menu: document.querySelector(".mob-menu-open"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();