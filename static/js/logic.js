// Level 1: Basic Visualization
// 1. Get the dataset from API https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
// and for e.g., use All Earthquakes from the Past 7 Days
// 2. Import & Visualize the Data
// Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
// - Your data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes should appear larger and darker in color.
// - Include popups that provide additional information about the earthquake when a marker is clicked.
// - Create a legend that will provide context for your map data.

// Perform an API call from USGS website
earthQ = d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
console.log(earthQ);
















///// Create map /////

