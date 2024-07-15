
import { makeCreateCategory } from '@/infra/factories/contacts/index.js'
import type { Router } from 'express'
import { expressAdapterRoute } from '../adapters/expressAdapterRoute.js'

export default (router: Router): void => {
  router.post('/categories', expressAdapterRoute(makeCreateCategory()))

}