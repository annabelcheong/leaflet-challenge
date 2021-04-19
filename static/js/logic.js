// Level 1: Basic Visualization
// 1. Get the dataset from API https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
// and for e.g., use All Earthquakes from the Past 7 Days
// 2. Import & Visualize the Data
// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// - Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
// - Include popups that provide additional information about the earthquake when a marker is clicked.
// - Create a legend that will provide context for your map data.

//// CREATE MAP ////

// Creating map object
// var myMap = L.map("map-id", {
//     center: [40.7, -73.95],
//     zoom: 5,
//     // layers: [lightMap, earthquakes]
// });

// // Adding tile layer to the map
// lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
// attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
// tileSize: 512,
// maxZoom: 18,
// zoomOffset: -1,
// id: "mapbox/streets-v11",
// accessToken: API_KEY
// }).addTo(myMap);

///////////////////////////////

//// DATA EXTRACTION FOR MARKERS ////

// Perform an API call from USGS website (earthquakes from the past 7 days)
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// In Geojson, run function createFeatures. 
d3.json(url, function(data) {
    createFeatures(data.features);
    console.log(data.features);
});

// Define function createFeatures. 
// *This is used to run for each feature in the features array.
function createFeatures(earthquakeData) {

    // Give each feature a popup describing earthquake place and magnitude 
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h2>" + feature.properties.place + 
            "</h2> <hr> <h3> Richter Scale: " +  feature.properties.mag + 
            "</h3><p>" + new Date(feature.properties.time) + "</p>"
            );
    };

    // Marker radius
    function markerRadius(magnitude) {
        return magnitude * 20000; // Change scale until appropriate for map and user experience.
    }

    // Marker colours
    function markerColour(magnitude) {
        if (magnitude < 1) {
            return "#00f704"
        }
        else if (magnitude < 2) {
            return "#fefc2b"
        }
        else if (magnitude < 3) {
            return "#efc91c"
        }
        else if (magnitude < 4) {
            return "#ef971c"
        }
        else if (magnitude < 5) {
            return "#ef7a1c"
        }
        // Magnitude > 5
        else {
            return "#ef7a1c"        
        }

    }

    // CREATE LAYER FOR MARKERS
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData,{
        
        pointToLayer: function(earthquakeData, latlng) {
            return L.circle(latlng, {
                radius: markerRadius(earthquakeData.properties.mag),
                color: markerColour(earthquakeData.properties.mag),
                fillOpacity: 0.6
            });
        },
        
        "onEachFeature": onEachFeature
    
    });

    // Run function createMap 
    createMap(earthquakes);

};

function createMap(earthquakes) {

    var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
    });

    var overlayMaps = {
        "Earthquakes": earthquakes
    };

    var myMap = L.map("map-id", {
        center: [40.7, -73.95],
        zoom: 5,
        layers: [lightMap, earthquakes]
    });


    // L.control.layers(baseMaps, overlayMaps, {
    //     collapsed: false
    // }).addTo(myMap);


    //Add legend 'template' to myMap
    var legend = L.control({position:"bottomright"});

    // Colours in the legend for the different richter scale categories
    function getColor(grades) {
        return  grades > 5 ? '#ef7a1c' :
                grades > 4 ? '#ef7a1c' :
                grades > 3 ? '#ef971c' :
                grades > 2 ? '#efc91c' :
                grades > 1 ? '#fefc2b' :
                             '#00f704';
        
    }

    // Add legend details
    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 1, 2, 3, 4, 5],
            labels = [];
        
        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;


    };
    
    legend.addTo(myMap);



};



