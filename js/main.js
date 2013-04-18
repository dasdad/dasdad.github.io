$(function(){
	$('body').addClass(Math.random() > 0.5 ? 'black-on-white' : 'white-on-black');

	resize();

  $(window).resize(function () {
  	resize();
  });
});


function resize(){
	var ah = $("div#content").height();
	var ph = $("html").height();
	var mh = (ph - ah) / 2;
	$("div#content").attr('style', 'margin-top:' + mh + "px !important");
}