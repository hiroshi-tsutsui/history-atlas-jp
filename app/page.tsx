import Timeline from './components/Timeline';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <header className="bg-stone-900 text-stone-100 p-6 shadow-md z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
             <h1 className="text-2xl font-serif font-bold tracking-widest uppercase">History Atlas JP</h1>
             <span className="text-xs text-stone-500 font-mono">Educational Fleet: App 5/11</span>
        </div>
      </header>
      <main className="flex-1 overflow-hidden flex flex-col">
        <Timeline />
      </main>
    </div>
  )
}
