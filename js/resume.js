(function ($) {
  "use strict";

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav'
  });

  $("#html").on("click", function () {

    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("HTML5"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#css").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("CSS3"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#js").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("Javascript + Jquery"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#git").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("Github"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#db").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("mySql + MongoDB databases"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#boot").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("Bootstrap"));


    $("#skillsDiv").append(skillDiv);

  });

  $("#node").on("click", function () {
    $("#skillsDiv").empty();

    let skillDiv = $("<div>")
      .append($("<h2>").text("NodeJS"));


    $("#skillsDiv").append(skillDiv);

  });

})(jQuery); 
