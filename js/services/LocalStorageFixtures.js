module.exports = {
	init: function() {
		localStorage.clear();
		this.initializers.forEach(function(initializer) {
			initializer();
		});
	},
	initializers: [
		function initRendererData() {
			localStorage.setItem('rendererData', JSON.stringify({
				parentSelector: '#site',
				beforeSelector: '#rect3'
			}));
		},
		function initMainContainerData() {
			localStorage.setItem('mainContainerData', JSON.stringify({
				type: 'main-container',

				props: {
					id: '1000',
					style: 'border: 5px solid black;',
					css:`
						#{widgetSelector} img {
							height: 200px;
						}

						#{widgetSelector} p {
							background-color: green;
						}
					`,
					version: 1,
					nestedWidgets: [{
						type: 'text',
						props: {
							version: 1,
							id: '100',
							css: '',
							content: 'This <strong>is</strong> text',
							style: 'border: 5px solid green;',
						}
					}, {

						type: 'image',
						props: {
							version: 1,
							id: '200',
							css: '',
							src: 'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
							style: 'border: 5px solid red;'
						},

					}]
				}
			}));
		}

	]
}