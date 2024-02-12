import express,{Request, Response, NextFunction} from 'express'
import { router } from './routes'
import 'express-async-errors'

const app = express()
const port = 3333
app.use(express.json())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message,
        });
    }
    return res.status(500).json({
        status: 'Error',
        message: 'Internal server error'
    });
});


app.listen(port, () => {
    console.log('Servidor iniciado com sucesso')
})