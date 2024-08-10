import fs from 'node:fs';
import path from 'node:path';
import pg from 'pg';

const { Client } = pg;

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

async function executeSqlFile(filePath: string) {
	try {
		await client.connect();

		// Ler o conteúdo do arquivo SQL
		const sql = fs.readFileSync(filePath, 'utf8');

		// Executar os comandos SQL
		await client.query(sql);

		console.log(
			`Arquivo SQL ${path.basename(filePath)} executado com sucesso.`,
		);
	} catch (error) {
		console.error('Erro ao executar arquivo SQL:', error);
	} finally {
		await client.end();
	}
}

const sqlFilePath = new URL('./../src/infra/db/drop.sql', import.meta.url);

executeSqlFile(sqlFilePath.pathname.toString());
