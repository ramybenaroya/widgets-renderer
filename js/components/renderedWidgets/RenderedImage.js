var React = require('react');
var RenderedWidgetMixin = require('./RenderedWidgetMixin');

var RenderedImage = React.createClass({

	mixins: [RenderedWidgetMixin],

	getDefaultProps: function() {
		return {
			src: 'http://greentreesarborcareinc.com/wp-content/uploads/2014/01/image-placeholder.jpg'
		}
	},

	_renderVersion1: function() {
		debugger;
		var style = this.parseStyle(this.props.style);
		return (
			<img style={style} src={this.props.src}/>
		);
	}

});

module.exports = RenderedImage;