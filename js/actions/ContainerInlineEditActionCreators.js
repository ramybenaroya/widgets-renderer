var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

	addContainer: function(payload) {
		AppDispatcher.handleViewAction({
			type: "ADD_CONTAINER",
			newElement: payload
		});
	}

};