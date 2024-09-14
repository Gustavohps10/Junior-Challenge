import { Router } from 'express'
import { adaptRoute } from '@/main/adapters/expressRouterAdapter'
import { makeCreateArtifactController } from '@/main/factories/makeCreateArtifactController'
import { makeReadAllArtifactsController } from '../factories/makeReadAllArtifactsController'
import { makeUpdateArtifactController } from '../factories/makeUpdateArtifactController'

export default (router: Router): void => {
  router.get('/artifacts', adaptRoute(makeReadAllArtifactsController()))
  // router.get('/artifacts/:id')
  router.post('/artifacts', adaptRoute(makeCreateArtifactController()))
  router.put('/artifacts/:id', adaptRoute(makeUpdateArtifactController()))
  // router.delete('/artifacts/:id')
}
