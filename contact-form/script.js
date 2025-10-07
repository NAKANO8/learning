document.querySelector('#contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  if (!email || !password) {
    alert('メールアドレスとパスワードを入力してください！');
    return;
  }

  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  document.querySelector('#result').textContent = data.message;
});