angular.module("minhaPizza")

.directive("radioButton", function(){
  return{
    restrict: "E",
    templateUrl: 'directives/radioButton.html',
    scope: {
      options: '=options',
      value: '=value'
    },
    link: function(scope, elem, attrs){
      scope.selecionarItem = function(item){
        scope.value = item;
      }

      scope.classes = function(item){
        if(scope.value === item){
          return " isSelected ";
        }
        return "";
      }
    }
  }
})
