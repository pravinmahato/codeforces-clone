import React from 'react';

interface ContestEntry {
  id: string;
  time: string;
  who: string;
  problem: string;
  lang: string;
  verdict: string;
  timeMs: string;
  memory: string;
}

export function ContestStatus() {
  const entries: ContestEntry[] = [
    {
      id: '308967807',
      time: '00:05:59',
      who: '244minq',
      problem: 'B - Fire and Homework',
      lang: 'C++23 (GCC 14.64)',
      verdict: '+0.5points',
      timeMs: '79 ms',
      memory: '100 KB'
    },
    {
      id: '308967808',
      time: '00:06:12',
      who: 'tourist',
      problem: 'A - Magical Array',
      lang: 'C++17 (GCC 9.3)',
      verdict: '+1.0points',
      timeMs: '45 ms',
      memory: '128 KB'
    },
    {
      id: '308967809',
      time: '00:06:30',
      who: 'egor',
      problem: 'C - Puzzle Pieces',
      lang: 'Python 3.8',
      verdict: '+0.5points',
      timeMs: '120 ms',
      memory: '256 KB'
    },
    {
      id: '308967810',
      time: '00:07:05',
      who: 'rafi',
      problem: 'D - Dynamic Programming',
      lang: 'Java 11',
      verdict: '+0.5points',
      timeMs: '150 ms',
      memory: '512 KB'
    },
    {
      id: '308967811',
      time: '00:07:45',
      who: 'sasha',
      problem: 'E - Enigma',
      lang: 'C++14 (GCC 8.1)',
      verdict: '+1.0points',
      timeMs: '90 ms',
      memory: '200 KB'
    },
    {
      id: '308967812',
      time: '00:08:10',
      who: 'maxwell',
      problem: 'F - Fibonacci Numbers',
      lang: 'C++17 (GCC 9.3)',
      verdict: '+0.5points',
      timeMs: '110 ms',
      memory: '320 KB'
    },
    {
      id: '308967813',
      time: '00:08:45',
      who: 'anna',
      problem: 'G - Graph Theory',
      lang: 'Python 3.9',
      verdict: '+1.0points',
      timeMs: '180 ms',
      memory: '400 KB'
    },
    {
      id: '308967814',
      time: '00:09:30',
      who: 'kostya',
      problem: 'H - Heuristics',
      lang: 'Java 8',
      verdict: '+0.5points',
      timeMs: '200 ms',
      memory: '600 KB'
    },
    {
      id: '308967815',
      time: '00:10:00',
      who: 'nina',
      problem: 'I - Intersection',
      lang: 'C++23 (Clang 14.0)',
      verdict: '+0.5points',
      timeMs: '80 ms',
      memory: '150 KB'
    },
    {
      id: '308967816',
      time: '00:10:45',
      who: 'zeta',
      problem: 'J - Jumping Game',
      lang: 'C++20 (GCC 11)',
      verdict: '+1.0points',
      timeMs: '70 ms',
      memory: '90 KB'
    }
  
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Contest Status</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">When</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Who</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lang</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verdict</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.time}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{entry.who}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">{entry.problem}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.lang}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-500">{entry.verdict}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.timeMs}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{entry.memory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
