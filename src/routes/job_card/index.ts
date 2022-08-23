import { Router } from 'express'
// import { getOffers, getOffer, createOffer, deleteOffer, updateOffer }  from './jc.controllers'
import * as controllers from './jc.controllers'
// import { authenticate } from '../../utils'

// export default Router()
//   .get('/', [authenticate()], controllers.getJob_card)
//   .get('/:id', [authenticate()], controllers.getJob_card)
//   .post('/', [authenticate()], controllers.createJob_card)
//   .put('/:id', [authenticate('admin')], controllers.updateJob_card)
//   .delete('/:id', [authenticate('admin')], controllers.deleteJob_card)

  
export default Router()
.get('/', controllers.getOffers)
.get('/:id', controllers.getOffer)
.post('/create', controllers.createOffer)
.delete('/:id', controllers.deleteOffer)
.patch('/:id', controllers.updateOffer)

