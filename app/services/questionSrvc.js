angular.module("app").service("questionSrvc", function($http) {
  this.getAllQuestions = function() {
    return $http.get(
      "https://practiceapi.devmountain.com/api/trivia/questions/"
    );
  };
  this.deleteQ = function(obj) {
    console.log(obj);
    return $http
      .delete(`https://practiceapi.devmountain.com/api/trivia/questions/${obj}`)
      .then(response => console.log(response));
  };
});
