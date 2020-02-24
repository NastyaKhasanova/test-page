function prepare (){
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
}

function loadScript() {
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.onload=prepare;
document.body.appendChild(script);
}
window.onload=loadScript;
