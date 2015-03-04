var AppDispatcher = require('../dispatcher/AppDispatcher');
var MainContainerWebAPI = require('../services/MainContainerWebAPI');
var ActionTypes = require('../constants/AppConsts').ActionTypes
module.exports = {

	requestMainContainerData: function(payload) {
		AppDispatcher.handleServerAction({
		  type: ActionTypes.REQUEST_MAIN_CONTAINER_DATA
		});
		MainContainerWebAPI.getData();
	}

};