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


var app = angular.module('myModule', []);
var MainController = function($scope, $http){
	var onUserComplete = function(response){
		$scope.user = response.data; 
		$http.get($scope.user.repos_url).then(onRepos, onError);
	};

	var onRepos = function(response){
		$scope.repos = response.data;
	};

	var onError = function(response){
		$scope.error = "Could not consolidate data at this time.";
	};
	$scope.search = function(username){
		$http.get("https://api.github.com/users/"+username).then(onUserComplete, onError);
	};
	
	var my = {
		lastName: "Frank",
		firstName: "Kenny ",
		middleName: "Rudolph "
	};
	$scope.username = "angular";
	$scope.message = "Yo!";
	$scope.my = my; 
};
app.controller("MainController", MainController);
