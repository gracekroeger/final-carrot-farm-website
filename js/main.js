$(document).ready(function()
  {



$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
  if ($(window).scrollTop() > 80 ){
    
    $('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

});

// scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 800);
        return false;
      }
    }
  });
});



