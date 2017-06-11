var map;

//Load a Google Map with the correct starting lat/lng (centered on Western North Carolina, for example)

var map;

function initMap() {
	var myLatLng = {lat:35.2961437628608, lng: -82.7688210636916};
  map = new google.maps.Map(document.getElementById('map'), {
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

  //Populate the info windows from the object
  var mooreCove = new Waterfall('Moore Cove Falls', 35.31186, -82.77776, '50 ft', 'Very Small');
  var tripleFalls = new Waterfall('Triple Falls', 35.20028, -82.61756, '100 ft', 'Large');

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
    position: {lat: this.lat, lng: this.lon},
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

//ATTEMPT 2 create a waterfall object
//var locations = [
     //['Moore Cove Falls', 35.31186, -82.77776, '50 ft', 'Very Small', 1],
     //['Triple Falls', 35.20028, -82.61756, '100 ft', 'Large', 2],
//];

//var infowindow = new google.maps.InfoWindow;

//var marker, i;

}

//Use the resources you specified to create an object of waterfall locations and conditions
function Waterfall (name, lat, lon, height, watershed) {
  this.name = name;
  this.lat = lat;
  this.lon = lon;
  this.height = height;
  this.watershed = watershed;
	
//Pull the weather conditions 
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+ this.lat +'&lon='+ this.lon +'&APPID=a2a5000e2c6b93d226cccface5e68719';
  //Map the members of the object onto the Google Map  
  this.marker = new google.maps.Marker({
    position: {lat: this.lat, lng: this.lon},
    map: map,
    title: this.name
  });
  //Define info window content
  var contentString = '<h1>' + this.name + ': ' + this.height + '</h1>'
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  //Set info window for each marker
  var marker = new google.maps.Marker({
    position: {lat: this.lat, lng: this.lon},
    icon: [initMap.icons].icon,
    map: map,
    title: this.name
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
//Return the weather conditions and run a function to modify custom markers based on weather condition
  $.get(api, function(response) {
     if (this.watershed === 'Very Small' && "rain.3h" === 0) {
      icon = 'red';
      } else if (this.watershed === 'Very Small' && "rain.3h" < .1  ||
      this.watershed === 'Small' && "rain.3h" === 0) {
      icon = 'orange';
      } else if (
      this.watershed === 'Small' && "rain.3h" < .1  ||
      this.watershed === 'Medium' && "rain.3h" === 0
      ) {
      icon = 'yellow';
      } else {
      icon = 'green';
      }
  	console.log(response);
    });
    
}