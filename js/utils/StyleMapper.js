module.exports = {
	fromInlineStyleToObject: function(inlineStyle){
		var style = {},
			split;
		(inlineStyle || '').split(';').forEach(function(propValStr){
			var split = propValStr.split(':'),
				value = split[1],
				key = split[0]
					.replace(/^-webkit-/, 'webkit-')
					.replace(/^-moz-/, 'moz-')
					.replace(/^-o-/, 'o-')
					.replace(/-([a-z])/g, function(match){
						if (match[0]){
							return match.toUpperCase().replace(/-/, '');	
						} else {
							return match;
						}
					});
			style[key] = value;
		});
		return style;
	},
	fromObjectToInlineStyle: function(){
		
	}

}