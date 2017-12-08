angular.module("app").service("questionSrvc", function($http) {
  this.getAllQuestions = function() {
    return $http.get(
      "https://practiceapi.devmountain.com/api/trivia/questions/"
    );
  };
});
