# leaflet-challenge
week 17 homework

## INSTRUCTIONS

# 1. 
Within the js folder, you will need to create a config.js file. (The config.js file is in the list of .gitignore already.)

# 2. 
In the config.js file, store your mapbox API_KEY. 
For assessors from the Bootcamp, I will provide you with my API_key as part of the submission.

// API key
const API_KEY = "xxxx Add mapbox API_key here xxxx";

# 3. 
Use live server to run the page. 

******************************
This repository contains: 

# index.html 
- This page references and enables the js files to run. 

# FOLDER: static

    ## FOLDER: CSS
        - style.css
    
    ## FOLDER: js
        - config.js (contained in the .gitignore file)
            - This is the config javascript file that contains the mapbox API key.
        - logic.js
            - This file contains the code to map the layers of markers and map from Leaflet.
        - logic_bonus.js
            - This file contains the core and bonus section of the homework. i.e. It includes 3 different map types, and have the  option to display the earthquake markers and/or faultlines.
