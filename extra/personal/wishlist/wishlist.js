angular.module('carApp', ['ui.bootstrap'])
       .controller('carController', ['$scope',function($scope){       	  
       	   $scope.cars = dreamCars;
       	   $scope.selectDefault = dreamCars[0];
       	   $scope.newcars = [];

       	   $scope.close = function(){
       	   	$scope.showModal = false;
       	   }


       	   $scope.addCar = function() {
       	   			if ($scope.cars.length == 0) {
						/*$('.no-cars-alert-text').show();
						$('.carList, #carList-ddl, #add-car-btn').hide();*/
						//alert('there are no cars');
						$scope.showModal = true;
						return;
					}
					var newcar = $scope.selectDefault;
					// add the selected car to the wishlist array
					$scope.newcars.push(newcar);
					// remove the car from cars array and rebind data to drop down list
					var index = $scope.cars.indexOf(newcar);
					$scope.cars.splice(index, 1);

					$scope.selectDefault = $scope.cars[0];
				}

		  $scope.deleteItem = function(i) {	
		  	  var deletedCarMake = $('.wishlist div:eq(' + i + ')').find('.wishlist-car-make').text();
			  var deletedCarModel = $('.wishlist div:eq(' + i + ')').find('.wishlist-car-model').text();
			  var car = {
						make : deletedCarMake,
						model : deletedCarModel
					};
			 $scope.cars.push(car);
			 $scope.selectDefault = $scope.cars[0];
			 $scope.newcars.forEach(function(elm,idx,arr){
			 	if (elm.make == deletedCarMake && elm.model == deletedCarModel){
			 		$scope.newcars.splice(idx,1);
			 	}
			 })
		  
		  }	


      
     }]) 