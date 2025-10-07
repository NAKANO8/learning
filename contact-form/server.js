import express from 'express';
import mysql from 'mysql2/promise';
const app = express();
app.use(express.json());

const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact_form"
});

app.post('/api/contact', async (req, res) => {
  try {
    const { email, password } = req.body;
    await db.query("INSERT INTO contacts (email, password) VALUES (?, ?)", [email, password]);
    res.json({ message: 'sucess' });
  } catch (error) {
    res.json({ message: 'failure' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});