var body = $("html, body");
$(".scroll-click").click(function() {
  var height = $(window).height();
  body.stop().animate({scrollTop:height}, 1000, 'swing', function() {
  });
});


//Reveal Hidden Elements Initial

$('.fade').each(function(i) {
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > top_of_object) {
      $(this).addClass("reveal");
    }
  });
  
  
  //Reveal Hidden Elements on Scroll
  
  $(window).scroll(function() {
    $('.fade').each(function(i) {
      var top_of_object = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > top_of_object) {
        $(this).addClass("reveal");
      }
    });
  });
  