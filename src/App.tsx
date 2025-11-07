import { Hero, Navbar } from './components'

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -left-28 w-96 h-96 bg-linear-to-tr from-indigo-500/20 to-pink-500/20 rounded-full
          blur-3xl -z-10"
      ></div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App
