var RenderedImage = require('../components/renderedWidgets/RenderedImage');
var RenderedText = require('../components/renderedWidgets/RenderedText');

var types = {
	'image': RenderedImage,
	'text': RenderedText
};

module.exports = {
	getRenderedWidgetComponent: function(type){
		return types[type];
	}
}