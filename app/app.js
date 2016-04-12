var app = angular.module('AppTeste',['ngRoute']);

var serviceBase = 'http://localhost:8080/';

app.config(function ($routeProvider) {
  
     $routeProvider.when("/pagina1", {
        controller: "paginasController",
        templateUrl: "/app/views/pagina1.html"
    });

    $routeProvider.when("/pagina2", {
        controller: "paginasController",
        templateUrl: "/app/views/pagina2.html"
    });

    $routeProvider.when("/pagina3", {
        controller: "paginasController",
        templateUrl: "/app/views/pagina3.html"
    });
    
    $routeProvider.otherwise({ redirectTo: "/pagina1" });

});

app.constant('AppSettings',{
    apiServiceBase: serviceBase
});