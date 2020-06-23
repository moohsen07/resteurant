/* smoth scroll to elements */
$('.navbar li a').click(function(e){
     e.preventDefault();
     $('html,body').animate({
     scrollTop : $('#'+$(this).data('scroll')).offset().top + 1
},1000);
});


/* add class active to nav-bar */
$('.navbar li a').click(function(){
     $(this).addClass('active').parent().siblings().find('a').removeClass('active');
});


/* fixed bar */
/*
$(window).scroll(function () {
          if ($(window).scrollTop() > $('.about').offset().top)
          {
               $('.navbar').addClass('fixed-top')
          }
          else{
               $('.navbar').removeClass('fixed-top')
          }
});
*/
/* scroll-to-top */
var scrollToTop = $('.scroll-to-top');
$(window).scroll(function(){

     if($(window).scrollTop()>2000) {
          scrollToTop.fadeIn(400);
     }

      else{
          scrollToTop.fadeOut(400);
     };
});

scrollToTop.click(function(e){
     e.preventDefault();

     $('html,body').animate(
          {
     scrollTop :0
},1000);
})



