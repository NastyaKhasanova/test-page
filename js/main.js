$(document).ready(function(){
  $('.nav>li>a').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1000);
  });

  $('.tel-toggle').on('click', function() {
    $(this).find('.toggle-text').css('opacity', '0');
    $(this).find('.tel').addClass('active');
  });
});
