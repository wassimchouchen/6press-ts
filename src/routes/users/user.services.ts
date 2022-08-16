import jwt from 'jsonwebtoken'
import { User } from '../../models'


export const createUser = data => {
    return User.create(data)
  }