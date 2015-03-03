var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

	receiveMainContainerData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: "RECEIVE_MAIN_CONTAINER_DATA",
		  mainContainerData: payload
		});
	}

};