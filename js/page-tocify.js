jQuery(document).ready(function($){

  /*** Tocify ***/
  if ($(".tocify-nav").length) { 
    $(".tocify-nav").tocify({scrollTo:80, context:'.tocify-content',selectors:"h2,h3,h4,h5"});
  }

});