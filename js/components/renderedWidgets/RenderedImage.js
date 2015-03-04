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
		return (
			<img src={this.props.src}/>
		);
	}

});

module.exports = RenderedImage;