jQuery(document).ready(function($){

  /*** Vertical Tabs ***/
  if ($(".vertical-tabs").length) {
    $(".vertical-tabs").tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $(".vertical-tabs li").removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  }

  /*** Accordions ***/
  if ($('.collapsible-accordion').length) {
    $('.collapsible-accordion').accordion({collapsible: true});
  }

});