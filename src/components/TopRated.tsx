import React from 'react';

interface User {
  rank: number;
  username: string;
  rating: number;
}

export function TopRated() {
  const users: User[] = [
    { rank: 1, username: 'tourist', rating: 3857 },
    { rank: 2, username: 'jiangly', rating: 3747 },
    { rank: 3, username: 'orzdevimwang', rating: 3706 },
    { rank: 4, username: 'jkdai0815', rating: 3682 },
    { rank: 5, username: 'ksun48', rating: 3654 }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">Top Rated</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {users.map((user) => (
          <div key={user.rank} className="px-4 py-2 flex justify-between items-center">
            <span className="text-gray-500">#{user.rank}</span>
            <span className="text-blue-600 font-medium">{user.username}</span>
            <span className="text-gray-700">{user.rating}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
