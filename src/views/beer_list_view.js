const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('../views/beer_view.js');

const BeerListView = function (beerListContainer) {
    this.beerListContainer = beerListContainer;
}

BeerListView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beer-data-ready', (event) => {
        this.allBeers = event.detail;
        this.render(this.allBeers);
    })

    BeerListView.prototype.render = function (someBeers) {
        someBeers.forEach((beer) => {
            const beerView = new BeerView(this.beerListContainer, beer);
            beerView.render();
        })
    }
}

module.exports = BeerListView;