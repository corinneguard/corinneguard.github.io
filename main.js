//create a map where users can select a map marker of waterfalls in Western North Carolina and find out the condition of the strength of the waterfall based on watershed size + recent rain conditions
//Use https://www.wncwaterfalls.info/map.html as a reference, pull all GeoJSON data, note private access only
//crossreference watershed notes from wnc map with http://www.kadamsphoto.com/north_carolina_waterfalls/find-by-map/ to categorize Very Small, Small, Medium  

//use Google Maps API
//AIzaSyAhJX9J8IPN6RpBq3IZB2yIgiXNDDGt85A
//pull in Open Weather API or Weather Underground current weather data
//1e90c8e9996319b9
//get API key(s) 
//fill the screen with the Google Map display and markers
//find a way to batch load all accessible waterfalls' lat/long markers in
//create array of name, longitude, latitude, watershed, open or closed trails and other trail warnings, other info box categories with selected info from the sites
//when user loads the page, pull in markers and weather data and modify markers based on watershed levels and weather conditions
//when user clicks on a marker, load an info tab which shows array data stored for that specific waterfall
//user input option could be save or remove - include a button in the waterfall's info box that allows them the option to save to a "saved collection" of waterfalls, wherever that is accessed from. 

//Load a Google Map with the correct starting lat/lng (centered on Western North Carolina, for example)
function initMap() {
	var myLatLng = {lat:35.2961437628608, lng: -82.7688210636916};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.782169, lng: -80.793457},
    zoom: 7
  });

  //Plot a sample point - Looking Glass Falls 
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Looking Glass Falls'
  });

  //Create a marker with an info window with the weather pulled in from one of the sources you specified
  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Looking Glass Falls</h1>'+
      '<div id="bodyContent">'+
      '<p>This is one of the most popular and photogenic falls in Western NC. ' +
      'The creek, wide and even, plunges about 45 feet into a big, round plunge pool. ' + 
      'Tall cliffs tower above the plunge pool on the opposite side from the viewing area.</p>'+
      '<p><b> Directions: From the intersection of US Hwy. 276/64 and NC Hwy. 280 in Brevard, NC, '+'follow US Hwy. 276 West for 5.6 miles, through the Pisgah National Forest, to the' + 'parking area on the right. There are signs to guide you along the way.</b></p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}



//
//Use the resources you specified to create an object of waterfall locations and conditions
function Waterfall (name, lat, lon, height, watershed) {
  this.name = name;
  this.lat = lat;
  this.lon = lon;
  this.height = height;
  this.watershed = watershed;
  
  //Map the members of the object onto the Google Map  
  this.marker = new google.maps.Marker({
    position: {lat: this.lat, lon: this.lon},
    map: map,
    title: this.name
  });
//Create the info window added to markers
  var contentString = '<div id="content">'+
     '//<h1 id="firstHeading" class="firstHeading">' + this.name + '</h1>'+
      '<div id="bodyContent">'+
      '<p>Height: ' + this.height +
      'Watershed size: ' + this.watershed + '</p>'+
      '</div>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  this.marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
      
}

//Populate the info windows from the object
//var mooreCove = new Waterfall('Moore Cove Falls', 35.31186, -82.77776, '50 ft', 'Very Small');
//var tripleFalls = new Waterfall('Triple Falls', 35.20028, -82.61756, '100 ft', 'Large');
//ATTEMPT 2 create a waterfall object
//var locations = [
     //['Moore Cove Falls', 35.31186, -82.77776, '50 ft', 'Very Small', 1],
     //['Triple Falls', 35.20028, -82.61756, '100 ft', 'Large', 2],
//];

//var infowindow = new google.maps.InfoWindow;

//var marker, i;

//for (i = 0; i < locations.length; i++) {  
    //marker = new google.maps.Marker({
         //position: new google.maps.LatLng(locations[i][1], locations[i][2]),
         //map: map
    //});

    //google.maps.event.addListener(marker, 'click', (function(marker, i) {
         //return function() {
             //infowindow.setContent(locations[i][0]);
             //infowindow.open(map, marker);
         //}
    //})(marker, i));
//}


//ATTEMPT 3
//var map;
      //function initMap() {
        //map = new google.maps.Map(document.getElementById('map'), {
          //zoom: 7,
          //center: new google.maps.LatLng(35.782169,-80.793457),
          //mapTypeId: 'terrain'
        //});

        // Create a <script> tag and set the USGS URL as the source.
        //var script = document.createElement('script');
        // This example uses a local copy of the GeoJSON stored at
        // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
        //script.src = 'https://www.wncwaterfalls.info/data.json';
        //document.getElementsByTagName('head')[0].appendChild(script);
      //}

      // Loop through the results array and place a marker for each
      // set of coordinates.
      //window.eqfeed_callback = function(results) {
        //for (var i = 0; i < results.features.length; i++) {
          //var coords = results.features[i].geometry.coordinates;
          //var latLng = new google.maps.LatLng(coords[1],coords[0]);
          //var marker = new google.maps.Marker({
            //position: latLng,
            //map: map
          //});
        //}
      //}

//WEATHER - pull the weather conditions 
//function conditions () {
  //var api = 'http://api.wunderground.com/api/1e90c8e9996319b9/geolookup/q/35.2961437628608,-82.7688210636916.json';
//var api = 'api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}';
//$.get(api, function(response) {
  //console.log(response);
  //});
//}
