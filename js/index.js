'use strict';
(function () {

  window.addEventListener('load', init);
  let page = 'home';

  /**
   * Initialization function that should handle anything that needs to occur
   * on page load (include changing from one page to another).
   */
  function init() {
    setNavbarHighlight();
    setNavbarListeners();
  }

  /**
   * Uses the page state to determine which page the user is currently on and
   * appropriately style the navbar links.
   */
  function setNavbarHighlight() {
    const links = document.querySelectorAll('.navlink');
    for (let i = 0; i < links.length; i++) {
      const tab = links[i].innerText.toLowerCase();

      if (tab === page) {
        links[i].classList.add('active');
      } else {
        links[i].classList.remove('active');
      }
    }
  }

  /**
   * Loops over all links in the navbar and sets their listeners, and adds
   * the mobile menu listener.
   */
   function setNavbarListeners() {
    const links = document.querySelectorAll('.navlink');
    for (let i = 0; i < links.length; i++) {
      const tab = links[i].innerText.toLowerCase();
      links[i].addEventListener('click', function() {
        setPage(tab);
        if (links[i].classList.contains('mobile')) {
          mobile_menu.classList.toggle('active');
        }
      });
    }
    
    const menu_button = document.querySelector('#navbutton');
    const mobile_menu = document.querySelector('#mobile-menu');
    menu_button.addEventListener('click', function() {
      mobile_menu.classList.toggle('active');
    });
  }

  /**
   * Sets the page state to the given tab.
   * @param {string} tab The tab to set the page state to.
   */
  function setPage(tab) {
    page = tab;
    setNavbarHighlight();
    const pages = document.querySelectorAll('.page-content');
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].id === page) {
        pages[i].classList.remove('hidden');
      } else {
        pages[i].classList.add('hidden');
      }
    }
  }

})();