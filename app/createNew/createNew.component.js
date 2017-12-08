angular.module("app").component("createNew", {
  templateUrl: "app/createNew/createNew.html",
  controllerAs: "createNewCtrl",
  controller: function(questionSrvc, $state, $rootScope) {
    this.allQuestions = "";
    this.currentIndex = 0;
    this.createNewQuestion = questionSrvc
      .getAllQuestions()
      .then(
        response => (
          (this.allQuestions = response.data), console.log(response.data)
        )
      );
    this.showModal = false;
    $rootScope.showModal = this.showModal;

    console.log(this.allQuestions);
    this.showModalFunction = function(ind) {
      this.showModal = !this.showModal;
      this.currentIndex = ind;
    };
    this.deleteQuestion = function(ind) {
      console.log(this.allQuestions[ind]._id);
      questionSrvc.deleteQ(this.allQuestions[ind]._id);
      this.showModal = !this.showModal;
      this.allQuestions.splice(ind, 1);
    };
  }
});
