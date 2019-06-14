/**
 * Ici on configure le routage
 */

 app.config(['$routeProvider',
    function($routeProvider){
        // Configuration des routes
        $routeProvider
            // On dit que le chemin peut prendre un paramètre qui est l'id
            .when('/boutDeLURL', {
                templateUrl:'partial/recipes.html'
            })
            .when('/',{
                templateUrl:'partial/cellar.html'
            })
            .otherwise({
                redirectTo:'/recipes'
            })
    }
]);
