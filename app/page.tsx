import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#e6e2d3]">
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-80 bg-[#2c3e50] text-white p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">History Atlas JP</h1>
          
          <div className="space-y-4">
            <div className="bg-[#34495e] p-4 rounded cursor-pointer border-l-4 border-yellow-500">
              <h3 className="font-bold">Sengoku Period</h3>
              <p className="text-sm text-gray-300">1467 – 1615</p>
            </div>
            <div className="bg-[#34495e] p-4 rounded cursor-pointer opacity-50 hover:opacity-100 transition">
              <h3 className="font-bold">Edo Period</h3>
              <p className="text-sm text-gray-300">1603 – 1868</p>
            </div>
            <div className="bg-[#34495e] p-4 rounded cursor-pointer opacity-50 hover:opacity-100 transition">
              <h3 className="font-bold">Meiji Restoration</h3>
              <p className="text-sm text-gray-300">1868 – 1912</p>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative bg-[#a8d0e6] flex items-center justify-center">
          <div className="absolute top-4 right-4 bg-white/90 p-4 rounded shadow">
            <h2 className="font-bold text-gray-800">Battle of Sekigahara</h2>
            <p className="text-sm text-gray-600">Oct 21, 1600</p>
          </div>
          
          <div className="text-9xl text-white/30 font-bold select-none pointer-events-none">
            MAP VIEW
          </div>
          
          {/* Fake Map Markers */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition"></div>
        </div>
      </div>
    </main>
  );
}
