import type { Request, Response, Router  } from "express"

export default (router: Router): void => {
router.get('/', (req: Request, res: Response) => {
		res.type('html').send('Servidor Node.js com PostgreSQL funcionando!')
	});
}