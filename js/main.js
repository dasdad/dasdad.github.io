$(function(){
  $('body').addClass(Math.random() > 0.5 ? 'black-on-white' : 'white-on-black');

  var verticalCentralize = function(element, container) {
    var $window    = $(window);

    var $element   = $(element);
    var $container = typeof container === 'undefined' ? $window : $(container);

    var act = function() {
      var newTop = ($container.height() - $element.height()) / 2;

      if (newTop < 0 || $container.width() < 900) {
        newTop = 0;
      }

      $element.css({
        position: 'relative',
        top:      newTop  + 'px'
      });
    };

    act();
    $(window).on('resize', act);
  };

  verticalCentralize($('div#container'));
});
