import Ember from 'ember';
import Crosser from 'npm:crosser';

export default Ember.Controller.extend({
	crosser: null,
	actions: {
		startCrossFrameCommunication: function(frameWindow){
			var crosser = new Crosser(frameWindow, 'http://localhost:3000');
			crosser.subscribe('SESSION_A', this.forSessionA.bind(this));
			this.set('crosser', crosser);
		},
		stopCrossFrameCommunication: function(){
			this.get('crosser').destroy();
			this.set('crosser', null);			
		}
	},
	forSessionA: function(payload){
		alert(payload.message);
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve({
					message: 'from parent'		
				});
			}, 0);
			
		});
	}
});
