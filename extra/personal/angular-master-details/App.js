angular.module('medsApp', ['ngRoute', 'ngSanitize'])

  .config(function($routeProvider, $locationProvider) {

    $routeProvider.

    when("/", {

      templateUrl: 'detail.html',

      controller: MainCntl

    }).

    when("/detail/:id", {

      templateUrl: 'detail.html',

      controller: DetailCntl

    }).

    otherwise({

      redirectTo: '/'

    });

    $locationProvider.html5Mode(true);

  })

  .service('db', function() {

    var meds = [{

      "id": "1",

      "name": "Judith",

      "dob":"Jan 13th 1990"

    }, {

      "id": "2",

      "name": "Fiyona",

      "dob":"Aug 03rd 1991"

    }, {

      "id": "3",

      "name": "James",

      "dob":"March 12th 1970"

    }];


    return {

      getMeds: function(medid) {

        if (medid === 0) {

          return meds;

        } else {

          return meds[medid - 1];

        }

      }

    };

  });


/*AppCntl.$inject = ['$scope', '$route'];

function AppCntl($scope, $route, $location) {

  $scope.$route = $route;

}*/


function MainCntl($scope, db, $route, $location) {

  $scope.meds = db.getMeds(0);


  //$scope.message = "ID = " + $route.current.params.id;

}

 


function DetailCntl($scope, db, $route, $location) {

  //$scope.meds = db.getMeds($route.current.params.id);

  $scope.pt = db.getMeds($route.current.params.id);

}



