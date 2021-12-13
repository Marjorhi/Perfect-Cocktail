// Instantiate the class
const ui = new UI(),
      cocktail = new CocktailAPI();

// Create the Event Listeners
function eventListeners(){
    // Document Ready
    document.addEventListener('DOMContentLoaded', documentReady);

    // add event listeners when form is submitted
    const searchForm = document.querySelector('#search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', getCocktails);
    }

    // The results div listeners
    const resultsDiv = document.querySelector('#results');
    if(resultsDiv) {
        resultsDiv.addEventListener('click', resultsDelegation)
    }
}

eventListeners();