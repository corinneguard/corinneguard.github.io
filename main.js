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
//pull the weather conditions -- INCOMPLETE FROM HERE ON
function conditions () {
  var api = 'http://api.wunderground.com/api/1e90c8e9996319b9/geolookup/q/35.2961437628608,-82.7688210636916.json';

  $.get(api, function(response) {
    console.log(response);
  });
}
//Use the resources you specified to create an object of waterfall locations and conditions
function Waterfall (name, latlng, height, watershed)  {
  this.name = name;
  this.latlng = latlng;
  this.height = height;
  this.watershed = watershed;
//Map the members of the object onto the Google Map  
      	     this.marker = new google.maps.Marker({
	          position: this.latlng,
	          map: map,
	          title: this.name
	        });
//Create the info window added to markers
        var contentString = '<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">' + this.name + '</h1>'+
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
var mooreCove = new Waterfall ('Moore Cove Falls', {lat:35.31186, lng:-82.77776}, '50 ft', 'Very Small');
var tripleFalls = new Waterfall ('Triple Falls', {lat:35.20028, lng:-82.61756}, '100 feet', 'Large');
