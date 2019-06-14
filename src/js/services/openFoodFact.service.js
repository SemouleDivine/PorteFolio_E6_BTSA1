/**
 * Le service va interroger l'API d'openFoodFact
 * $http : service qui gère kes appels http
 */
app.service('openFoodFactSvc', ['$http', '$window', function($http, $window){

    /**
     * fonction de recherche sur l'api
     * @param input {string} Saisie de l'utilisateur
     * @returns {any} La promesse http
     */
    this.search = function(input){
        return $http({
            methode: 'GET',
            url: 'https://fr.openfoodfacts.org/cgi/search.pl?search_terms='+ input +'&search_simple=1&action=process&json=1'
        })
    }

        /**
     * Charge la liste des produits depuis le localstorage
     * @returns {array} liste des produits
     */
    this.loadProducts = function(){
        let productsString = $window.localStorage.getItem('products');

        if(productsString === null || productsString === undefined){
            return [];
        }else{
            // Converti la chaine de caractère en objet
            return JSON.parse(productsString);
        }
    }

    /**
     * Sauvegarde le tableau de produits
     * @param recipestoSave {array} liste des produits
     */
    this.saveProducts = function(productstoSave){
        $window.localStorage.setItem('products',
            JSON.stringify(productstoSave));
    }

    /**
     * Met à jour un produit dans le tableau de produits
     */
    this.updateProducts = function(productToUpdate){

        let products = this.loadProducts();
        
        // Recherche du produit
        for(let i = 0; i < products.length; i++){
            if(products[i].name === productToUpdate.name){
                // Remplacement du produit dans le tableau à la même position
                products.splice(i, 1, productToUpdate);
                this.saveRecipes(products);
                break;
            }
        }

    }
}])