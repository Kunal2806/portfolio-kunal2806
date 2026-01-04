'use client';

import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  private: boolean;
  updated_at: string;
}

const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const username = 'Kunal2806';

  const fetchRepos = async (user: string): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${user}/repos?sort=updated&per_page=100`
      );
      if (!response.ok) throw new Error('User not found');
      const data: Repository[] = await response.json();
      const publicRepos = data.filter(repo => !repo.private);
      setRepos(publicRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(username);
  }, []);

  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean)));
  
  const filteredRepos = filter === 'all' 
    ? repos 
    : repos.filter(repo => repo.language === filter);

  return (
    <section id="projects" className="min-h-screen bg-background text-foreground py-20 px-6 mt-15">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-lg opacity-70">
            Explore my latest work and open-source contributions
          </p>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-6 py-4 rounded-lg">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-background text-foreground border-2 border-primary'
                    : 'bg-foreground bg-opacity-10 hover:bg-opacity-20 text-background'
                }`}
              >
                All ({repos.length})
              </button>
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => setFilter(lang as string)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === lang
                      ? 'bg-background text-foreground border-2 border-primary'
                    : 'bg-foreground bg-opacity-10 hover:bg-opacity-20 text-background'
                  }`}
                >
                  {lang} ({repos.filter(r => r.language === lang).length})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRepos.map(repo => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background bg-opacity-5 hover:bg-opacity-10 border border-foreground border-opacity-10 hover:border-opacity-30 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-opacity-80 transition-opacity">
                      {repo.name}
                    </h3>
                    <svg
                      className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>

                  <p className="text-sm opacity-70 mb-4 line-clamp-2 min-h-[40px]">
                    {repo.description || 'No description available'}
                  </p>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 3).map(topic => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 bg-foreground bg-opacity-10 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm opacity-60">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-foreground opacity-60"></span>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-20 opacity-50">
            <p className="text-lg">No repositories found</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;