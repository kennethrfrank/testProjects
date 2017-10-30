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
		  	var map = new google.maps.Map($('#map'), {
		          zoom: 12,
		          center: google.maps.LatLng(33, -96)
		        });
		var results = [];
		var lats = [];
		var longs = [];
		//var sa = "address="+streetAdd.trim().replace(" ", "+");
		var zips = [75034, 93300, 37235];

		for(var i = 0 ; i<zips.length; i++){
			var zipC = "zip="+zips[i];
			
		
			fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+zipC+"&key=AIzaSyAVEhxwJx2QmvpQsTvOT0jbpGlwA2cAS6o").then((response) => response.json()).then(function(response){
				results.push(response.results);
				
				// lats[i] = response.results[0].geometry.location.lat;
				// longs[i] = response.results[0].geometry.location.lng;
				// 	var uluru = {lat: lats[i], lng : longs[i]}
			var marker = new google.maps.Marker({
		          			position: google.maps.LatLng(lats[i], longs[i]),
			          		map: map
			});
					


			}, function(){
				console.log("Could not consolidate data at this time.");
			});

		
			
		}
}