const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@App': path.resolve(__dirname, 'src/App/'),
			'@components': path.resolve(
				__dirname,
				'src/components/',
			),
			'@constants': path.resolve(
				__dirname,
				'src/constants/',
			),
			'@screens': path.resolve(__dirname, 'src/screens/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@interfaces': path.resolve(
				__dirname,
				'src/interfaces/',
			),
		},
	},
}
