const BeerView = function (beerListContainer, beer) {
    this.beerListContainer = beerListContainer;
    this.beer = beer;
}

BeerView.prototype.render = function () {
    const singleBeerContainer = document.createElement('div');
    singleBeerContainer.className = 'beer-container';
    this.beerListContainer.appendChild(singleBeerContainer);

    const beerName = document.createElement('h3');
    beerName.textContent = this.beer.name;
    singleBeerContainer.appendChild(beerName);

    const beerDesc = document.createElement('p');
    beerDesc.textContent = this.beer.description;
    singleBeerContainer.appendChild(beerDesc);

    const beerImg = document.createElement('img');
    beerImg.src = this.beer.image_url;
    singleBeerContainer.appendChild(beerImg);

    const beerABV = document.createElement('p');
    beerABV.textContent = `${this.beer.abv}%`;
    singleBeerContainer.appendChild(beerABV)


}

module.exports = BeerView;