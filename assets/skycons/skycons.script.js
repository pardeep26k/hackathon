jQuery(document).ready(function($){

  function set_skycons() {
    var skycons = new Skycons({"color": "#585858"});
    $('.skycon').each(function(i, item){
      var type = $(item).data('weather');
      type = type.toUpperCase();
      type = type.replace('-', '_');
      skycons.add($(item).attr('id'), Skycons[type]);
    });

    skycons.play();
  }

  set_skycons();

});