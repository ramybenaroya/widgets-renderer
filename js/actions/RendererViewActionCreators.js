var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConsts').ActionTypes;
var RendererWebAPI = require('../services/RendererWebAPI');

module.exports = {
	
	requestRendererData: function(payload){
		AppDispatcher.handleServerAction({
		  type: ActionTypes.RECEIVE_RENDERER_DATA,
		  rendererData: payload
		});
		RendererWebAPI.getData();	
	}
};