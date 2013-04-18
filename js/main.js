$(function(){
  $('body').addClass(Math.random() > 0.5 ? 'black-on-white' : 'white-on-black');

  var centralize_content = function () {
    var ah = $("div#content").height();
    var ph = $("html").height();
    var mh = (ph - ah) / 2;
    $("div#content").attr('style', 'margin-top:' + mh + "px !important");
  }

  centralize_content();

  $(window).on('resize', centralize_content);
});


