import { Router } from 'express'
import users from './users'
import auth from './auth'
import jc from './job_card'

export default Router()
    .use('/users', users)
    .use('/auth', auth)
    .use('/jc', jc)

