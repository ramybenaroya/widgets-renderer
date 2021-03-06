var $ = require('jquery');

module.exports = {
	createElement: function(options){
		options = options || {};
		var $newElement = $('<div></div>');
		var $parent = $(options.parentSelector);
		var $before = $(options.beforeSelector);
		if ($before.length === 1){
			$before.before($newElement);
		} else if ($parent.length === 1){
			$parent.append($newElement);
		}
		return $newElement.get(0);
	},

	isLegalPosition: function(options){
		options = options || {};
		var $parent = $(options.parentSelector);
		var $before = $(options.beforeSelector);
		return $before.length === 1 || $parent.length === 1
	},

	removeElement: function(){

	}
}