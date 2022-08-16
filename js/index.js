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
    createLightBeams();
  }

  /**
   * Uses the page state to determine which page the user is currently on and
   * appropriately style the navbar links.
   */
  function setNavbarHighlight() {
    const links = document.querySelectorAll('.navlink');
    for (let i = 0; i < links.length; i++) {
      const tab = links[i].innerText.toLowerCase();

      if (tab === page && !links[i].classList.contains('mobile')) {
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
      const tab = links[i].textContent.toLowerCase();
      links[i].addEventListener('click', function () {
        if (!links[i].classList.contains('mm-close')) {
          setPage(tab);
        }
        if (links[i].classList.contains('mobile')) {
          mobile_menu.classList.toggle('active');
        }
      });
    }

    const menu_button = document.querySelector('#navbutton');
    const mobile_menu = document.querySelector('#mobile-menu');
    menu_button.addEventListener('click', function () {
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

  // Creates the light beams at the top of the page.
  function createLightBeams() {
    const beam = document.querySelector('.light-beam.original');
    const container = document.getElementById('light-beams-container');

    let x = 0;
    while (x < window.innerWidth) {
      const new_beam = beam.cloneNode(true);
      new_beam.style.setProperty('--offset', x); // in %
      new_beam.style.setProperty('--delay', random(0, 20) - 10); // in sec
      new_beam.style.setProperty('--duration', random(7, 10)); // in sec
      new_beam.style.setProperty('--height', random(6, 14)); // in vh

      new_beam.classList.remove('original');
      container.appendChild(new_beam);
      x += random(10, 30);
    }
  }

  // Shorthand helper function for getting a random integer
  // between min and max (inclusive).
  function random(min, max) {
    return Math.max(min, Math.round(Math.random() * max));
  }
})();