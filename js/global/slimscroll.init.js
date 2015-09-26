jQuery(document).ready(function($){
  
  // Slimscroll
  $('.slimscroll').each(function(i, item) {
    var height = $(item).data('scroll-height');
    var bar_color = $(item).data('bar-color');
    
    if (!height || height == '') height = '200';
    if (!bar_color || bar_color == '') bar_color = '#000';
    
    $(item).slimScroll({height: height + 'px', width:'100%', color: bar_color});
  });
  
});