import { sql,makeConnection } from "../database/database.js";

export const getIndex = async (req,res) => {
    try {
        const pool = await makeConnection();
        const result = await pool.request().query('SELECT TOP 10 * from Album ');
        res.render('index', { data: result.recordset });
      } catch (err) {
        console.error('Database connection error:', err);
        res.status(500).send('Error connecting to the database');
      }
} 