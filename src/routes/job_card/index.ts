import { Router } from 'express'
import * as controllers from './jc.controllers'
import { authenticate } from '../../utils'

export default Router()
  .get('/', [authenticate()], controllers.getJob_card)
  .get('/:id', [authenticate()], controllers.getJob_card)
  .post('/', [authenticate('user', 'admin')], controllers.createJob_card)
  .put('/:id', [authenticate('admin')], controllers.updateJob_card)
  .delete('/:id', [authenticate('admin')], controllers.deleteJob_card)