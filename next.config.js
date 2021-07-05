module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['www.github.com', 'https://www.github.com/'],
	},
	env: {
		API_KEY: process.env.API_KEY,
		CONTEXT_KEY: process.env.CONTEXT_KEY,
	},
}
