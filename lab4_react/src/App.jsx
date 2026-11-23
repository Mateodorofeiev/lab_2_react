import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function themeByTime() {
  const h = new Date().getHours();
  return h >= 7 && h < 21 ? 'light' : 'dark'; // день 07:00–20:59
}

function App() {
  // початкова тема — за часом доби
  const [theme, setTheme] = useState(themeByTime);
  const [openCount, setOpenCount] = useState(0); // ручне відкриття форми

  // автоперемикання без перезавантаження: перевірка щохвилини
  useEffect(() => {
    let auto = themeByTime();
    const id = setInterval(() => {
      const t = themeByTime();
      if (t !== auto) {
        auto = t;
        setTheme(t);
      }
    }, 60000);
    return () => clearInterval(id);
  }, []);

  // застосування CSS-класу dark
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-800 dark:text-stone-200 font-sans p-4 sm:p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-6">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenContact={() => setOpenCount((c) => c + 1)}
        />
        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <About />
            <Skills />
            <Reviews />
          </div>
          <div className="space-y-6">
            <Education />
            <Languages />
          </div>
        </main>
        <Footer />
        <ContactForm openCount={openCount} />
      </div>
    </div>
  );
}

export default App;