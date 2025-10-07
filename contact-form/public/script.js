const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    email: document.getElementById('email').value.trim(),
    password: document.getElementById('password').value,
    message: document.getElementById('message').value.trim(),
  };

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    result.textContent = data.message === 'success' ? '送信しました！' : '失敗しました…';
    if (data.message === 'success') {
      form.reset();
    }
  } catch (err) {
    console.error(err);
    result.textContent = '通信エラーが発生しました';
  }
});
