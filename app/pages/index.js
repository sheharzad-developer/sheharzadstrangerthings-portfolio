import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}