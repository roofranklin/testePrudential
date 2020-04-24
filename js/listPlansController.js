testePrudential.controller('listPlans', function($scope, $http){

    $scope.plans = [];
    
    $http
    .get("js/json/plans.json")
    .success(function(data){
        $scope.plans = data;
        
    })
    .error(function(){
        alert("Não foi possível carregar os dados");
    });

});