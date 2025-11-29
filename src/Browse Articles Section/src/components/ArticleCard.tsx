import { ExternalLink, Calendar, Tag } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group relative">
      {/* Neon Border Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00FF9F] via-[#7B2CBF] to-[#00FF9F] rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-500"></div>
      
      <div className="relative bg-black/80 rounded-xl overflow-hidden border-2 border-gray-800 group-hover:border-[#00FF9F]/50 transition-all duration-300 backdrop-blur-sm">
        {/* Image with Scan Effect */}
        <div className="relative h-52 overflow-hidden bg-black">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          
          {/* Scan Line Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF9F]/10 to-transparent animate-pulse" />
          </div>
          
          {/* Category Badge with Neon */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1.5 rounded-lg text-xs uppercase tracking-widest backdrop-blur-md border-2 shadow-lg ${
              article.category === 'indonesia' 
                ? 'bg-[#00FF9F]/20 text-[#00FF9F] border-[#00FF9F]/50 shadow-[0_0_15px_rgba(0,255,159,0.5)]'
                : article.category === 'integrity'
                ? 'bg-[#7B2CBF]/20 text-[#7B2CBF] border-[#7B2CBF]/50 shadow-[0_0_15px_rgba(123,44,191,0.5)]'
                : 'bg-[#FFD700]/20 text-[#FFD700] border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.5)]'
            }`}>
              {article.category === 'both' ? 'BOTH' : article.category.toUpperCase()}
            </span>
          </div>

          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00FF9F]/50"></div>
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00FF9F]/50"></div>
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#00FF9F]/50"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00FF9F]/50"></div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-4 bg-gradient-to-b from-black/60 to-black/90">
          {/* Meta Info with Icons */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-gray-400">
              <Calendar className="w-3.5 h-3.5 text-[#7B2CBF]" />
              <span className="uppercase tracking-wide">{article.date}</span>
            </div>
            <div className="flex-1 truncate">
              <span className="text-[#00FF9F] uppercase tracking-wide">{article.source}</span>
            </div>
          </div>

          {/* Title with Hover Effect */}
          <h3 className="text-lg text-white group-hover:text-[#00FF9F] transition-colors duration-300 line-clamp-2 min-h-[3.5rem] leading-snug">
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-gray-400 line-clamp-3 min-h-[3.75rem] leading-relaxed">
            {article.summary}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Tags with Gaming Style */}
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag, index) => (
              <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-900/80 border border-gray-700 text-xs text-gray-400 hover:border-[#00FF9F]/50 hover:text-[#00FF9F] transition-all">
                <Tag className="w-3 h-3" />
                <span className="uppercase tracking-wide">{tag}</span>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00FF9F]/10 border-2 border-[#00FF9F]/30 text-[#00FF9F] hover:bg-[#00FF9F]/20 hover:border-[#00FF9F] hover:shadow-[0_0_20px_rgba(0,255,159,0.4)] transition-all duration-300 group/link uppercase tracking-wider text-sm"
          >
            <span>Read Article</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:scale-110 transition-transform" />
          </a>
        </div>

        {/* Inner Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FF9F]/5 via-transparent to-[#7B2CBF]/5" />
        </div>
      </div>
    </div>
  );
}
