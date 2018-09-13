const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('../views/beer_view.js');

const BeerListView = function (container) {
    this.beerListContainer = container;
}

BeerListView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beer-data-ready', (event) => {
        this.allBeers = event.detail;
        console.log(this.allBeers);
        this.render(this.allBeers);
    })

    BeerListView.prototype.render = function (someBeers) {
        someBeers.forEach((beer) => {
            // const beerView = new BeerView(this.container, beer);
            // beerView.render();
            // console.log("beer");
        })
    }
}

module.exports = BeerListView;