angular
  .module("app", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
      name: "listAll",
      url: "/",
      component: "listAll"
    });
  });
