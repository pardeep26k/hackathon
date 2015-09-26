jQuery(document).ready(function($){

  // Open Active Menu Item
  function active_menu(){
    var file = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    var menu_list = $('.menu');
    var link = $('a[href="' + file + '"]', menu_list);
    if ($(link).length) {
      
      $('li.active', menu_list).removeClass('active');
      
      var ul = $(link).parents('ul');
      // Found Link
      if ($(ul).hasClass('child')) {

        var li = $(link).parent().parents('li');
        $(li).addClass('active');
        $(ul).addClass('open');

      } else {
        var li = $(link).parent();
        $(li).addClass('active');
      }
    } else {
      // Not in menu
    }

  } // active_menu

  active_menu();


});