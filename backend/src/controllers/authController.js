import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUser, getUserByEmail } from '../models/userModel.js'

const validRoles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer']
const validLanguages = ['JavaScript', 'Python', 'Ruby']

const registerUser = async (req, res) => {
    const { email, password, rol, lenguage } = req.body

    if (!validRoles.includes(rol)) {
        return res.status(400).json({ message: `Rol '${rol}' no válido. Los roles permitidos son: ${validRoles.join(', ')} ` })
    }

    if (!validLanguages.includes(lenguage)) {
        return res.status(400).json({ message: `Lenguaje '${lenguage}' no válido. Los lenguajes permitidos son: ${validLanguages.join(', ')}` })
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await createUser(email, hashedPassword, rol, lenguage)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el usuario', error: error.message })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' })
        }
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(400).json({ message: 'Contraseña incorrecta' })
        }
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.json({ token })
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error: error.message })
    }
}

const getUserData = async (req, res) => {
    const { email } = req.user
    try {
        const user = await getUserByEmail(email)
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos del usuario', error: error.message })
    }
}

export { registerUser, loginUser, getUserData }