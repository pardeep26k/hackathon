jQuery(document).ready(function($) {
  // Dashboard Sparkline Top
  if ($('.flot-dashboard-demo-1').length) {
    var data = [],
      totalPoints = 300;

      var max = 0;
      var timeout_update = 0;

    function getRandomData() {
        if (data.length > 0) data = data.slice(1);
        // Do a random walk

        while (data.length < totalPoints) {
          var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;
          if (y < 0) {
            y = 0;
          } else if (y > 100) {
            y = 100;
          }

          timeout_update++;
          if (timeout_update >= 60) {
            timeout_update = 0;
            $('.current-flot-demo-1').html(Math.round(y) + '%');
          }

          data.push(y);
        }
        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
          res.push([i, data[i]])
        }
        return res;
      }
      // Set up the control widget
    var updateInterval = 30;
    $("#updateInterval").val(updateInterval).change(function() {
      var v = $(this).val();
      if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
          updateInterval = 1;
        } else if (updateInterval > 2000) {
          updateInterval = 2000;
        }
        $(this).val("" + updateInterval);
      }
    });
    var plot = $.plot(".flot-dashboard-demo-1", [getRandomData()], {
      series: {
        shadowSize: 0 // Drawing is faster without shadows
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      },
      grid: {
        borderWidth:{top:0, left:0, right:0, bottom:0}
      },
      colors: ['#f75d3f']
    });

    function update() {
      plot.setData([getRandomData()]);
      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(update, updateInterval);
    }
    update();
  }

  if ($('.flot-dashboard-demo-2').length) {
    var data2 = [],
      totalPoints2 = 300;

      var max2 = 0;
      var timeout_update2 = 0;

    function getRandomData2() {
        if (data2.length > 0) data2 = data2.slice(1);
        // Do a random walk

        while (data2.length < totalPoints2) {
          var prev2 = data2.length > 0 ? data2[data2.length - 1] : 50,
            y2 = prev2 + Math.random() * 10 - 5;
          if (y2 < 0) {
            y2 = 0;
          } else if (y2 > 100) {
            y2 = 100;
          }

          timeout_update2++;
          if (timeout_update2 >= 60) {
            timeout_update2 = 0;
            $('.current-flot-demo-2').html(Math.round(y2) + '%');
          }

          data2.push(y2);
        }
        // Zip the generated y values with the x values
        var res2 = [];
        for (var i2 = 0; i2 < data2.length; ++i2) {
          res2.push([i2, data2[i2]])
        }
        return res2;
      }
      // Set up the control widget
    var updateInterval2 = 30;
    $("#updateInterval").val(updateInterval2).change(function() {
      var v2 = $(this).val();
      if (v2 && !isNaN(+v2)) {
        updateInterval2 = +v2;
        if (updateInterval2 < 1) {
          updateInterval2 = 1;
        } else if (updateInterval2 > 2000) {
          updateInterval2 = 2000;
        }
        $(this).val("" + updateInterval2);
      }
    });
    var plot2 = $.plot(".flot-dashboard-demo-2", [getRandomData2()], {
      series: {
        shadowSize: 0 // Drawing is faster without shadows
      },
      yaxis: {
        min: 0,
        max: 100
      },
      xaxis: {
        show: false
      },
      grid: {
        borderWidth:{top:0, left:0, right:0, bottom:0}
      },
      colors: ['#39b7dc']
    });

    function update2() {
      plot2.setData([getRandomData2()]);
      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot2.draw();
      setTimeout(update2, updateInterval2);
    }
    update2();
  }
});