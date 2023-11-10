// Get the element with the class "icon"
let icon = document.getElementsByClassName("icon")[0];

// Add an event listener for the 'click' event on the icon element
icon.addEventListener('click', responsive_control);

// Function to control the responsiveness of the navigation bar
function responsive_control() {
  // Get the element with the id "myTopnav"
  let x = document.getElementById("myTopnav");

  // Check if the class name of the element is "topnav"
  if (x.className === "topnav") {
    // If it is, add the "responsive" class to the element
    x.className += " responsive";
  } else {
    // If it's not, remove the "responsive" class from the element
    x.className = "topnav";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal - use their "alt" text as a caption
var images = document.querySelectorAll("[id^='myImg']");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Function to open the modal for a specific image
function openModal(imageElement) {
  modal.style.display = "block";
  modalImg.src = imageElement.src;
  captionText.innerHTML = imageElement.alt;
}

// Add click event listeners to each image
images.forEach(function(image) {
  image.onclick = function() {
    openModal(this);
  };
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};


// MAP

// Use your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoid3lhdHRzdGFubGV5IiwiYSI6ImNsb2V2eHRrMDBodjIya3BlaXpnbGVmbzMifQ.4d9Kim_-fosnpZmJiyWoLg';

// Create a map centered around a specific location
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // You can change the map style
    center: [-123.1216, 49.2827], // [longitude, latitude]
    zoom: 8 // Adjust the zoom level as needed
});

// Add a GeoJSON data source to the map
map.on('load', function () {
    map.addSource('points', {
        'type': 'geojson',
        'data': 'assets/japan.json' // Replace with the path to your GeoJSON file
    });

    // Add a layer to the map using the GeoJSON source
    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
            'icon-image': 'marker-15', // You can use different icons; check Mapbox documentation
            'icon-allow-overlap': true
        }
    });
});

geojsonFetch();


