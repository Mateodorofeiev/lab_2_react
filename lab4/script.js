const variant = 5; // номер варіанта

/* ---------- Завдання 1: дані про ОС і браузер → localStorage → футер ---------- */
function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    languages: navigator.languages.join(', '),
    screen: `${screen.width}×${screen.height}`,
    cores: navigator.hardwareConcurrency,
    cookiesEnabled: navigator.cookieEnabled,
    online: navigator.onLine,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  localStorage.setItem('systemInfo', JSON.stringify(info));
}

function showStorage() {
  const list = document.getElementById('storage');
  list.innerHTML = '';
  // усі ключі localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const raw = localStorage.getItem(key);
    const li = document.createElement('li');

    let data;
    try { data = JSON.parse(raw); } catch { data = raw; }

    if (data && typeof data === 'object') {
      // об'єкт: заголовок ключа + кожне поле окремим рядком
      const title = document.createElement('strong');
      title.textContent = key;
      const sub = document.createElement('ul');
      for (const [k, v] of Object.entries(data)) {
        const item = document.createElement('li');
        item.textContent = `${k}: ${v}`;
        sub.append(item);
      }
      li.append(title, sub);
    } else {
      li.textContent = `${key}: ${raw}`;
    }
    list.append(li);
  }
}

/* ---------- Завдання 2: відгуки з JSONPlaceholder ---------- */
const url = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

async function loadReviews() {
  const box = document.getElementById('reviews');
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const comments = await res.json();
    box.innerHTML = '';
    // порядок — як надіслав сервер
    comments.forEach(c => {
      const card = document.createElement('article');
      const h = document.createElement('h3');
      h.textContent = c.name;
      const p = document.createElement('p');
      p.textContent = c.body;
      const s = document.createElement('small');
      s.textContent = c.email;
      card.append(h, p, s);
      box.append(card);
    });
  } catch (err) {
    console.error(err);
    box.textContent = 'Не вдалося завантажити відгуки: ' + err.message;
  }
}

/* ---------- Завдання 3: модальне вікно через 1 хвилину ---------- */
function initModal() {
  const modal = document.getElementById('contactModal');
  const closeBtn = document.getElementById('closeModal');
  const openBtn = document.getElementById('openModalBtn');

  const timerId = setTimeout(() => {
    if (!modal.open) modal.showModal();
  }, 60000);

  // закриття кнопкою
  closeBtn.addEventListener('click', () => modal.close());

  // закриття кліком по фону
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Escape у <dialog> закриває вікно автоматично

  // ручне відкриття для перевірки
  openBtn.addEventListener('click', () => {
    clearTimeout(timerId);
    if (!modal.open) modal.showModal();
  });
}

/* ---------- Завдання 4: денна / нічна тема ---------- */
function themeByTime() {
  const h = new Date().getHours();
  return h >= 7 && h < 21 ? 'light' : 'dark'; // день 07:00–20:59
}

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
  document.getElementById('themeBtn').textContent =
    theme === 'dark' ? '☀️ Світла тема' : '🌙 Нічна тема';
}

function initTheme() {
  let autoTheme = themeByTime();
  applyTheme(autoTheme);

  // ручне перемикання
  document.getElementById('themeBtn').addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(isDark ? 'light' : 'dark');
  });

  // автоперемикання без перезавантаження: перевірка щохвилини
  setInterval(() => {
    const t = themeByTime();
    if (t !== autoTheme) {
      autoTheme = t;
      applyTheme(t);
    }
  }, 60000);
}

/* ---------- Запуск ---------- */
saveSystemInfo();
showStorage();
loadReviews();
initModal();
initTheme();