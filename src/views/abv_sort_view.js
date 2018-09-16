const PubSub = require('../helpers/pub_sub.js');

const ABVSortView = function (sortAscButton, sortDescButton) {
    this.sortAscButton = sortAscButton;
    this.sortDescButton = sortDescButton;
}

ABVSortView.prototype.bindEvents = function() {
    this.sortAscButton.addEventListener('click', (event) => {
        PubSub.publish('ABVSortView:sort-abv', 'ascending');
    })
    this.sortDescButton.addEventListener('click', (event) => {
        PubSub.publish('ABVSortView:sort-abv', 'descending');
    })
}

module.exports = ABVSortView;