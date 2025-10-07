// server.js
import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 静的ファイル（index.html, script.js, styles.css）を public/ から配信
app.use(express.static(path.join(__dirname, 'public')));

const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME,
});

// ヘルスチェック
app.get('/health', async (_req, res) => {
  try {
    await db.query('SELECT 1');
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { email, password, message } = req.body;

    // 超基本バリデーション
    if (!email || !password || !message) {
      return res.status(400).json({ message: 'missing fields' });
    }

    // パスワードをハッシュ化（平文保存禁止）
    const passwordHash = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO contacts (email, password_hash, message) VALUES (?, ?, ?)',
      [email, passwordHash, message]
    );

    res.json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'failure' });
  }
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
