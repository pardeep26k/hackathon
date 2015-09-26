jQuery(document).ready(function($){

  // Init
  if ($('.tabs-chart').length) {
    $('.tabs-chart').tab();
  }

  function countup(parent) {
    if ($('.countTo', parent).length) {
    $('.countTo', parent).countTo({
      formatter: function (value, options) {
        value = value.toFixed(options.decimals);
        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return '$' + value;
      }
    });
    }
  }

  countup('body');

  $(document).on( 'shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    var id = $(e.target).attr('href');
    countup(id);
  });

});