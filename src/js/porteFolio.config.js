/**
 * Ici on configure le routage
 */

 app.config(['$routeProvider',
    function($routeProvider){
        // Configuration des routes
        $routeProvider
            // On dit que le chemin peut prendre un paramètre qui est l'id
            .when('/accueil', {
                templateUrl:'partial/accueil.html'
            })
            .when('/competences',{
                templateUrl:'partial/competences.html'
            })
            .when('', {

            })
            .when('', {

            })
            .otherwise({
                redirectTo:'/partial/accueil.html'
            })
    }
]);
