'use client';

import { useState } from 'react';

type Era = {
  name: string;
  kanji: string;
  period: string; // "14,000 BC – 300 BC"
  description: string;
  keyEvents: string[];
  color: string;
};

const ERAS: Era[] = [
  {
    name: "Jomon",
    kanji: "縄文",
    period: "14,000 BC – 300 BC",
    description: "Hunter-gatherer culture. Famous for cord-marked pottery.",
    keyEvents: ["Invention of pottery", "Dogu figurines"],
    color: "bg-amber-700"
  },
  {
    name: "Yayoi",
    kanji: "弥生",
    period: "300 BC – 300 AD",
    description: "Introduction of wet-rice farming and metalworking from the continent.",
    keyEvents: ["Rice cultivation", "Bronze & Iron usage", "Queen Himiko"],
    color: "bg-green-700"
  },
  {
    name: "Kofun",
    kanji: "古墳",
    period: "300 AD – 538 AD",
    description: "Era of large keyhole-shaped burial mounds.",
    keyEvents: ["Yamato Court consolidation", "Haniwa"],
    color: "bg-stone-600"
  },
  {
    name: "Asuka",
    kanji: "飛鳥",
    period: "538 – 710",
    description: "Introduction of Buddhism and Chinese political structure.",
    keyEvents: ["Prince Shotoku", "Taika Reform", "Horyu-ji built"],
    color: "bg-red-700"
  },
  {
    name: "Nara",
    kanji: "奈良",
    period: "710 – 794",
    description: "First permanent capital at Heijo-kyo (Nara).",
    keyEvents: ["Todai-ji Daibutsu", "Kojiki & Nihon Shoki written"],
    color: "bg-purple-700"
  },
  {
    name: "Heian",
    kanji: "平安",
    period: "794 – 1185",
    description: "Capital moves to Kyoto. Golden age of court culture and literature.",
    keyEvents: ["Tale of Genji", "Rise of Samurai class", "Fujiwara regency"],
    color: "bg-pink-700"
  },
  {
    name: "Kamakura",
    kanji: "鎌倉",
    period: "1185 – 1333",
    description: "First Shogunate established by Minamoto no Yoritomo.",
    keyEvents: ["Genpei War", "Mongol Invasions", "Zen Buddhism spreads"],
    color: "bg-blue-800"
  },
  {
    name: "Muromachi",
    kanji: "室町",
    period: "1336 – 1573",
    description: "Ashikaga Shogunate. Kinkaku-ji built. Ends in Warring States period.",
    keyEvents: ["Onin War", "Noh Theater", "Tea Ceremony"],
    color: "bg-slate-700"
  },
  {
    name: "Azuchi-Momoyama",
    kanji: "安土桃山",
    period: "1573 – 1603",
    description: "Unification of Japan by Nobunaga, Hideyoshi, Ieyasu.",
    keyEvents: ["Battle of Sekigahara", "Castle construction boom"],
    color: "bg-yellow-600"
  },
  {
    name: "Edo",
    kanji: "江戸",
    period: "1603 – 1868",
    description: "Tokugawa Shogunate. 250 years of peace and isolation (Sakoku).",
    keyEvents: ["Ukiyo-e", "Kabuki", "Matthew Perry arrives"],
    color: "bg-teal-800"
  },
  {
    name: "Meiji",
    kanji: "明治",
    period: "1868 – 1912",
    description: "Restoration of Imperial rule. Rapid modernization and westernization.",
    keyEvents: ["Meiji Restoration", "Industrialization", "Sino-Japanese War"],
    color: "bg-red-800"
  },
  {
    name: "Taisho",
    kanji: "大正",
    period: "1912 – 1926",
    description: "Short era of democracy and liberalism.",
    keyEvents: ["Taisho Democracy", "Great Kanto Earthquake"],
    color: "bg-emerald-800"
  },
  {
    name: "Showa",
    kanji: "昭和",
    period: "1926 – 1989",
    description: "WWII, recovery, and economic miracle.",
    keyEvents: ["World War II", "1964 Olympics", "Bubble Economy"],
    color: "bg-gray-800"
  },
  {
    name: "Heisei",
    kanji: "平成",
    period: "1989 – 2019",
    description: "Post-bubble stagnation and digital age.",
    keyEvents: ["Great Hanshin Earthquake", "3.11 Disaster"],
    color: "bg-blue-500"
  },
  {
    name: "Reiwa",
    kanji: "令和",
    period: "2019 – Present",
    description: "Current era.",
    keyEvents: ["Tokyo 2020 Olympics", "Pandemic"],
    color: "bg-indigo-500"
  }
];

export default function Timeline() {
  const [selectedEra, setSelectedEra] = useState<Era | null>(null);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Main View: Timeline Scroll */}
      <div className="w-full overflow-x-auto p-8 bg-stone-100 flex gap-4 min-h-[300px] items-center scrollbar-hide">
        {ERAS.map((era) => (
          <button
            key={era.name}
            onClick={() => setSelectedEra(era)}
            className={`flex-shrink-0 w-48 h-64 rounded-xl shadow-lg hover:-translate-y-2 transition-transform p-4 flex flex-col justify-between text-white ${era.color} relative overflow-hidden group`}
          >
            <div className="absolute -right-4 -top-4 text-8xl opacity-10 font-serif z-0 pointer-events-none select-none">
                {era.kanji}
            </div>
            <div className="z-10">
                <h3 className="text-2xl font-bold">{era.name}</h3>
                <p className="text-xs opacity-80">{era.period}</p>
            </div>
            <div className="z-10 text-6xl font-serif font-black text-center opacity-40 group-hover:opacity-100 transition-opacity">
                {era.kanji}
            </div>
          </button>
        ))}
      </div>

      {/* Detail View */}
      <div className="flex-1 bg-white p-8 border-t border-stone-200 min-h-[400px]">
        {selectedEra ? (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="flex items-baseline gap-4 mb-4">
                    <h2 className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600`}>
                        {selectedEra.name}
                    </h2>
                    <span className="text-4xl font-serif text-stone-400">{selectedEra.kanji}</span>
                </div>
                <p className="text-xl text-stone-600 font-medium mb-8">{selectedEra.period}</p>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider text-stone-400 mb-2">Overview</h4>
                        <p className="text-lg leading-relaxed text-stone-800">{selectedEra.description}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold uppercase tracking-wider text-stone-400 mb-2">Key Events</h4>
                        <ul className="space-y-2">
                            {selectedEra.keyEvents.map((evt, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${selectedEra.color.replace('bg-', 'bg-')}`}></div>
                                    <span className="text-stone-700">{evt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ) : (
            <div className="h-full flex items-center justify-center text-stone-300">
                <p className="text-2xl font-serif italic">Select an Era from the timeline above</p>
            </div>
        )}
      </div>
    </div>
  );
}
