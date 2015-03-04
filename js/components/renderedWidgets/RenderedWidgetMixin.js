var React = require('react');
var assign = require('object-assign');

module.exports = {
	getStyle: function(){
		var style = assign({}, this.props.style, {
			position: 'relative'
		});
		return style;
	},
	_renderDefault: function(){
		return (<div id={this.props.id}></div>);
	},
	_renderInlineEdit: function(){
		var style = {
			position: 'absolute',
			top: '5px',
			left: '5px',
			color: 'red',
			textStyle: 'bold',
			fontSize: '20px'
		};
		return (
			<div className='inline-edit-wrapper' style={style}>
				EDIT
			</div>
		);
	},
	getInitialState: function(){
		return {
			editMode: true
		};
	},
	_getRendererNameByVersion: function(version){
		return '_renderVersion' + version;
	},
	getElementId: function(){
		return 'inout_element_' + this.props.id;
	},
	render: function(){
		var version = this.props.version,
			rendererName = this._getRendererNameByVersion(version),
			id = this.getElementId(),
			style = this.getStyle(this.props.style),
			inlineEditMarkup,
			markup;
		if (this[rendererName]){
			markup = this[rendererName]();
		} else {
			markup = this._renderDefault();
		}
		if (this.state.editMode){
			inlineEditMarkup = this._renderInlineEdit();
		}
		return (
			<div id={id} style={style}>
				{markup}
				{inlineEditMarkup}
			</div>
		);
	}
}