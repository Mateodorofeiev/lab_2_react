import { useState, useEffect } from 'react';

const variant = 5; // номер варіанта

function Reviews() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${variant}/comments`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setComments(await res.json());
      } catch (err) {
        setError(err.message);
      }
    }
    load();
  }, []);

  return (
    <section className="bg-white dark:bg-stone-900 rounded-xl border-2 border-stone-200 dark:border-stone-700 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h2 className="font-serif text-2xl text-indigo-900 dark:text-indigo-300 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2 mb-4">
        Відгуки роботодавців
      </h2>
      {error && <p className="text-red-500 text-sm">Не вдалося завантажити відгуки: {error}</p>}
      {!error && comments.length === 0 && (
        <p className="text-stone-500 dark:text-stone-400 text-sm italic">Завантаження...</p>
      )}
      <div className="space-y-4">
        {comments.map((c) => (
          <article
            key={c.id}
            className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-700"
          >
            <h3 className="font-semibold text-stone-900 dark:text-stone-100">{c.name}</h3>
            <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">{c.body}</p>
            <small className="text-indigo-700 dark:text-indigo-300">{c.email}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;