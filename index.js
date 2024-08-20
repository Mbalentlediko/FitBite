import {userRouter,express} from './Controller/userController.js';
import {productRouter} from './Controller/productController.js';
import cookies from 'cookie-parser';
import {errorHandling} from './Middleware/errorHandling.js';
import path from 'path';
import { config } from 'dotenv';
import cors from 'cors'
config()

const app = express()
const port = +process.env.PORT || 3300

// app.use((req, res, next)=>{
//     res.header("Access-Control-Allow-Origin","*");
//     res.header("Access-Control-Allow-Credentials","true");
//     res.header("Access-Control-Allow-Methods","*");
//     res.header("Access-Control-Request-Methods","*");
//     res.header("Access-Control-Allow-Headers","*");
//     res.header("Access-Control-Expose-Headers","Authorization");
// next()
// })
// Middleware
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
  }),
  cookies(),
  cors()
)
// Update
app.get('^/$|/backend_node.js', (req,res)=>{
    res.status(200).sendFile(path.join(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})