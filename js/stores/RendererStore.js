var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MainContainerServerActionCreators = require('../actions/MainContainerServerActionCreators');
var assign = require('object-assign');
var ActionTypes = require('../constants/AppConsts').ActionTypes;

var CHANGE_EVENT = 'change';

var _rendererData = {};

var RendererStoreUtil = {
	setData: function(rendererData){
		_rendererData = rendererData;
	}
};


var RendererStore = assign(
	{}, EventEmitter.prototype, {

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	/**
	 * @param {function} callback
	 */
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	getData: function(){
		return _rendererData;
	}

});

RendererStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.type) {

		case ActionTypes.RECEIVE_RENDERER_DATA:
			RendererStoreUtil.setData(action.rendererData);
			RendererStore.emitChange();
			break;

		default:
			// do nothing
	}

});

module.exports = RendererStore;