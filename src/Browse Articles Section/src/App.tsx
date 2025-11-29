import { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Sparkles, X } from 'lucide-react';
import { ArticleCard } from './components/ArticleCard';
import { articles } from './data/articles';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'indonesia' | 'integrity' | 'both'>('all');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    articles.forEach(article => {
      article.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      // Category filter
      if (selectedCategory !== 'all' && article.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag && !article.tags.includes(selectedTag)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          article.title.toLowerCase().includes(query) ||
          article.summary.toLowerCase().includes(query) ||
          article.source.toLowerCase().includes(query) ||
          article.tags.some(tag => tag.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="min-h-screen bg-[#0a0118] relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 159, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 159, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Neon Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#00FF9F] rounded-full blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-[#7B2CBF] rounded-full blur-[150px] opacity-15 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#FFD700] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Icon with Neon Border */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative p-4 rounded-xl bg-black/40 border-2 border-[#00FF9F] shadow-[0_0_30px_rgba(0,255,159,0.5)] animate-glow">
              <BookOpen className="w-12 h-12 text-[#00FF9F]" />
              <Sparkles className="w-6 h-6 text-[#FFD700] absolute -top-2 -right-2 animate-pulse drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
            </div>
          </div>

          {/* Title with Glitch Effect */}
          <div className="relative inline-block">
            <h1 className="text-6xl uppercase tracking-wider mb-3 relative">
              <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Browse </span>
              <span className="text-[#00FF9F] drop-shadow-[0_0_20px_rgba(0,255,159,0.8)]">Articles</span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#00FF9F] to-transparent shadow-[0_0_10px_rgba(0,255,159,0.8)]" />
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the latest news and insights on anti-corruption efforts in Indonesia and integrity practices worldwide
          </p>

          {/* Stats Pills */}
          <div className="flex items-center justify-center gap-4">
            <div className="px-5 py-2 rounded-full bg-black/60 border border-[#00FF9F]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,159,0.2)]">
              <span className="text-[#00FF9F]">{filteredArticles.length}</span>
              <span className="text-gray-400 ml-2">{filteredArticles.length === 1 ? 'Article' : 'Articles'}</span>
            </div>
            <div className="px-5 py-2 rounded-full bg-black/60 border border-[#7B2CBF]/30 backdrop-blur-sm shadow-[0_0_15px_rgba(123,44,191,0.2)]">
              <span className="text-[#7B2CBF]">●</span>
              <span className="text-gray-400 ml-2">Updated November 2025</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-8">
          {/* Search Bar with Neon Glow */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9F] to-[#7B2CBF] rounded-lg blur opacity-30"></div>
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00FF9F]" />
              <input
                type="text"
                placeholder="SEARCH ARTICLES BY TITLE, SOURCE, OR TAGS..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-black/80 border-2 border-[#00FF9F]/30 rounded-lg text-white placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:border-[#00FF9F] focus:shadow-[0_0_30px_rgba(0,255,159,0.3)] transition-all backdrop-blur-sm uppercase tracking-wide"
              />
            </div>
          </div>

          {/* Category Filter with Gaming Style */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-3 py-2 bg-black/60 border border-gray-700 rounded-lg backdrop-blur-sm">
              <Filter className="w-5 h-5 text-[#00FF9F]" />
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg uppercase tracking-wider transition-all border-2 ${
                selectedCategory === 'all'
                  ? 'bg-[#00FF9F] text-black border-[#00FF9F] shadow-[0_0_25px_rgba(0,255,159,0.6),inset_0_0_20px_rgba(0,255,159,0.2)]'
                  : 'bg-black/60 text-gray-400 border-gray-700 hover:border-[#00FF9F]/50 hover:text-[#00FF9F] backdrop-blur-sm'
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setSelectedCategory('indonesia')}
              className={`px-6 py-3 rounded-lg uppercase tracking-wider transition-all border-2 ${
                selectedCategory === 'indonesia'
                  ? 'bg-[#00FF9F] text-black border-[#00FF9F] shadow-[0_0_25px_rgba(0,255,159,0.6),inset_0_0_20px_rgba(0,255,159,0.2)]'
                  : 'bg-black/60 text-gray-400 border-gray-700 hover:border-[#00FF9F]/50 hover:text-[#00FF9F] backdrop-blur-sm'
              }`}
            >
              Indonesia Focus
            </button>
            <button
              onClick={() => setSelectedCategory('integrity')}
              className={`px-6 py-3 rounded-lg uppercase tracking-wider transition-all border-2 ${
                selectedCategory === 'integrity'
                  ? 'bg-[#7B2CBF] text-white border-[#7B2CBF] shadow-[0_0_25px_rgba(123,44,191,0.6),inset_0_0_20px_rgba(123,44,191,0.2)]'
                  : 'bg-black/60 text-gray-400 border-gray-700 hover:border-[#7B2CBF]/50 hover:text-[#7B2CBF] backdrop-blur-sm'
              }`}
            >
              Integrity & Ethics
            </button>
            <button
              onClick={() => setSelectedCategory('both')}
              className={`px-6 py-3 rounded-lg uppercase tracking-wider transition-all border-2 ${
                selectedCategory === 'both'
                  ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_25px_rgba(255,215,0,0.6),inset_0_0_20px_rgba(255,215,0,0.2)]'
                  : 'bg-black/60 text-gray-400 border-gray-700 hover:border-[#FFD700]/50 hover:text-[#FFD700] backdrop-blur-sm'
              }`}
            >
              Both
            </button>
          </div>

          {/* Active Tag Filter */}
          {selectedTag && (
            <div className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="text-sm text-gray-400 uppercase tracking-wide">Active Filter:</span>
              <button
                onClick={() => setSelectedTag(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00FF9F]/20 text-[#00FF9F] border-2 border-[#00FF9F]/50 hover:bg-[#00FF9F]/30 transition-all shadow-[0_0_15px_rgba(0,255,159,0.3)] uppercase tracking-wide"
              >
                <span>{selectedTag}</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Popular Tags - Gaming Chips */}
          <div className="flex items-center justify-center gap-3 flex-wrap max-w-5xl mx-auto">
            <span className="px-3 py-1.5 bg-black/60 border border-gray-700 rounded-lg text-xs text-gray-400 uppercase tracking-wider backdrop-blur-sm">Tags:</span>
            {allTags.slice(0, 10).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-1.5 rounded-lg text-xs uppercase tracking-wide transition-all border ${
                  selectedTag === tag
                    ? 'bg-[#00FF9F]/20 text-[#00FF9F] border-[#00FF9F]/50 shadow-[0_0_10px_rgba(0,255,159,0.3)]'
                    : 'bg-black/40 text-gray-400 border-gray-700 hover:bg-black/60 hover:border-[#00FF9F]/30 hover:text-[#00FF9F] backdrop-blur-sm'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-black/60 border-2 border-gray-700 flex items-center justify-center backdrop-blur-sm">
              <Search className="w-10 h-10 text-gray-500" />
            </div>
            <h3 className="text-2xl text-white mb-3 uppercase tracking-wide">No Articles Found</h3>
            <p className="text-gray-400 mb-6 text-lg">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedTag(null);
              }}
              className="px-8 py-3 rounded-lg bg-[#00FF9F] text-black border-2 border-[#00FF9F] hover:bg-[#00FF9F]/90 transition-all shadow-[0_0_25px_rgba(0,255,159,0.5)] uppercase tracking-wider"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Footer with Neon Divider */}
        <div className="mt-20 pt-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#00FF9F] to-transparent shadow-[0_0_10px_rgba(0,255,159,0.5)]" />
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Articles sourced from leading organizations
            </p>
            <p className="text-xs text-gray-500">
              Click on any article to read the full content on the original source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
