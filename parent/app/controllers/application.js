import Ember from 'ember';
import crossFrameSessionCreator from 'npm:cross-frame-session-creator';

export default Ember.Controller.extend({
	actions: {
		startCrossFrameCommunication: function(frameWindow){
			crossFrameSessionCreator.start(frameWindow, 'http://localhost:4040');
			crossFrameSessionCreator.engageSession('SESSION_A', this.forSessionA.bind(this));
		},
		stopCrossFrameCommunication: function(){
			crossFrameSessionCreator.stop();			
		}
	},
	forSessionA: function(payload){
		alert(payload.message);
		return {
			message: 'from parent'
		};
	}
});
