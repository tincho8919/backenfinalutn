
import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'
import ProductRouter from './routes/router.js'
import authRoutes from './routes/authRoutes.js';


const app = express()





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/blogs', blogRoutes);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/Product', ProductRouter);



app.get('/', (req, res)=>{
    res.send('HELLO WORDS "MY BACKEND"')
}) 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth', authRoutes);


app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})


