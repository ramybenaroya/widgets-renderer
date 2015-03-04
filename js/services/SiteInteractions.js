var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');


module.exports = assign({}, EventEmitter.prototype, {
	init: function(){
		var siteInteractions = this;
		$(function(){
			$('body').on('mouseover.inout', '.rect', function(event){
				if ($(this).is('.placeholder')){
					return;
				}
				var $this = $(this),
					$placeholder = $('<div class="rect placeholder"></div>');
				$this.after($placeholder);

				$placeholder.on('click.inout', function(){
					siteInteractions.emit('ADD_CONTAINER', {
						after: $this.attr('id')
					});
				});

				$(this).on('mouseout.inout', function(){
					setTimeout(function(){
						$placeholder.remove();
					}, 500);
				});
			})
		});
	}
});