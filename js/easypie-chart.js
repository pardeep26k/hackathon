jQuery(document).ready(function($) {

  if ($('.piechart-dashboard-demo-01').length) {
  $('.piechart-dashboard-demo-01').easyPieChart({
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
  }

  if ($('.piechart-dashboard-demo-02').length) {
  $('.piechart-dashboard-demo-02').easyPieChart({
    easing: 'easeOutBounce',
    onStep: function(from, to, percent) {
      $(this.el).find('.percent').text(Math.round(percent));
    }
  });
  }

});