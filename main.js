var map;

//Load a Google Map with the correct starting lat/lng (centered on Western North Carolina, for example)
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.782169, lng: -80.793457},
    zoom: 7
  });

  //Populate markers and the info windows from the Waterfall object
  var mooreCove = new Waterfall('Moore Cove Falls', 35.31186, -82.77776, '50 ft', 'Very Small');
  var tripleFalls = new Waterfall('Triple Falls', 35.20028, -82.61756, '100 ft', 'Large');
  var lookingGlassFalls = new Waterfall('Looking Glass Falls', 35.29634, -82.76929, '45 ft', 'Medium');
  var alarkaFalls = new Waterfall('Alarka Falls', 35.33863, -83.37157, '200-250 ft', 'Small');
  var rufusMorganFalls = new Waterfall('Rufus Morgan Falls', 35.142743, -83.547999, '60 ft', 'Small');
  var bullCoveFalls = new Waterfall('Bull Cove Falls', 35.002968, -83.543558, '40 ft', 'Small');
  var bigLaurelFalls = new Waterfall('Big Laurel Falls', 35.018188, -83.505878, '35 ft', 'Small');
  var insidePassageFalls = new Waterfall('Inside Passage Falls', 35.28572, -83.67673, '40 ft', 'Small');
  var littleCreekFalls = new Waterfall('Little Creek Falls', 35.50621, -83.372383, '50 ft', 'Small');
  var indianCreekFalls = new Waterfall('Indian Creek Falls', 35.4728159, -83.4272656, '25 ft', 'Small');
  var handpoleBranchFalls = new Waterfall('Handpole Branch Falls', 35.28098, -83.68208, '400 ft', 'Very Small');
  var whiteoakFalls = new Waterfall('Whiteoak Falls', 35.25055, -83.64012, '20 ft', 'Medium');
  var bartramFalls = new Waterfall('Bartram Falls', 35.30352, -83.68256, '30 ft', 'Small');
  var mingoFalls = new Waterfall('Mingo Falls', 35.53179, -83.275347, '120 ft', 'Small');
  var bearCreekFalls = new Waterfall('Bear Creek Falls', 35.47135, -83.57320, '30 ft', 'Small');
  var hurricaneCreekFalls = new Waterfall('Hurricane Creek Falls', 35.05582, -83.50026, '100 ft', 'Very Small');
  var alyssaFalls = new Waterfall('Alyssa Falls', 35.47443, -83.11412, '25 ft', 'Very Small');
  var westForkFalls = new Waterfall('West Fork Falls', 35.47499, -83.12753, '25 ft', 'Small');
  var campbellCreekFalls = new Waterfall('Campbell Creek Falls', 35.47543, -83.11366, '45 ft', 'Small');
  var sassafrasRidgeFalls = new Waterfall('Sassafras Ridge Falls', 35.05766, -83.50146, '40 ft', 'Very Small');
  var picklesimerRockHouseFalls = new Waterfall('Picklesimer Rock House Falls', 35.01847, -83.25339, '45 ft', 'Very Small');
  var dryFalls = new Waterfall('Dry Falls', 35.06884, -83.23869, '75 ft', 'Medium');
  var bridalVeilFalls = new Waterfall('Bridal Veil Falls', 35.07180, -83.22910, '40 ft', 'Very Small');
  var scadinFalls = new Waterfall('Scadin Falls', 35.08484, -83.26736, '30 ft', 'Medium');
  var highFalls = new Waterfall('High Falls', 35.014814, -83.527937, '150 ft', 'Very Small');
  var potholesFalls = new Waterfall('Potholes Falls', 35.01613, -83.12655, '10 ft', 'Medium');
  var caneCreekFalls = new Waterfall('Cane Creek Falls', 35.03392, -83.13734, '25 ft', 'Small');
  var whitewaterFalls = new Waterfall('Whitewater Falls', 35.03378, -83.01616, '350-400 ft', 'Medium');
  var silverRunFalls = new Waterfall('Silver Run Falls', 35.06599, -83.06558, '40 ft', 'Medium');
  var rainbowFalls = new Waterfall('Rainbow Falls', 35.09043, -82.96504, '125 ft', 'Large');
  var turtlebackFalls = new Waterfall('Turtleback Falls', 35.09230, -82.96639, '8 ft', 'Large');
  var socoFalls = new Waterfall('Soco Falls', 35.492421, -83.169676, '30 ft', 'Small');
  var waterfallOnLittleFallBranch = new Waterfall('Waterfall on Little Fall Branch', 35.755048, -82.976646, '40 ft', 'Very Small');
  var mouseCreekFalls = new Waterfall('Mouse Creek Falls', 35.734268, -83.133759, '35 ft', 'Small');
  var waterfallOnWestProngHickeyFork = new Waterfall('Waterfall on West Prong Hickey Fork', 35.995415, -82.717633, '30 ft', 'Very Small');
  var waterfallOnTributaryOfHensleyBranch = new Waterfall('Waterfall on Tributary of Hensley Branch', 35.995502, -82.627316, '25 ft', 'Very Small');
  var elkFalls = new Waterfall('Elk Falls', 36.199009, -81.969009, '40 ft', 'Medium');
  var bubblingSpringBranchCascades = new Waterfall('Bubbling Spring Branch Cascades', 35.31387, -82.90972, ' ft', 'Small');
  var twistingFalls = new Waterfall('Twisting Falls', 36.23273, -81.97531, '75 ft', 'Large');
  var widowsCreekFalls = new Waterfall('Widows Creek Falls', 36.397589, -81.068373, '25 ft', 'Very Small');
  var stoneMountainFalls = new Waterfall('Stone Mountain Falls', 36.380945, -81.035561, '200 ft', 'Small');
  var cascadeFalls = new Waterfall('Cascade Falls', 36.249387, -81.454542, '100 ft', 'Very Small');
  var glenMarieFalls = new Waterfall('Glen Marie Falls', 36.121372, -81.684589, '60 ft', 'Small');
  var thunderholeFalls = new Waterfall('Thunderhole Falls', 36.111253, -81.700773, '15 ft', 'Small');
  var litteLostCoveCreekFalls = new Waterfall('Little Lost Cove Creek Falls', 36.021649, -81.829518, '90 ft', 'Very Small');
  var huntFishFalls = new Waterfall('Hunt-Fish Falls', 36.013976, -81.804286, '15 ft', 'Small');
  var waterfallOnThorpsCreek = new Waterfall('Waterfall on Thorps Creek', 36.000465, -81.757766, '15 ft', 'Very Small');
  var bardFalls = new Waterfall('Bard Falls', 36.000608, -81.805809, '25 ft', 'Small');
  var chestnutCoveBranchFalls = new Waterfall('Chestnut Cove Branch Falls', 36.00305, -81.839443, '30 ft', 'Small');
  var southHarperCreekFalls = new Waterfall('South Harper Creek Falls', 35.980723, -81.810407, '100 ft', 'Small');
  var harperCreekFalls = new Waterfall('Harper Creek Falls', 35.983059, -81.779544, '50 ft', 'Small');
  var waterfallOnBurnthouseBranch = new Waterfall('Waterfall on Burnthouse Branch', 35.951276, -81.822267, '50 ft', 'Very Small');
  var upperCreekFalls = new Waterfall('Upper Creek Falls', 35.960518, -81.86339, '50 ft', 'Small');
  var linvilleFalls = new Waterfall('Linville Falls', 35.949581, -81.92659, '45 ft', 'Large');
  var tomsCreekFalls = new Waterfall('Toms Creek Falls', 35.777575, -82.062421, '60 ft', 'Very Small');
  var crabtreeFalls = new Waterfall('Crabtree Falls', 35.819672, -82.149582, '70 ft', 'Small');
  var fallsOnWhiteOakCreek = new Waterfall('Falls on Whiteoak Creek', 35.826575, -82.220733, '20 ft', 'Medium');
  var roaringForkFalls = new Waterfall('Roaring Fork Falls', 35.75996, -82.191643, '100 ft', 'Small');
  var setrockCreekFalls = new Waterfall('Setrock Creek Falls', 35.749785, -82.228354, '75 ft', 'Very Small');
  var walkerFalls = new Waterfall('Walker Falls', 35.755714, -82.353938, '45 ft', 'Small');
  var douglasFalls = new Waterfall('Douglas Falls', 35.721013, -82.374236, '70 ft', 'Very Small');
  var waterfallOnHickoryBranch = new Waterfall('Waterfall on Hickory Branch', 35.6936, -82.1884, '30 ft', 'Very Small');
  var catawbaFalls = new Waterfall('Catawba Falls', 35.604338, -82.245034, '100+ ft', 'Large');
  var upperCatawbaFalls = new Waterfall('Upper Catawba Falls', 35.601974, -82.247482, '50 ft', 'Large');
  var hickoryNutFalls = new Waterfall('Hickory Nut Falls', 35.43322, -82.25927, '351 ft', 'Very Small');
  var littleBearwallowFalls = new Waterfall('Little Bearwallow Falls', 35.467974, -82.339511, '100+ ft', 'Small');
  var shunkawaukenFalls = new Waterfall('Shunkawauken Falls', 35.272191, -82.214723, '150 ft', 'Very Small');
  var bigBradleyFalls = new Waterfall('Big Bradley Falls', 35.267891, -82.291779, '65 ft', 'Small');
  var pearsonFalls = new Waterfall('Pearson Falls', 35.215118, -82.335953, '90 ft', 'Small');
  var wintergreenFalls = new Waterfall('Wintergreen Falls', 35.1978, -82.583748, '25 ft', 'Small');
  var hookerFalls = new Waterfall('Hooker Falls', 35.201881, -82.623466, '15 ft', 'Large');
  var grassyCreekFalls = new Waterfall('Grassy Creek Falls', 35.19516, -82.608673, '30 ft', 'Small');
  var highFalls = new Waterfall('High Falls', 35.193227, -82.614158, '150 ft', 'Large');
  var bridalVeilFalls = new Waterfall('Bridal Veil Falls', 35.177509, -82.619141, '100 ft', 'Medium');
  var batsonCreekFalls = new Waterfall('Batson Creek Falls', 35.163952, -82.731175, '20 ft', 'Small');
  var highFallsBrevard = new Waterfall('High Falls', 35.349281, -82.732903, '15 ft', 'Medium');
  var discoveryFalls = new Waterfall('Discovery Falls', 35.327096, -82.808805, '75 ft', 'Very Small');
  var logHollowFalls = new Waterfall('Log Hollow Falls', 35.323663, -82.808118, '25 ft', 'Small');
  var twinFallsOfHenryBranch1 = new Waterfall('Twin Falls of Henry Branch 1', 35.3365, -82.76024, '60-80 ft', 'Small');
  var slidingRock = new Waterfall('Sliding Rock', 35.311027, -82.786506, '60 ft', 'Medium');
  var slickRockFalls = new Waterfall('Slick Rock Falls', 35.293201, -82.797523, '30 ft', 'Very Small');
  var cedarRockCreekFalls = new Waterfall('Cedar Rock Creek Falls', 35.278049, -82.79961, '25 ft', 'Small');
  var fallsOnGroganCreek = new Waterfall('Falls on Grogan Creek', 35.270181, -82.809033, '20 ft', 'Small');
  var coveCreekFalls = new Waterfall('Cove Creek Falls', 35.294006, -82.817483, '50 ft', 'Small');
  var tomsSpringFalls = new Waterfall('Toms Spring Falls', 35.288927, -82.826743, '100 ft', 'Small');
  var fallsOnLongBranch = new Waterfall('Falls on Long Branch', 35.279011, -82.8246, '30 ft', 'Small');
  var courthouseFalls = new Waterfall('Courthouse Falls', 35.271614, -82.894193, '45 ft', 'Small');
  var dillFalls = new Waterfall('Dill Falls', 35.28325, -82.943604, '50 ft', 'Small');
  var waterfall1OnSamBranch = new Waterfall('Waterfall 1 on Sam Branch', 35.340881, -82.897818, '20-50 ft', 'Small');
  var waterfallOnWestForkPigeonRiver = new Waterfall('Waterfall on West Fork Pigeon River', 35.338383, -82.903347, '20 ft', 'Medium');
  var flatLaurelCreekCascades = new Waterfall('Flat Laurel Creek Cascades', 35.325699, -82.898123, '200 ft', 'Small');
  var skinnyDipFalls = new Waterfall('Skinny Dip Falls', 35.322342, -82.833847, '20 ft', 'Medium');
  var secondFalls = new Waterfall('Second Falls', 35.322279, -82.846631, '70 ft', 'Small');
  var upperFalls = new Waterfall('Upper Falls', 35.31813, -82.866753, '50 ft', 'Very Small');
  var waterfallInWashHollow = new Waterfall('Waterfall in Wash Hollow', 35.341713, -82.897661, '50 ft', 'Small');
  var shuckRidgeCreekFalls = new Waterfall('Shuck Ridge Creek Falls', 35.295733, -82.861582, '25 ft', 'Small');
  var waterfallBelowWildcatFalls = new Waterfall('Waterfall Below Wildcat Falls', 35.31551, -82.907683, '30 ft', 'Medium');
  var wildcatFalls = new Waterfall('Wildcat Falls', 35.313935, -82.90442, '50 ft', 'Medium');
  var lowerWaterfallOnBubblingSpringBranch = new Waterfall('Lower Waterfall on Bubbling Spring Branch', 35.301411, -82.911995, '20 ft', 'Very Small');
  var upperWaterfallOnBubblingSpringBranch = new Waterfall('Upper Waterfall on Bubbling Spring Branch', 35.300667, -82.91196, '30 ft', 'Very Small');
  var upperDillFalls = new Waterfall('Upper Dill Falls', 35.28325, -82.943604, '50 ft', 'Small');
  var birdRockFalls = new Waterfall('Bird Rock Falls', 35.221175, -82.861245, '15 ft', 'Large');
  var dismalFalls = new Waterfall('Dismal Falls', 35.18232, -82.972923, '75 ft', 'Small');
  var frolictownFalls = new Waterfall('Frolictown Falls', 35.162024, -83.038118, '15 ft', 'Small');
  var grannyBurrellFalls = new Waterfall('Granny Burrell Falls', 35.162837, -83.028719, '15 ft', 'Medium');
  var schoolhouseFalls = new Waterfall('Schoolhouse Falls', 35.163126, -83.006644, '25 ft', 'Medium');
  var greenlandCreekFalls = new Waterfall('Greenland Creek Falls', 35.150836, -82.998131, '50 ft', 'Small');
  var cullowheeFalls = new Waterfall('High Falls', 35.204157, -83.160125, '150 ft', 'Medium');
  var eastatoeFalls = new Waterfall('Eastatoe Falls', 35.109934, -82.817374, '70 ft', 'Small');
  var toxawayFalls = new Waterfall('Toxaway Falls', 35.123428, -82.930687, '100 ft', 'Medium');
  var upperBearwallowFalls = new Waterfall('Upper Bearwallow Falls', 35.102517, -82.943032, '50 ft', 'Small');
  var driftFalls = new Waterfall('Drift Falls', 35.093523, -82.969262, '30 ft', 'Medium');
  var richFalls = new Waterfall('Rich Falls', 35.04984, -82.983783, '35 ft', 'Medium');
  var cullasajaFalls = new Waterfall('Cullasaja Falls', 35.116852, -83.269958, '250 ft', 'Medium');
  var rangerFalls = new Waterfall('Ranger Falls',  35.087828, -83.224435, '35 ft', 'Medium');
  var glenFalls = new Waterfall('Glen Falls', 35.030863, -83.238794, '145 ft', 'Small');
  var secretFalls = new Waterfall('Secret Falls', 35.004516, -83.171363, '50 ft', 'Medium');
  var leatherwoodFalls = new Waterfall('Leatherwood Falls', 35.096481, -83.859337, '25 ft', 'Very Small');
  var moravianFalls = new Waterfall('Moravian Falls', 36.086239, -81.189812, '42 ft', 'Small');
  var mcGalliardFalls = new Waterfall('McGalliard Falls', 335.765131, -81.568809, '40 ft', 'Small');
  var highShoalFalls = new Waterfall('High Shoal Falls', 35.594522, -81.635515, '50 ft', 'Medium');
  var lowerCascadeFalls = new Waterfall('Lower Cascade Falls', 36.41486, -80.268661, '35 ft', 'Small');
  var upperCascadeFalls = new Waterfall('Upper Cascade Falls', 36.395691, -80.269768, '25 ft', 'Very Small');
  var hiddenFalls = new Waterfall('Hidden Falls', 36.399029, -80.26033, '12 ft', 'Very Small');
  var windowFalls = new Waterfall('Window Falls', 36.40097, -80.259499, '27 ft', 'Very Small');
  var toryFalls = new Waterfall('Tory Falls', 36.401182, -80.297914, '50 ft', 'Very Small');

}

//Use the resources you specified to create an object of waterfall locations and conditions
function Waterfall (name, lat, lon, height, watershed) {
  this.name = name;
  this.lat = lat;
  this.lon = lon;
  this.height = height;
  this.watershed = watershed;
	
	var icon;
	var iconBase = 'https://corinneguard.github.io/img/';
	var icons = {
	  green: {
	    icon: iconBase + 'green.png'
	  },
	  yellow: {
	    icon: iconBase + 'yellow.png'
	  },
	  orange: {
	    icon: iconBase + 'orange.png'
	  },
	  red: {
	    icon: iconBase + 'red.png'
	  }
	};
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
    map: map,
    title: this.name
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
//Return the weather conditions and run a function to modify custom markers based on weather condition
  $.get(api, function(response) {
  	console.log(response);
    });

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
    };
      return value;
}