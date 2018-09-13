const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
    // console.log("JS Loaded");

    const beerListContainer = document.querySelector('#beer-list-container')
    const beerListView = new BeerListView(beerListContainer);
    beerListView.bindEvents();

    
    const beers = new Beers();
    beers.getAllData();


    


})