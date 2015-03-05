var RendererServerActionCreators = require('../actions/RendererServerActionCreators');
var Crosser = require('crosser');

var crosser = new Crosser(window.parent, 'http://localhost:4200');

module.exports = {

	getData: function() {
		var rendererData = JSON.parse(localStorage.getItem('rendererData'));
		RendererServerActionCreators.receiveRendererData(rendererData);
		crosser.trigger('SESSION_A', {message: 'message from child'})
			.then(function(payload){
				alert(payload.message)
			});
	}

};