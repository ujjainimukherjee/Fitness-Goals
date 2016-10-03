'use strict';

angular.module('programApp')   
    .controller('programMainCtrl', ['$rootScope','$scope','$http', 'programService','$route', '$location', function($rootScope,$scope,$http,programService,$route,$location){
      $scope.loadProgramBluePrintsData = function(){        
         programService.getAllProgramBluePrints().success(function(response){         
              $scope.programs = response.program_blueprints;
              $rootScope.programs = response.program_blueprints;
              $scope.chunkedData = $scope.chunk($scope.programs, 2);              
           });
    }

    // chunkify the array into sizes
    $scope.chunk = function(arr, size) {
      var newArr = [];
      // sort the array by display_order
      arr.sort(function(a,b){
        return a.display_order - b.display_order;
      })
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      return newArr;
    }      
    $scope.loadProgramBluePrintsData();
   }])

   .controller('programDetailCtrl', ['$rootScope','$scope','$http', 'programService', '$routeParams',function($rootScope,$scope,$http,programService,$routeParams){
        $scope.guid = $routeParams;
        var currResponse = $rootScope.programs;
        var filteredList = currResponse.filter(function(elm,idx,arr){
          return elm.guid == $scope.guid.guid;
        })

        var selectedItem = filteredList[0]; 
        $scope.selectedItem = selectedItem;       
        // get icon,title,description        
        $scope.iconUrl = selectedItem.icon_url;
        $scope.title = selectedItem.title;
        $scope.description = selectedItem.description;
        $scope.incentiveDesc = selectedItem.incentive_description == null ? 'There are no rewards or earnings for this program' : selectedItem.incentive_description;
       

        if (selectedItem.goals.length != 0){           
            var goalids = selectedItem.goals.guid;
            programService.getAllProgramGoals().success(function(response){
              $scope.goalsData = response;             
              if (selectedItem.goals.length == 1){ 
                var incentiveVal = response.goals.filter(function(elm){
                  return elm.guid == selectedItem.goals[0].guid;
                })              
                $scope.incentiveVal = incentiveVal[0].incentive_value;
             }else{
                $scope.multipleGoals = true;
                var incentiveVals = 0,goalObjects = [];              
                selectedItem.goals.forEach(function(elm){
                   var selItm = elm;
                   var selectedGoal = response.goals.filter(function(elm){
                      return elm.guid == selItm.guid;
                    })
                  goalObjects.push(selectedGoal[0]);
                 incentiveVals += selectedGoal[0].incentive_value;
                })
                $scope.incentiveVal = incentiveVals;                
                $scope.goalItems = goalObjects;
            }  

          })// end of success callback
        }
        
        $scope.goBack = function(){
           window.history.back();
        }
    }])


    