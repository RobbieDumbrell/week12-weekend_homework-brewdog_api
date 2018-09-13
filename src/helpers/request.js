const RequestHelper = function (url) {
    this.url = url
  }
  
  RequestHelper.prototype.get = function () {
    return fetch(this.url, {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json());
  };
  
  module.exports = RequestHelper;
  