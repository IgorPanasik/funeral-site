module.exports = {
	plugins: [
		require('postcss-preset-env')({
			stage: 2,
			features: {
				'custom-properties': {
					preserve: true,
				},
			},
			autoprefixer: {
				grid: false,
			},
			browsers: ['>0.5%', 'last 4 versions', 'Firefox ESR'],
		}),
		require('postcss-nested'),
		require('cssnano')({
			preset: 'default',
		}),
	],
};
