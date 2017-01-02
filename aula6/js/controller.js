angular.module("minhaPizza")

.controller("novoSaborCtrl", ['$scope', '$routeParams', 'nomesFactory', function ($scope, $routeParams, nomesFactory) {

	$scope.Pizza = {
		nome: $routeParams.nome,
		formato: "Redonda",
		local: "Entrega",
		endereco: "",	
		ingredientes: [],
		total: 0
	};

	$scope.Ingrediente = {
		novo: "",
		inserir: function(){
			$scope.Pizza.ingredientes.push(this.novo);
			this.novo = "";
		},
		remover: function(index){
			$scope.Pizza.ingredientes.splice(index, 1);
		}
	};

	$scope.formatoPizza = function () {
		return 'pizza-formato ' + ($scope.Pizza.formato === "Redonda" ? "pizza-redonda" : "pizza-quadrada");
	};

	$scope.precoPizza = function(){
		var total = $scope.Pizza.ingredientes.length * 1.5;
		total += ($scope.Pizza.formato === 'Redonda' ? 2 : 5);
		total += ($scope.Pizza.local === 'Entrega' ? 5 : 0);
		return total;
	};

	$scope.nomeAleatorio = function(){
		$scope.Pizza.nome = nomesFactory();
	}
}]);
