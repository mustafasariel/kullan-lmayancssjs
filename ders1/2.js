var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.count = 0;
    $scope.myFunction = function() {
        $scope.count++;
    }
    $scope.f1=function(a,b)
    {
        return a+b;
    }

    $scope.f2=function(a,b)
    {
        return a+b;
    }
});