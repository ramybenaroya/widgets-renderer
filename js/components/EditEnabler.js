var React = require('react');
var SiteInteractions = require('../services/SiteInteractions');
var ContainerInlineEditActionCreators = require('../actions/ContainerInlineEditActionCreators');

function getStateFromStores() {
	return {
		children: RendererStore.getTree()
	};
}

var EditEnabler = React.createClass({

	getInitialState: function() {
		return {
			enableUserEvents: true
		}
	},

	componentDidMount: function() {
		SiteInteractions.on('ADD_CONTAINER', this._onAddContainer);
		SiteInteractions.init();
	},

	render: function() {
		return (<div></div>)
	},

	_onAddContainer: function(data){
		ContainerInlineEditActionCreators.addContainer({
			widget: {
				id: new Date().getTime().toString(),
				type: 'container',
				data: {},
				children: [
		            {
		                id: '1',
		                type: 'image',
		                data: {
		                    imgSrc: 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg'
		                }
		            }, {
		                id: '2',
		                type: 'text',
		                data: {
		                    text: 'Some text straight from the local storage'
		                }
		            }
        		]
			},
			position: {
				after: data.after	
			}
        });
	},

	/**
	 * Event handler for 'change' events coming from the MessageStore
	 */
	_onChange: function() {
		this.setState(getStateFromStores());
	}

});

module.exports = EditEnabler;