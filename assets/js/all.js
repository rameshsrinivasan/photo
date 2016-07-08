/* ---------------------------------------------
Javascript
--------------------------------------------- */
(function($) {
    "use strict";
    // opens the menu
    $( ".toggle-menu" ).click(function() {
      $(".overlay").toggleClass("open");
    });
    // closes the menu when any link inside is clicked
    $('.overlay a').on('click', function(){
        $(".overlay").removeClass("open");
    });
    /////////////////////////////////////////////////////////////End
    //Fullpage plugin
    $(document).ready(function() {
      $('#fullpage').fullpage({
          //Navigation
          menu: '#menu',
          lockAnchors: false,
          navigation: true,
          navigationPosition: 'right',
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',

          //Scrolling
          css3: true,
          scrollingSpeed: 1000,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 0,
          scrollBar: false,
          easing: 'easeOutQuart',
          easingcss3: 'cubic-bezier(0.7,0,0.3,1)',
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: true,
          normalScrollElements: '.md-modal, .photo-menu',
          scrollOverflow: false,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,

          //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,

          //Design
          controlArrows: true,
          verticalCentered: true,
          resize : true,
          responsiveWidth: 0,
          responsiveHeight: 0,

          //Custom selectors
          sectionSelector: '.section',
          slideSelector: '.slide',
      });
    });
    /////////////////////////////////////////////////////////////End
    // Up and Down Links
    $(document).on('click', '#moveUp', function(){
      $.fn.fullpage.moveSectionUp();
    });
    $(document).on('click', '#moveDown', function(){
      $.fn.fullpage.moveSectionDown();
    });
    /////////////////////////////////////////////////////////////End
})(jQuery);