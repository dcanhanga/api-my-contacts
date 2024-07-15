import pg from 'pg';

const { Client } = pg;

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class DatabaseHelper {
	private static client: pg.Client | null = null;

	public static async connect() {
		if (!DatabaseHelper.client) {
			DatabaseHelper.client = new Client({
				connectionString: process.env.DATABASE_URL,
			});
			try {
				await DatabaseHelper.client.connect();
				console.log('Connected to the database successfully.');
			} catch (error) {
				console.error('Failed to connect to the database.', error);
				throw error;
			}
		}
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	public static async query<T>(query: string, params?: any[]): Promise<T[]> {
		await DatabaseHelper.connect();
		try {
			const client = DatabaseHelper.client;
			if (!client) {
				throw new Error('Database client is not connected');
			}
			const { rows } = await client.query(query, params);
			return rows;
		} catch (error) {
			console.error('Database query error:', error);
			throw error;
		}
	}

	public static async disconnect() {
		if (DatabaseHelper.client) {
			try {
				await DatabaseHelper.client.end();
				DatabaseHelper.client = null;
				console.log('Disconnected from the database successfully.');
			} catch (error) {
				console.error('Failed to disconnect from the database.', error);
			}
		}
	}
}

export default DatabaseHelper;
