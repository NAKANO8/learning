import { useEffect, useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    const newTodo = await res.json();
    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
  };

  const toggle = async (id: number) => {
    const res = await fetch(`/api/todos/${id}/toggle`, { method: "PATCH" });
    const updated = await res.json();
    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  const remove = async (id: number) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <header></header>
      <main>
        <p>好きなテキストを入力してください</p>

        <form onSubmit={addTodo}>
          <input
            type="text"
            name="text"
            placeholder="やること"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">追加</button>
        </form>

        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <label>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggle(t.id)}
                />
                {t.title}
              </label>
              <button onClick={() => remove(t.id)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </>
  );
}
