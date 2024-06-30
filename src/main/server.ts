import express from 'express';

import { routes } from '@/main/routes/express/index.js';

const server = express();

server.use(express.json());
server.use(routes);
server.listen(3000, () => {
	console.log('Server is running on port 3000');
});
