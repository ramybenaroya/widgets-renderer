var React = require('react');
var StyleMapper = require('../../utils/StyleMapper');

module.exports = {
	parseStyle: function(){
		return StyleMapper.fromInlineStyleToObject(this.props.style);
	},
	_renderDefault: function(){
		return (<div></div>);
	},
	_getRendererNameByVersion: function(version){
		return '_renderVersion' + version;
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