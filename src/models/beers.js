const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Beers = function () {
    this.allBeers = [];
}

Beers.prototype.getAllData = function () {
    this.getFirstData();
    // this.getSecondData();
    // this.getThirdData();
    // console.log(this.allBeers);
    // PubSub.publish('Beers:beer-data-ready', this.allBeers);
}

Beers.prototype.getFirstData = function () {
    const request1 = new Request('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    request1.get()
        .then((data) => {
            this.allBeers.push.apply(this.allBeers, data);
            PubSub.publish('Beers:beer-data-ready', this.allBeers);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Beers.prototype.getSecondData = function () {
//     const request2 = new Request('https://api.punkapi.com/v2/beers?page=2&per_page=80');
//     request2.get()
//         .then((data) => {
//             this.allBeers.push.apply(this.allBeers, data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// Beers.prototype.getThirdData = function () {
//     const request3 = new Request('https://api.punkapi.com/v2/beers?page=3&per_page=80');
//     request3.get()
//         .then((data) => {
//             this.allBeers.push.apply(this.allBeers, data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

module.exports = Beers;