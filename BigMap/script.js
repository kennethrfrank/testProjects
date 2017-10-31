// function createWorker(){
// 	var workCount = 0;
// 	var task1 = function(){
// 		workCount += 1;
// 		console.log("task1" + workCount);
// 	};
// 	var task2 = function(){
// 		workCount += 1;
// 		console.log("task2" + workCount);
// 	};

// 	return{
// 		job1: task1,
// 		job2: task2
// 	};
// }
// var worker = createWorker();
// worker.job1();
// worker.job2();
// worker.job2();
// worker.job2();




	
function initMap(){
	var uluru = {lat: 40.137, lng : -97.85}
		  	var map = new google.maps.Map(document.getElementById('map'), {
		          zoom: 4,
		          center: uluru
		        });

		var results = [];
		var markers = [];
		var x;
				var y;
		//var sa = "address="+streetAdd.trim().replace(" ", "+");
		var zips = [75034, 93300, 37235, 92200, 38321, 57654];

		for(var i = 0 ; i<zips.length; i++){
			var zipC = "zip="+zips[i];
			
				
			fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+zipC+"&key=AIzaSyAVEhxwJx2QmvpQsTvOT0jbpGlwA2cAS6o").then((response) => response.json()).then(function(response){
				results.push(response.results);
				
				x = response.results[0].geometry.location.lat;
				y = response.results[0].geometry.location.lng;
				
			var Muluru = {lat: x, lng : y}
					var marker = new google.maps.Marker({
		          			position: Muluru,
		          			map: map,
			          		label: "map"
			});
					markers.push(marker);
					var bool = (i >= (zips.length - 1)) && (markers.length>=6);

					if(bool){
						console.log("cluster triggered");
						cluster(map, markers);

					}

			}, function(){
				console.log("Could not consolidate data at this time.");
			});

		
			
		}

      	}

function cluster(map, markers){
	var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	return markerCluster;
}


$(document).ready();