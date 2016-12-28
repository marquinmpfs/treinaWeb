angular.module("minhaPizza")

.filter("reaisFilter", function(){
	return function(input){
    return ("R$ " + input.toFixed(2).replace(".", ","));
	};
});
