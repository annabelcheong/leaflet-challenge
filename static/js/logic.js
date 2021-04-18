// Level 1: Basic Visualization
// 1. Get the dataset from API https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
// and for e.g., use All Earthquakes from the Past 7 Days
// 2. Import & Visualize the Data
// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// - Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
// - Include popups that provide additional information about the earthquake when a marker is clicked.
// - Create a legend that will provide context for your map data.




//// CREATE A MAP ////

// Creating map object
var myMap = L.map("map-id", {
    center: [40.7, -73.95],
    zoom: 11
  });

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


//// DATA EXTRACTION FOR MARKERS ////

// Perform an API call from USGS website (earthquakes from the past 7 days)
url = d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", function(response) {

console.log(response);



});


















