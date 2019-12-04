const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// TODO Use express middleware to populate current user

server.start(
	{
		cors: {
			credentials: true,
			origin: process.env.FRONTEND_URL
		}
	},
	(deets) => {
		console.log(`Server is now running on port http://localhost:${deets.port}`);
	}
);
