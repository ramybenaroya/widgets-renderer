var RendererServerActionCreators = require('../actions/RendererServerActionCreators');

module.exports = {

  getData: function() {
    var rendererData = JSON.parse(localStorage.getItem('rendererData'));
    RendererServerActionCreators.receiveRendererData(rendererData);
  }

};