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

    PubSub.subscribe('ABVSortView:sort-abv', (event) => {
        const sortABVselection = event.detail;

        if (this.filteredBeers === null) {
            if (sortABVselection === 'ascending') {
                this.allBeers.sort(this.compareABVAscending)
            } else if (sortABVselection === 'descending') {
                this.allBeers.sort(this.compareABVDescending)
            }
            this.beerListContainer.innerHTML = '';
            this.render(this.allBeers);
        } else {
            if (sortABVselection === 'ascending') {
                this.filteredBeers.sort(this.compareABVAscending)
            } else if (sortABVselection === 'descending') {
                this.filteredBeers.sort(this.compareABVDescending)
            }
            this.beerListContainer.innerHTML = '';
            this.render(this.filteredBeers);
        }
    })
}

BeerListView.prototype.render = function (someBeers) {
    someBeers.forEach((beer) => {
        const beerView = new BeerView(this.beerListContainer, beer);
        beerView.render();
    })
}

BeerListView.prototype.compareABVAscending = function (beer1, beer2) {
    if (beer1.abv > beer2.abv) {
        return 1
    } else if (beer1.abv < beer2.abv) {
        return -1
    } else {
        return 0
    }
}

BeerListView.prototype.compareABVDescending = function (beer1, beer2) {
    if (beer1.abv < beer2.abv) {
        return 1
    } else if (beer1.abv > beer2.abv) {
        return -1
    } else {
        return 0
    }
}

module.exports = BeerListView;