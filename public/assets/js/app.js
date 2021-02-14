// var $ = require( "jquery" );
function c() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

$(window).on("load", function() {
  // https://stackoverflow.com/questions/4086107/fixed-page-header-overlaps-in-page-anchors
  // NAVBAR PADDING
  $("html").css("padding-top", $("#header").outerHeight(true))
  $("html").css("scroll-padding-top", $("#header").outerHeight(true))

  // stop the call to action from doing anything for now
  $("#banner .cta-button").on({
    click: function(event) {
      event.preventDefault();
      event.stopPropagation();      
    }
  });

  // CUSTOM SOLUTION
  let customItem = $(".custom__item");
  let customTabText = $(".custom__tab-text");
  let customWindowText = $(".custom__window-text");
  
  // ACTIVATE CUSTOM TAB
  $(customItem).on({
    click: function() {
      let active = $(".custom__item--active");
      $(active).removeClass("custom__item--active");
      // $(active).removeClass("font-weight-bold");
      $(active).find(".number").removeClass("text-success");
      $(active).find(".description").removeClass("text-dark");
      $(this).addClass("custom__item--active")
      activateCustomItem(this);
    }
  });

  // CUSTOM ACTIVATE CALLBACK FUNCTION
  function activateCustomItem(active) {
    // $(active).addClass("font-weight-bold");
    $(active).find(".number").addClass("text-success");
    let description = $(active).find(".description");
    $(description).addClass("text-dark");
    $(customTabText).html($(description).html());
    $(customWindowText).html($(active).find(".text").html());
  };

  // ACTIVATE ITEM WHEN LOADING WINDOW
  activateCustomItem($(".custom__item--active"));

  // GSAP ANIMATION
  let screenWidth = $(window).width();
  let screenHeight = $(window).height();
  let homeController = new ScrollMagic.Controller();

  let shapesTL = gsap.timeline();
  shapesTL
  .fromTo(
    "#banner",0.5,
    {
      opacity: 0
    },
    {
      opacity: 1
    }, "=0"
  )
  .fromTo(
    "#shapes .shape",0.55,
    {
      x: screenWidth
    },
    {
      x:0,
      stagger: .5
    }, "-=.5"
  )
  .fromTo(
    ".shape.rectangle .play",0.55,
    {
      opacity: 0
    },
    {
      opacity: 1
    }, "-=0"
  )


  let platformsTL = gsap.timeline();  
  platformsTL
    .fromTo(
      "#platforms", 1,
      {
        x: -screenWidth
      },
      {
        x:0,
      }, "-=0"
    )

  let projectsTL = gsap.timeline();
  projectsTL
    .fromTo(
      ".projects .project", .7,
      {
        x: screenWidth
      },
      {
        x:0,
        stagger: -.4
      }, "=0"
    )
    .fromTo(
      "#projects .view-buttons", 1,
      {
        opacity: 0
      },
      {
        opacity: 1
      }, "=-0"
    );


  let teamLeftTL = gsap.timeline();
  teamLeftTL
    .fromTo(
      "#team .team.team--left", 1.5,
      {
        opacity: 0,
        x: -screenWidth
      },
      {
        opacity: 1,
        x:0,
        stagger: .5
      }, "=0"
    )

  let teamRightTL = gsap.timeline();
  teamRightTL
    .fromTo(
      "#team .team.team--right", 1.5,
      {
        opacity: 0,
        x: screenWidth
      },
      {
        opacity: 1,
        x:0,
        stagger: .5
      }, "=0"
    )
    
  let teamTopTL = gsap.timeline();
  teamTopTL
    .fromTo(
      "#team .team.team--top", 1.5,
      {
        y: -screenHeight*.5,
        opacity: 0
      },
      {
        opacity: 1,
        y:0,
        stagger: .5
      }, "=0"
    )

  let teamBottomTL = gsap.timeline();
  teamBottomTL
    .fromTo(
      "#team .team--bottom", 2,
      {
        y: screenHeight*2,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        stagger: .5
      }, "=0"
    )

  let customTL = gsap.timeline();
  customTL
    .fromTo(
      "#custom .custom__list", 1,
      {
        opacity: 0,
        x: -screenWidth
      },
      {
        x: 0,
        opacity: 1
      }, "=0"
    )
    .fromTo(
      "#custom .custom__window", 1,
      {
        y: screenHeight*.75
        // x: screenWidth
      },
      {
        y: 0
        // x: 0
      }, "-=.75"
    )

  let footerTL = gsap.timeline();
  footerTL
    .fromTo(
      "#footer .footer__cta", 1.5,
      {
        opacity: 0,
      },
      {
        opacity: 1
      }, "=0"
    )

  new ScrollMagic.Scene({
    triggerElement: "#shapes",
    triggerHook: 1,
    reverse: true,
    offset: 100,
    duration: 0,
  })
    .setTween(shapesTL)
    // .addIndicators()
    .addTo(homeController);
  
  new ScrollMagic.Scene({
    triggerElement: "#platforms",
    triggerHook: 1,
    reverse: true,
    offset: 100,
    duration: 0,
  })
    .setTween(platformsTL)
    // .addIndicators()
    .addTo(homeController);

  new ScrollMagic.Scene({
    triggerElement: "#projects",
    triggerHook: .9,
    reverse: true,
    offset: 100,
    duration: 0,
  })
    .setTween(projectsTL)
    // .addIndicators()
    .addTo(homeController);

  new ScrollMagic.Scene({
    triggerElement: "#team",
    triggerHook: 1,
    reverse: true,
    offset: 100,
    duration: 0,
  })
  .setTween([teamLeftTL, teamRightTL, teamTopTL, teamBottomTL])
  // .addIndicators()
  .addTo(homeController);

    new ScrollMagic.Scene({
      triggerElement: "#custom",
      triggerHook: 1,
      reverse: true,
      offset: 100,
      duration: 0,
    })
      .setTween(customTL)
      // .addIndicators()
      .addTo(homeController);

  new ScrollMagic.Scene({
    triggerElement: "#footer",
    triggerHook: .9,
    reverse: true,
    offset: 100,
    duration: 0,
  })
    .setTween(footerTL)
    // .addIndicators()
    .addTo(homeController);

});