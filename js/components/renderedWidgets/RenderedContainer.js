var RendererStore = require('../../stores/RendererStore');
var React = require('react');
var WidgetsMapper = require('../../services/WidgetsMapper');
var MainContainerStore = require('../../stores/MainContainerStore');
var RenderedWidgetMixin = require('./RenderedWidgetMixin');
var assign = require('object-assign');
var reduce = require('array-reduce')

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

			nestedComponents = nestedWidgetsModels.map(function(widgetModel){
				var ComponentClass = WidgetsMapper.getRenderedWidgetComponent(widgetModel.type),
					componentProps = assign({key: widgetModel.props.id}, widgetModel.props);
				
				return React.createElement(ComponentClass, componentProps);
			}),

			idGetter = this.getElementId,

			css = reduce([this].concat(nestedComponents), function(accumulator, component){
				var elementId = idGetter.apply(component);
				return accumulator + component.props.css.replace(/\{widgetSelector\}/g, '#' + elementId);
			}, ''),

			id = this.getElementId(),

			style = this.getStyle(this.props.style);

		return (
			<div>
				<style type="text/css">
					{css}		
				</style>
				<div className="inout-main-container">
					{nestedComponents}
				</div>
			</div>
			
		);
	},
	_onChange: function(){
		this.setProps(MainContainerStore.getData());
	}

});

module.exports = RenderedContainer;