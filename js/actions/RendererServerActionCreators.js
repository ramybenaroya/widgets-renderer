var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

	receiveRendererData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: "RECEIVE_RENDERER_DATA",
		  rendererData: payload
		});
	}

};