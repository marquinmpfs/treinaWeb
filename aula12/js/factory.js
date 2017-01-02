angular.module("minhaPizza")

.factory("nomesFct", function(){
        var vogais = ['a','e','i','o','u'];
        var consoantes = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','w','x','y','z'];

        function aleatorio(maximo){
            return Math.floor(Math.random() * maximo);
        }

        function letraAleatoria(letras){
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