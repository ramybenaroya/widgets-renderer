var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var ActionTypes = require('../constants/AppConsts').ActionTypes;

var CHANGE_EVENT = 'change';

var _mainContainerData = {};

var MainContainerStoreUtil = {
	setMainContainerData: function(data){
		_mainContainerData = data.props;
	}
};


var MainContainerStore = assign({}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getData: function() {
		return _mainContainerData;
	}

});

MainContainerStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.type) {

		case ActionTypes.RECEIVE_MAIN_CONTAINER_DATA:
			MainContainerStoreUtil.setMainContainerData(action.mainContainerData);
			MainContainerStore.emitChange();
			break;

		default:
			// do nothing
	}

});

module.exports = MainContainerStore;