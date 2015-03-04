var React = require('react');
var RenderedWidgetMixin = require('./RenderedWidgetMixin');

var RenderedText = React.createClass({

	mixins: [RenderedWidgetMixin],

	getDefaultProps: function() {
		return {
			text: 'Lorem ipsum Exercitation ad ea adipisicing minim.'
		}
	},

	_renderVersion1: function() {
		return (
			<p dangerouslySetInnerHTML={{__html: this.props.content}}>
			</p>
		);
	}

});

module.exports = RenderedText;