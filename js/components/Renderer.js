var React = require('react');
var RendererStore = require('../stores/RendererStore');
var RenderedContainer = require('./renderedWidgets/RenderedContainer');
var DomManipulator = require('../services/DomManipulator');
var MainContainerViewActionCreators = require('../actions/MainContainerViewActionCreators');

var Renderer = React.createClass({

	getInitialState: function(){
		return RendererStore.getData();
	},

	componentDidMount: function(){
		RendererStore.addChangeListener(this._onChange);
		this._attemptToRenderMainContainer();
	},

	_onChange: function(){
		this.setState(RendererStore.getData())
	},

	_attemptToRenderMainContainer: function(){
		var wrapperEl, 
			canContainerBeRendered = DomManipulator.isLegalPosition(this.state);
		
		if (canContainerBeRendered){
			wrapperEl = DomManipulator.createElement(this.state);
			React.render(
				<RenderedContainer/>,
				wrapperEl
			);
			MainContainerViewActionCreators.requestMainContainerData();
		}
	},

	componentDidUpdate: function(){
		this._attemptToRenderMainContainer();
	},

	render: function(){
		return (<div></div>);
	}
});

module.exports = Renderer;