var React = require('react');
var StyleMapper = require('../../utils/StyleMapper');

module.exports = {
	parseStyle: function(){
		return StyleMapper.fromInlineStyleToObject(this.props.style);
	},
	_renderDefault: function(){
		return (<div id={this.props.id}></div>);
	},
	_getRendererNameByVersion: function(version){
		return '_renderVersion' + version;
	},
	getElementId: function(){
		return 'inout_element_' + this.props.id;
	},
	render: function(){
		var version = this.props.version,
			rendererName = this._getRendererNameByVersion(version);
		if (this[rendererName]){
			return this[rendererName]();
		} else {
			return this._renderDefault();
		}
	}
}