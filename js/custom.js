$(function(){
  'use strict'
  //Back to top js
  var back2top = $(".back-to-top");
  var html_body = $('html,body');
  back2top.click(function(){
    html_body.animate({scrollTop:0},1000);
  });

  
  //Smooth Scroll js
  var html_body = $('html, body');
  $('a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 45
              }, 1500);
              return false;
          }
      }
  });

  //Sticky Menu js
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
     
     if(scrolling > 50){
         $(".navbar").addClass("menu-bg");
     }
     else{
         $(".navbar").removeClass("menu-bg");
     }
     if(scrolling > 100){
         back2top.fadeIn(500);
     }
     else{
         back2top.fadeOut(500);
     }
 });
 //Preloader js
 $(window).on('load',function(){
  $(".preloader").delay(1000).fadeOut(1000);
  });

 // Closes responsive menu when a scroll link is clicked
 $('.nav-link').on('click', function () {
  $('.navbar-collapse').collapse('hide');
  });



  //Counter Up Js
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });


  //Wow Js
  new WOW().init();
  
});