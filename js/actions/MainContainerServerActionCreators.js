var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AppConsts').ActionTypes;

module.exports = {

	receiveMainContainerData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: ActionTypes.RECEIVE_MAIN_CONTAINER_DATA,
		  mainContainerData: payload
		});
	}

};