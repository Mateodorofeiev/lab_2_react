import { useState, useEffect } from 'react';

const field =
  'w-full px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-indigo-500';

function ContactForm({ openCount }) {
  const [isOpen, setIsOpen] = useState(false);

  // показати форму через 60 000 мс
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  // ручне відкриття кнопкою з Header
  useEffect(() => {
    if (openCount > 0) setIsOpen(true);
  }, [openCount]);

  // закриття клавішею Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // клік по фону закриває вікно
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl text-stone-800 dark:text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="font-serif text-xl font-bold mb-4">Форма зворотного зв'язку</h3>
        <form method="POST" action="https://formspree.io/f/xkjjpkqp" className="space-y-3">
          <label className="block text-sm font-semibold">
            Ім'я
            <input name="name" required className={field} />
          </label>
          <label className="block text-sm font-semibold">
            Email
            <input name="email" type="email" required className={field} />
          </label>
          <label className="block text-sm font-semibold">
            Телефон
            <input name="phone" type="tel" className={field} />
          </label>
          <label className="block text-sm font-semibold">
            Повідомлення
            <textarea name="message" rows="4" className={field} />
          </label>
          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-600 text-white font-semibold py-2 rounded-lg transition-colors cursor-pointer"
          >
            Надіслати
          </button>
        </form>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-3 w-full py-2 rounded-lg border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
        >
          Закрити
        </button>
      </div>
    </div>
  );
}

export default ContactForm;