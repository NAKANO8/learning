import "dotenv/config";
import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // 開発は不要。本番でマネージドDBなら ssl を有効化:
  // ssl: { rejectUnauthorized: false }
});

// ヘルスチェック
app.get("/api/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false });
  }
});

// 取得
app.get("/api/todos", async (_req, res) => {
  const { rows } = await pool.query(
    "SELECT id, title, completed, created_at FROM todos ORDER BY id DESC",
  );
  res.json(rows);
});

// 追加
app.post("/api/todos", async (req, res) => {
  const title = (req.body?.title ?? "").trim();
  if (!title) return res.status(400).json({ error: "title required" });

  const { rows } = await pool.query(
    "INSERT INTO todos (title) VALUES ($1) RETURNING id, title, completed, created_at",
    [title],
  );
  res.status(201).json(rows[0]);
});

// トグル（完了/未完）
app.patch("/api/todos/:id/toggle", async (req, res) => {
  const id = Number(req.params.id);
  const { rows } = await pool.query(
    "UPDATE todos SET completed = NOT completed WHERE id = $1 RETURNING id, title, completed, created_at",
    [id],
  );
  if (!rows[0]) return res.status(404).json({ error: "not found" });
  res.json(rows[0]);
});

// 削除
app.delete("/api/todos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { rowCount } = await pool.query("DELETE FROM todos WHERE id = $1", [
    id,
  ]);
  if (!rowCount) return res.status(404).json({ error: "not found" });
  res.status(204).end();
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => console.log(`API listening on :${port}`));
