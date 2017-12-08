angular
  .module("app")
  .controller("createNewCtrl", function($scope, questionSrvc) {
    $scope.showModal = false;

    $scope.showModalFunction = function() {
      $scope.showModal = !$scope.showModal;
    };
    $scope.newPost;
    $scope.newFunction = function() {
      questionSrvc.postNewQuestion($scope.newPost);
      $scope.showModal = !$scope.showModal;
    };
  });
