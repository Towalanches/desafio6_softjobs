import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import authRoutes from './routes/authRoutes.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/', authRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en el puerto ${PORT}`)
})