const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('../views/beer_view.js');

const BeerListView = function (beerListContainer) {
    this.beerListContainer = beerListContainer;
    this.allBeers = null;
    this.filteredBeers = null;
}

BeerListView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beer-data-ready', (event) => {
        this.allBeers = event.detail;
        this.render(this.allBeers);
    })

    PubSub.subscribe('KegFilterView:filter-selected', (event) => {
        const filterSelected = event.detail;
        let selectedFilteredBeers = null;
        if (filterSelected === 'keg.png') {
            selectedFilteredBeers = this.allBeers.filter((beer) => {
                return (beer.image_url.slice(-7) === filterSelected)
            })
        } else if (filterSelected === 'bottles') {
            selectedFilteredBeers = this.allBeers.filter((beer) => {
                return (beer.image_url.slice(-7) !== 'keg.png')
            })
        } else {
            selectedFilteredBeers = this.allBeers;
        }
        
        this.beerListContainer.innerHTML = '';
        this.filteredBeers = selectedFilteredBeers;
        this.render(this.filteredBeers);
    })
}

BeerListView.prototype.render = function (someBeers) {
    someBeers.forEach((beer) => {
        const beerView = new BeerView(this.beerListContainer, beer);
        beerView.render();
    })
}

module.exports = BeerListView;