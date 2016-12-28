angular.module("minhaPizza")

.controller("novoSaborCtrl", ['$scope', function ($scope) {

	$scope.Pizza = {
		nome: "",
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
	}

	$scope.formatoPizza = function () {
		return 'pizza-formato ' + ($scope.Pizza.formato === "Redonda" ? "pizza-redonda" : "pizza-quadrada");
	}
}]);
