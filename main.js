$(document).ready(function(){
  $('.header').height($(window).height());
})

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(".navbar a").click(function(){
    $("body,html").animate({
     scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
   })

