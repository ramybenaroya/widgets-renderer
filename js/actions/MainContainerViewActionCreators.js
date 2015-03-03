var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

	requestMainContainerData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: "REQUEST_MAIN_CONTAINER_DATA"
		});
	}

};