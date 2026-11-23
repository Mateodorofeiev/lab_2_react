import { useState, useEffect } from 'react';

// рядок JSON -> об'єкт; якщо це не JSON, повертаємо як є
function parse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function Footer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // 1. дані з navigator при монтуванні
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${screen.width}×${screen.height}`,
    };

    // 2. збереження в localStorage
    localStorage.setItem('reactSystemInfo', JSON.stringify(info));

    // 3. усі ключі localStorage -> стан
    const all = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      all.push([key, localStorage.getItem(key)]);
    }
    setItems(all);
  }, []);

  return (
    <footer className="text-stone-500 dark:text-stone-400 text-sm py-4 border-t-2 border-stone-200 dark:border-stone-700">
      <p className="text-center">© 2026 Дорофеєв Матвій. Всі права захищено.</p>

      <h4 className="mt-4 font-semibold text-stone-700 dark:text-stone-200">
        Інформація з localStorage
      </h4>

      <ul className="mt-2 text-xs space-y-3">
        {items.map(([key, value]) => {
          const data = parse(value);
          return (
            <li key={key}>
              <strong className="text-indigo-700 dark:text-indigo-300">{key}</strong>
              {data && typeof data === 'object' ? (
                <ul className="mt-1 ml-4 list-disc space-y-1">
                  {Object.entries(data).map(([k, v]) => (
                    <li key={k} className="break-all">
                      <span className="font-semibold">{k}:</span> {String(v)}
                    </li>
                  ))}
                </ul>
              ) : (
                <span>: {value}</span>
              )}
            </li>
          );
        })}
      </ul>
    </footer>
  );
}

export default Footer;