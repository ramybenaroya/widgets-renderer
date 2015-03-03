var React = require('react');
var RendererStore = require('../stores/RendererStore');
var RenderedContainer = require('./renderedWidgets/RenderedContainer');
var DomManipulator = require('../services/DomManipulator');
var MainContainerViewActionCreators = require('../actions/MainContainerViewActionCreators');

var Renderer = React.createClass({

	componentDidMount: function(){
		RendererStore.addChangeListener(this._onChange);
		this._onChange();
	},
	_onChange: function(){
		var rendererData = RendererStore.getData(),
			containerEl = DomManipulator.createElement(rendererData)
		if (containerEl){
			MainContainerViewActionCreators.requestMainContainerData();
			React.render(React.createElement(RenderedContainer), containerEl);	
		}
	},
	render: function(){
		return (<div></div>);
	}
});

module.exports = Renderer;