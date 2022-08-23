import { Router } from 'express'
import users from './users'
import auth from './auth'
import Offer from './job_card'

export default Router()
    .use('/users', users)
    .use('/auth', auth)
    .use('/offer', Offer)

