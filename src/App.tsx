import { Navbar } from './components/Navbar';
import './styles.css';

function App() {
  // Dummy data for demonstration:
  const contests = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    status: i % 2 === 0 ? 'Upcoming' : 'Ongoing',
    participants: `${(Math.floor(Math.random() * 20000) + 1000).toLocaleString()} Registered`,
    name: `Codeforces Round #${950 + i} (${i % 2 === 0 ? 'Div. 3' : 'Div. 2'})`,
    start: `Jun ${12 + i}, 15:35UTC+5.5`,
    duration: '02:00'
  }));

  const problems = Array.from({ length: 10 }, (_, i) => ({
    id: `1950${String.fromCharCode(65 + i)}`,
    name: `Problem ${i + 1} - Sample Problem`,
    difficulty: 800 + i * 50,
    solved: 12000 + i * 500
  }));

  const ratings = Array.from({ length: 8 }, (_, i) => ({
    rank: i + 1,
    user: ['tourist', 'Benq', 'Um_nik', 'Petr', 'Egor', 'Gena', 'Kira', 'Alex'][i % 8],
    rating: 3874 - i * 10,
    change: i % 2 === 0 ? `+${Math.floor(Math.random() * 20)}` : `-${Math.floor(Math.random() * 20)}`,
    flag: i % 2 === 0 ? '🇧🇾' : '🇷🇺'
  }));

  const blogs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    title: `Editorial for Codeforces Round #${949 - i}`,
    author: ['MikeMirzayanov', 'Benq', 'Petr'][i % 3],
    rating: (4.8 - i * 0.1).toFixed(1),
    comments: 24 + i * 3
  }));
  return (
    <div className="app-container">
      <Navbar />
      <div className="codeforces-container pt-28">
        <div className="main-content flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="left-column w-full lg:w-2/3 flex flex-col gap-6">
            {/* Contest Section */}
            <div className="contest-section animate-fade-in h-[600px]">
              <div className="section-title">Current or Upcoming Contests</div>
              <div className="contest-list">
                {contests.map((contest) => (
                  <div key={contest.id} className="contest-item">
                    <div className="contest-header">
                      <span className="contest-status">{contest.status}</span>
                      <span className="contest-participants">{contest.participants}</span>
                    </div>
                    <div className="contest-name">{contest.name}</div>
                    <div className="contest-details">
                      <div className="contest-time">
                        <svg className="clock-icon" viewBox="0 0 24 24">
                          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/>
                        </svg>
                        <span>Start: {contest.start}</span>
                      </div>
                      <div className="contest-duration">Duration: {contest.duration}</div>
                    </div>
                    <button className="register-button">
                      Register ▸
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Section */}
            <div className="problem-section animate-fade-in h-[600px]">
              <div className="section-title">
                <span>Recent Problems</span>
                <input 
                  type="text" 
                  placeholder="Search problems..." 
                  className="problem-search"
                />
              </div>
              <div className="problem-table">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Problem</th>
                      <th>Difficulty</th>
                      <th>Solved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problems.map((prob) => (
                      <tr key={prob.id}>
                        <td className="problem-id">{prob.id}</td>
                        <td className="problem-title">
                          <div className="difficulty-circle" />
                          {prob.name}
                        </td>
                        <td className="difficulty">{prob.difficulty}</td>
                        <td className="solved">{prob.solved.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column w-full lg:w-1/3 flex flex-col gap-6">
            {/* Rating Section */}
            <div className="rating-section animate-fade-in h-[400px]">
              <div className="section-title">Top Ratings</div>
              <div className="rating-list">
                {ratings.map((r) => (
                  <div key={r.rank} className="rating-item">
                    <span className="rank">{r.rank}.</span>
                    <span className="user">
                      <span className="country-flag">{r.flag}</span>
                      {r.user}
                    </span>
                    <span className="rating-change">{r.change}</span>
                    <span className="rating-value">{r.rating}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog Section */}
            <div className="blog-section animate-fade-in h-[400px]">
              <div className="section-title">Recent Blog Posts</div>
              <div className="blog-list">
                {blogs.map((b) => (
                  <div key={b.id} className="blog-item">
                    <div className="blog-header">
                      <div className="blog-title">{b.title}</div>
                      <div className="blog-stats">
                        <span>★ {b.rating}</span>
                        <span>💬 {b.comments}</span>
                      </div>
                    </div>
                    <div className="blog-author">
                      <span className="author-avatar">👤</span>
                      {b.author}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
