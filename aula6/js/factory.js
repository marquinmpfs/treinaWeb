angular.module("minhaPizza")

.factory("nomesFactory", function () {
	var vogais = ['A', 'E', 'I', 'O', 'U'];
	var consoantes = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

	function aleatorio(maximo){
		return Math.floor(Math.random() * maximo);
	}

	function letraAleatoria (letras){
		var index = aleatorio(letras.length);
		return letras[index];

	}

	function geraNome(){
		var nome = '',
			comprimento = aleatorio(8) + 2;

		for(var i = 0; i < comprimento; i++){
			if(i % 2 == 0){
				nome += letraAleatoria(consoantes);
			}else{
				nome += letraAleatoria(vogais);
			}
		}

		nome = nome.charAt(0).toUpperCase() + nome.slice(1);

		return nome;
	}

	return geraNome;

})