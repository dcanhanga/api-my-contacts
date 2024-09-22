import { DatabaseHelper } from '@/infra/db/index.js';
import { setupExpress } from '@/infra/express/config/setup.js';

async function startServer() {
	const PORT = process.env.PORT ?? 3000;
	try {
		await DatabaseHelper.connect();
		const app = await setupExpress();
		app.listen(PORT, () =>
			console.log(`SERVER IS RUNNING ON PORT http://localhost:${PORT}`),
		);
	} catch (error) {
		console.error('Erro ao conectar com o PostgreSQL:', error);
		process.exit(1);
	}
}

void startServer();
