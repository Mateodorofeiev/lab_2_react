import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="cv-container">
      <Header />
      <main>
        <About />
        <Skills />
        <Languages />
      </main>
      <Footer />
    </div>
  );
}

export default App;