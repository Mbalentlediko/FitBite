import {userRouter,express} from './controller/userController.js';
import {productRouter} from './Controller/productController.js';
import cookieParser from 'cookie-parser';
import { errorHandling } from './middleware/ErrorHandling.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import cors from 'cors'
config()

const app = express((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Credentials","true");
    res.header("Access-Control-Allow-Methods","*");
    res.header("Access-Control-Request-Methods","*");
    res.header("Access-Control-Allow-Headers","*");
    res.header("Access-Control-Expose-Headers","Authorization");
next()
})
const port = +process.env.PORT || 3300

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
  }),
  cookieParser(),
  cors()
)

// Update
app.get('^/$|/backend_node.js', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/html/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})