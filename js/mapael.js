jQuery(document).ready(function($){

  var latest = 0;
  function random_map_value(last) {
    if (last==1) {
      return latest;
    }
    latest = Math.round(Math.floor((Math.random() * 15000) + 1));
    return latest;
  }

  if ($(".mapael-container").length){  
    $(".mapael-container").mapael({
    map : {
        name : "world_countries",
        defaultArea: {
        attrs : {
          stroke : "#fff",
          "stroke-width" : 1
        }
      }
    },
        legend : {
      area : {
        display : true,
        title :"Visitors by country",
        slices : [
          {
            max :50000,
            attrs : {
              fill : "#ecf0f1"
            },
            label :"Less than 50,000 Visitors"
          },
          {
            min :50000,
            max :150000,
            attrs : {
              fill : "#cacaca"
            },
            label :"Between 50,000 and 150,000 Visitors"
          },
          {
            min :150000,
            attrs : {
              fill : "#909090"
            },
            label :"More than 150,000 Visitors"
          }
        ]
      },
      plot :{
        display : true,
        title: "Visitors by cities"
        , slices : [
          {
            max :1000,
            attrs : {
              fill : "#f99200"
            },
            attrsHover :{
              transform : "s1.5",
              "stroke-width" : 1
            },
            label :"Less than 1000 Visitors",
            size : 10
          },
          {
            min :1000,
            max :10000,
            attrs : {
              fill : "#f99200"
            },
            attrsHover :{
              transform : "s1.5",
              "stroke-width" : 1
            },
            label :"Between 1000 and 10,000 Visitors",
            size : 20
          },
          {
            min :10000,
            attrs : {
              fill : "#f99200"
            },
            attrsHover :{
              transform : "s1.5",
              "stroke-width" : 1
            },
            label :"More than 10,000 Visitors",
            size : 30
          }
        ]
      }
    },
    plots : {
      'paris' : {
        latitude :48.86,
        longitude :2.3444,
        value : random_map_value(0),
        tooltip: {content : "Paris<br />Visitors: " + random_map_value(1)}
      },
      'newyork' : {
        latitude :40.667,
        longitude :-73.833,
        value : random_map_value(0),
        tooltip: {content : "New york<br />Visitors: " + random_map_value(1)}
      },
      'sydney' : {
        latitude :-33.917,
        longitude :151.167,
        value : random_map_value(0),
        tooltip: {content : "Sydney<br />Visitors: " + random_map_value(1)}
      },
      'brasilia' : {
        latitude :-15.781682,
        longitude :-47.924195,
        value : random_map_value(0),
        tooltip: {content : "Brasilia<br />Visitors: " + random_map_value(1)}
      },
      'tokyo': {
        latitude :35.687418,
        longitude :139.692306,
        value : random_map_value(0),
        tooltip: {content : "Tokyo<br />Visitors: " + random_map_value(1)}
      }
    },
    areas: {
      "AF": {
        "value": random_map_value(0),
        "attrs": {
          "href": "#"
        },
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Afghanistan<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "ZA": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">South Africa<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AL": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Albania<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "DZ": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Algeria<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "DE": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Germany<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AD": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Andorra<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AO": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Angola<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AG": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "SA": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AR": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Argentina<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AM": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Armenia<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AU": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Australia<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AT": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Austria<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "AZ": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BS": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bahamas<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BH": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bahrain<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BD": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bangladesh<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BB": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Barbados<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BE": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Belgium<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BZ": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Belize<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BJ": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Benin<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BT": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bhutan<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BY": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Belarus<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "MM": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Myanmar<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BO": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BA": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BW": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Botswana<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BR": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Brazil<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BN": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BG": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Bulgaria<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BF": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "BI": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Burundi<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "KH": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Cambodia<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CM": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Cameroon<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CA": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Canada<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CV": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Cape Verde<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CF": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Central African Republic<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CL": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">Chile<\/span><br \/>Visitors : " + random_map_value(1)
        }
      },
      "CN": {
        "value": random_map_value(0),
        "href" : "#",
        "tooltip": {
          "content": "<span style=\"font-weight:bold;\">China<\/span><br \/>Visitors : " + random_map_value(1)
        }
      }
    }
  });
  }

});