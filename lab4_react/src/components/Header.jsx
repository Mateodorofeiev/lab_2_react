function Header({ theme, onToggleTheme, onOpenContact }) {
  return (
    <header className="bg-indigo-900 dark:bg-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
            Дорофеєв Матвій
          </h1>
          <p className="mt-2 text-indigo-200">
            Студент Кібербезпеки{' '}
            <span className="ml-2 inline-block bg-indigo-700 border border-indigo-400 text-xs sm:text-sm px-3 py-1 rounded-full">
              Junior Cybersecurity Analyst
            </span>
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-4 py-2 text-sm font-semibold rounded-xl border border-indigo-400 hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? '☀️ Світла тема' : '🌙 Нічна тема'}
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-2 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            ✉️ Зворотний зв'язок
          </button>
        </div>
      </div>
      <ul className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm">
        <li>
          Телефон:{' '}
          <a
            href="tel:+380669794736"
            className="text-indigo-200 hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            +380 66 9794736
          </a>
        </li>
        <li>
          Email:{' '}
          <a
            href="mailto:dorofeevmatvij@gmail.com"
            className="text-indigo-200 hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            dorofeevmatvij@gmail.com
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/Mateodorofeiev"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-200 font-semibold hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            github.com/Mateodorofeiev
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;