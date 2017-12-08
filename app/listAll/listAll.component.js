angular.module("app").component("listAll", {
  templateUrl: "app/listAll/listAll.template.html",
  controllerAs: "listAllCtrl",
  controller: function(questionSrvc, $state, $rootScope) {
    this.test = "Hello Chris, you ain`t getting no function~";
    this.buttonClicker = function() {
      console.log("hi");
    };
    this.allQuestions = "";

    console.log($state);
    this.getQuestions = questionSrvc
      .getAllQuestions()
      .then(
        response => (
          (this.allQuestions = response.data), console.log(response.data)
        )
      );
    this.showModal = true;
    $rootScope.showModal = this.showModal;
    console.log($rootScope);

    $rootScope.showModalFunction = function() {
      this.showModal = !this.showModal;
      console.log(this.showModal);
    };
  }
});
