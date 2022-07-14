const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'@App': path.resolve(__dirname, 'src/App/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@components': path.resolve(
				__dirname,
				'src/components/'
			),
			'@constants': path.resolve(
				__dirname,
				'src/constants/'
			),
			'@redux': path.resolve(__dirname, 'src/redux/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@screens': path.resolve(__dirname, 'src/screens/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@interfaces': path.resolve(
				__dirname,
				'src/interfaces/'
			),
		},
	},
}
