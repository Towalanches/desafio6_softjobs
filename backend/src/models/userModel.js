import pool from '../config/database.js'

const createUser = async (email, password, rol, lenguage) => {
    const query = `
    INSERT INTO usuarios (email, password, rol, lenguage)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `
    const values = [email, password, rol, lenguage]
    const { rows } = await pool.query(query, values)
    return rows[0]
}

const getUserByEmail = async (email) => {
    const query = 'SELECT id, email, password, rol, lenguage FROM usuarios WHERE email = $1;'
    const { rows } = await pool.query(query, [email])
    return rows[0] || null
}

const getAllUsers = async () => {
    const query = 'SELECT id, email, rol, lenguage FROM usuarios'
    const { rows } = await pool.query(query)
    return rows
}

const getUserById = async () => {
    const query = 'SELECT id, email, rol, lenguage FROM usuarios WHERE id = $1'
    const { rows } = await pool.query(query, [id])
    return rows[0] || null
}

export { createUser, getUserByEmail, getAllUsers, getUserById }