var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var MainContainerServerActionCreators = require('../actions/MainContainerServerActionCreators');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _rendererData = {};

var RendererStoreUtil = {
	setData: function(rendererData){
		_rendererData = rendererData;
	}
};


var RendererStore = _.extend({}, EventEmitter.prototype, {

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

		case "RECEIVE_RENDERER_DATA":
			RendererStoreUtil.setData(action.rendererData);
			RendererStore.emitChange();
			break;

		default:
			// do nothing
	}

});

module.exports = RendererStore;