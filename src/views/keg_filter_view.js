const PubSub = require('../helpers/pub_sub.js');

const KegFilterView = function (selectElement) {
    this.selectElement = selectElement;
}

KegFilterView.prototype.bindEvents = function () {
    this.selectElement.addEventListener('change', (event) => {
        const filterSelected = event.target.value;
        PubSub.publish('KegFilterView:filter-selected', filterSelected);
    })
}


module.exports = KegFilterView;