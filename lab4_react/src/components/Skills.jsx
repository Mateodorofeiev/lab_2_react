const skills = [
  { title: 'ОС', items: ['Ubuntu', 'Fedora', 'Kali', 'Windows Server'] },
  { title: 'Мови', items: ['Python', 'C#', 'Bash'] },
  { title: 'Інструменти', items: ['Git', 'VS Code', 'Cisco Packet Tracer', 'Burp Suite'] },
  { title: 'Платформи', items: ['TryHackMe', 'Hack The Box', 'picoCTF'] },
];

function Skills() {
  return (
    <section className="bg-white dark:bg-stone-900 rounded-xl border-2 border-stone-200 dark:border-stone-700 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h2 className="font-serif text-2xl text-indigo-900 dark:text-indigo-300 border-b-2 border-indigo-200 dark:border-indigo-800 pb-2 mb-4">
        Навички
      </h2>
      <div className="space-y-4">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="font-semibold text-stone-600 dark:text-stone-400 tracking-wide mb-2">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-indigo-50 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800 text-sm px-3 py-1 rounded-full hover:bg-indigo-600 hover:text-white hover:scale-105 transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;