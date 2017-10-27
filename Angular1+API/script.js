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

function initMap(x, y) {
		
		        var uluru = {lat: x, lng: y};
		        var map = new google.maps.Map(document.getElementById('map'), {
		          zoom: 12,
		          center: uluru
		        });
		        var marker = new google.maps.Marker({
		          position: uluru,
		          map: map
		        });

}
var app = angular.module('myModule', []);
var MainController = function($scope, $http){
	var onUserComplete = function(response){
		$scope.lat = response.data.results[0].geometry.location.lat;
		$scope.long = response.data.results[0].geometry.location.lng;
		initMap($scope.lat, $scope.long);
		$scope.x = response.data.results[0].formatted_address;
		
		console.log($scope.lat +" " + $scope.long);
	};

	var onError = function(response){
		$scope.error = "Could not consolidate data at this time.";
	};
	$scope.search = function(streetAdd, zip){
	
		var sa = "address="+streetAdd.trim().replace(" ", "+");
		var zipC = "zip="+zip;

		var stringify = sa + ",+" + zipC ;

		$http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+stringify+"&key=AIzaSyAVEhxwJx2QmvpQsTvOT0jbpGlwA2cAS6o").then(onUserComplete, onError);
	};
	
	var my = {
		lastName: "Frank",
		firstName: "Kenny ",
		middleName: "Rudolph "
	};
	$scope.zip = 75034;
	$scope.message = "Yo!";
	$scope.my = my; 

	
};
app.controller("MainController", MainController);

