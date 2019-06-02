const StickyNav = {

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                                                     *
   *   Function to prepare and add everthing necessary   *
   *                                                     *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  init: (emptyDiv, containerDiv, mobileMenuText) => {
    /* Add div and class for sticky nav on mobile */
    $(window).load(() => {
      const firstChildDiv = `${containerDiv} div`;
      $(firstChildDiv).first().addClass('sticky-accordion');
      $(containerDiv).prepend(`<div class="sticky-heading-mobile show-for-medium-down">${mobileMenuText}<button class="hamburger-button"></button></div>`);
    });

    /* Constantly looks for scrolling event */
    $(window).scroll(() => {
      const header = $(emptyDiv);
      const menu = $(containerDiv);
      if (StickyNav.scrolledOutOfView(header)) {
        menu.addClass('sticky-nav');
      } else if (StickyNav.isScrolledIntoView(header)) {
        menu.removeClass('sticky-nav');
      }
    });

    /* Adds the toggle functionality to screen size <= 1023px (mobile) */
    $(containerDiv).click(() => {
      if (StickyNav.windowWidth() <= 1023) {
        $('.sticky-accordion').toggle();
      }
    });
  },

  windowWidth: () => $(window).width(),

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                                                     *
   *  Returns false when Element is scrolled out of view *
   *                                                     *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  isScrolledIntoView: (elem) => {
    let inView;
    if (elem.length !== 0) {
      const docViewTop = $(window).scrollTop();
      const docViewBottom = docViewTop + $(window).height();

      const elemTop = elem.offset().top;
      const elemBottom = elemTop + elem.height();

      inView = ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    return inView;
  },

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   *                                                       *
   *   Returns true when sticky property is being applied  *
   *                                                       *
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  scrolledOutOfView: (elem) => {
    let outOfView;
    if (elem.length !== 0) {
      const docViewTop = $(window).scrollTop();

      const elemTop = elem.offset().top;
      const elemBottom = elemTop + elem.height();

      outOfView = (elemBottom <= docViewTop);
    }
    return outOfView;
  },
};

export default StickyNav;
