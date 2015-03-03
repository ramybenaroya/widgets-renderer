var RendererStore = require('../../stores/RendererStore');
var React = require('react');
var WidgetsMapper = require('../../services/WidgetsMapper');
var MainContainerStore = require('../../stores/MainContainerStore');
var RenderedWidgetMixin = require('./RenderedWidgetMixin');
var _ = require('lodash');

var RenderedContainer = React.createClass({
	mixins: [RenderedWidgetMixin],
	getDefaultProps: function() {
		return MainContainerStore.getData();
	},

	componentDidMount: function(){
		MainContainerStore.addChangeListener(this._onChange);
	},

	_renderVersion1: function() {
		var nestedWidgetsModels = this.props.nestedWidgets || [],
			nestedComponents = nestedWidgetsModels.map(function(item){
				var ComponentClass = WidgetsMapper.getRenderedWidgetComponent(item.type),
					componentProps = _.extend({key: item.props.id}, item.props);
				
				return React.createElement(ComponentClass, componentProps);
			}),
			style = this.parseStyle(this.props.style);
		return (
			<div style={style} classNames="io-main-container">
				{nestedComponents}
			</div>
		);
	},
	_onChange: function(){
		this.setProps(MainContainerStore.getData());
	}

});

module.exports = RenderedContainer;