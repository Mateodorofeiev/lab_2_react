const languages = [
  { name: 'Українська', level: 'Рідна' },
  { name: 'Англійська', level: 'B2' },
];

function Languages() {
  return (
    <section className="bg-white dark:bg-stone-900 rounded-xl border-2 border-stone-200 dark:border-stone-700 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h2 className="font-serif text-2xl text-indigo-900 dark:text-indigo-300 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2 mb-4">
        Мови
      </h2>
      <ul className="space-y-3">
        {languages.map((lang) => (
          <li key={lang.name} className="flex justify-between items-center text-sm">
            <span className="font-semibold text-stone-800 dark:text-stone-100">{lang.name}</span>
            <span className="bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800 px-3 py-1 rounded-full text-xs">
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;