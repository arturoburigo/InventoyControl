import {Router, Request, Response, request} from 'express'

const router = Router()

router.get('/test', (request: Request, response: Response) =>{
    return response.json({ok: true})
} )

export {router};