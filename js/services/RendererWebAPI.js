var RendererServerActionCreators = require('../actions/RendererServerActionCreators');
var CrossFrameSessionCreator = require('cross-frame-session-creator');

module.exports = {

	getData: function() {
		var rendererData = JSON.parse(localStorage.getItem('rendererData'));
		RendererServerActionCreators.receiveRendererData(rendererData);
		CrossFrameSessionCreator.create('SESSION_A', {message: 'message from child'})
			.then(function(payload){
				alert(payload.message)
			})
	}

};