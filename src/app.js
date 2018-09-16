const Beers = require('./models/beers.js');
const BeerListView = require('./views/beer_list_view.js');
const KegFilterView = require('./views/keg_filter_view.js');
const ABVSortView = require('./views/abv_sort_view.js');

document.addEventListener('DOMContentLoaded', () => {
    // console.log("JS Loaded");

    const beers = new Beers();
    beers.getAllData();

    const kegFilter = document.querySelector('#keg-filter');
    const kegFilterView = new KegFilterView(kegFilter);
    kegFilterView.bindEvents();

    const sortABVAscButton = document.querySelector('#abv-asc-button');
    const sortABVDescButton = document.querySelector('#abv-desc-button');
    const aBVSortView = new ABVSortView(sortABVAscButton, sortABVDescButton);
    aBVSortView.bindEvents();

    const beerListContainer = document.querySelector('#beer-list-container')
    const beerListView = new BeerListView(beerListContainer);
    beerListView.bindEvents();

})