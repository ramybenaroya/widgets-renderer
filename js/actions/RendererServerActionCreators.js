var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConsts').ActionTypes;

module.exports = {

	receiveRendererData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: ActionTypes.RECEIVE_RENDERER_DATA,
		  rendererData: payload
		});
	}
};