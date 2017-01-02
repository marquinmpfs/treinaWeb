angular.module("minhaPizza").config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when('/:nome', {
            templateUrl: 'views/novo_sabor.html',
            controller: 'novoSaborCtrl'
        })
        .when('/', {
            templateUrl: 'views/novo_sabor.html',
            controller: 'novoSaborCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

}])