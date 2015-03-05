import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'iframe',
	attributeBindings: ['src'],
	bindLoadEvent: function(){
		Ember.run.scheduleOnce('afterRender', this, function(){
			this.sendAction('onLoad', this.$().get(0).contentWindow);
		}.bind(this));
	}.on('didInsertElement'),
	unbindLoadEvent: function(){
		this.sendAction('onDestroy');
	}.on('willDestroyElement')
});
