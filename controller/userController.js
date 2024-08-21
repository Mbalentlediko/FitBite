import express from 'express'
import bodyParser from 'body-parser'
import { Users } from '../model/Users.js'

const userRouter = express.Router()
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    Userssers.fetchUsers(req, res)
})

userRouter.get('/:id',(req,res)=> {
    Users.fetchUser(req,res)
})

userRouter.post('./register',(req,res)=> {
    Users.registerUser(req,res)
})

userRouter.patch('/:id',(req,res) => {
    Users.updateUser(res,req)
})

userRouter.delete('/:id',(req,res)=> {
    Users.deleteUser(req,res)
})

userRouter.post('/login',(req, res)=> {
    Users.login(req, res)
})

export{express,userRouter}

