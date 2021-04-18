// Level 1: Basic Visualization
// 1. Get the dataset from API https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
// and for e.g., use All Earthquakes from the Past 7 Days
// 2. Import & Visualize the Data
// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// - Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
// - Include popups that provide additional information about the earthquake when a marker is clicked.
// - Create a legend that will provide context for your map data.







//// DATA EXTRACTION FOR MARKERS ////

// Perform an API call from USGS website (earthquakes from the past 7 days)
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// In Geojson, run function createFeatures. 
d3.json(url, function(data) {
    createFeatures(data.features);
    console.log(data);
});

// Define function createFeatures. 
// *This is used to run for each feature in the features array.
function createFeatures(earthquakeData) {

    // Give each feature a popup describing earthquake place and magnitude 
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place + 
            "</h3> <hr> <h2> Mag:" + feature.properties.mag + "</h2>");
    };

    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeData,{
        onEachFeature: onEachFeature
    });

    // Run function createMap 
    // createMap(earthquakes);

};

function createMap(earthquakes){

    // Adding tile layer to the map
    lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
    });
    // }).addTo(myMap);


    // Creating map object
    var myMap = L.map("map-id", {
        center: [40.7, -73.95],
        zoom: 5,
        layers: [lightMap, earthquakes]
    });

   
}




















// // geojson = L.circle(data,{

// //     // Define what  property in the features to use. Use "mag" (which is the magnitude)
// //     valueProperty: "mag";


// // });


// //       // Create a new marker cluster group
// //   var markers = L.markerClusterGroup();

// //   for (var i = 0; i < countries.length; i++) {

// //     // Conditionals for countries points
// //     var color = "";
// //     if (countries[i].points > 200) {
// //       color = "yellow";
// //     }
// //     else if (countries[i].points > 100) {
// //       color = "blue";
// //     }
// //     else if (countries[i].points > 90) {
// //       color = "green";
// //     }
// //     else {
// //       color = "red";
// //     }
  
// //     // Add circles to map
// //     L.circle(countries[i].location, {
// //       fillOpacity: 0.75,
// //       color: "white",
// //       fillColor: color,
// //       // Adjust radius
// //       radius: countries[i].points * 1500
// //     }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
// //   }










