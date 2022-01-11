var app = angular.module("myApp", []);
app.controller("myController", function ($scope, $rootScope) {
  $scope.selectedChangeStudent = null;
  $scope.Students = [
    { id: 1, name: "mustafa", description: "bartında doğdu, 40 yaşında" },
    { id: 2, name: "emirhan", description: "istanbulda doğdu, 11 yaşında" },
    { id: 3, name: "kerem", description: "istanbulda doğdu, 7 yaşında" },
  ];

  $scope.Gonder = function (data) {
    console.log(data);
    $rootScope.$broadcast("buyur", data);
  };

  $scope.$on("kaydet", function (evt, data) {
    $scope.selectedChangeStudent = data;

  });
});

app.controller("myDetailController", function ($scope, $rootScope) {
  $scope.student = null;

  $scope.$on("buyur", function (evt, data) {
    console.log("buyur");
    $scope.student = data;
  });

  $scope.Kaydet = function (data) {
    console.log("Kaydet");
    console.log(data);
    $rootScope.$broadcast("kaydet", data);
  };
});
