y
//var playgroud =
angular.module('droppingObjApp', ['basketComp'])
.controller('playgroundCtrl', function($scope, $locale) {
    var dropped = this;
    dropped.objs = [
        {type:'coffee', posx:20, posy:90},
        {type:'kdf7', posx:60, posy:90}
    ];
    
    $scope.clearMenu = function() {
        angular.forEach(dropped.objs, function(val, key){
            val.selected = false;
        });
    };
        
    $scope.drop = function(typename) {
        var newobj = {type: typename, 
                      posx:Math.random() * 99, 
                      posy:-10
                     };
        dropped.objs.push(newobj);
        setTimeout(function(){
            newobj.posy = 90;
            $scope.$apply();
        }, 100);
    }
    
    $scope.$on('drop', function(event, data){
        $scope.drop(data.type);
    });
    
    $scope.droppedclick = function(item, event) {
        if (item.selected) {
            var index = dropped.objs.indexOf(item);
            dropped.objs.splice(index, 1);              
        } else {
            event.stopPropagation();
            event.preventDefault();
            $scope.clearMenu();
            item.selected = true;            
        }
    }
    
});
