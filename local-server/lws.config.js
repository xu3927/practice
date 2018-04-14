
module.exports = {
	https: true,
	port: 443,
	directory: 'src',
	corsOrigin: '*',
	corsAllowMethods: '*',
	rewrite: [
	    {
	      from: '/resources/*',
	      to: 'http://to/resources/$1'
	    }
	  ],

}