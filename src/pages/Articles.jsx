import React from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import AdCard from '../components/AdCard';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const ADS = [
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Relaxed_Linen_Shirt_Light_Blue_0168.jpg?v=1719906035",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-relaxed-linen-shirt",
    title: "Singular Society Linen Shirt",
    description: "Perfekt för din nästa resa - Avslappnad linenskjorta i ljusblått"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Straight_Leg_Linen_Drawstring_Trousers_Green_0011.jpg?v=1741787871",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-linen-draw-string-trousers",
    title: "Linen Draw String Trousers",
    description: "Bekväma och stilrena linnebyxor - Perfekta för varma dagar"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Relaxed_Linen_Shirt_green_0019.jpg?v=1741787632",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/men-s-relaxed-linen-shirt",
    title: "Relaxed Linen Shirt",
    description: "Avslappnad linenskjorta i grönt - Tidlös elegans"
  },
  {
    imageUrl: "https://cdn.shopify.com/s/files/1/0270/3635/2535/files/Mens_Straight_Leg_Light_Weight_Shorts_Navy_0198_93bc09f2-9d97-4ba7-9cc0-5e2d98f22703.jpg?v=1719829611",
    link: "https://ion.singular-society.com/t/t?a=1887854291&as=1953739335&t=2&tk=1&url=https://singular-society.com/products/mens-straightleg-linen-drawstring-shorts",
    title: "Linen Drawstring Shorts",
    description: "Lätta och luftiga shorts - Perfekta för sommaren"
  }
];

function Articles() {
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('publication_date', { ascending: false });

      if (error) throw error;
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-gray-600 animate-pulse">Laddar guider...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 mix-blend-multiply" />
          <div className="container mx-auto h-full flex flex-col justify-center px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
                Var förberedda!
              </h1>
              <p className="text-lg md:text-xl text-white/90 animate-slide-up">
                Våra bästa tips och insider-info till din nästa resa
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Tillbaka till startsidan
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {articles.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="bg-white rounded-xl shadow-soft p-8">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Inga guider än</h3>
                  <p className="text-gray-500">Nya reseguider kommer snart!</p>
                </div>
              </div>
            ) : (
              articles.map((article) => {
                // Calculate estimated reading time (average 200 words per minute)
                const wordCount = article.content.split(/\s+/).length;
                const readingTime = Math.max(1, Math.ceil(wordCount / 200));
                
                // Use article image or fallback to travel-themed image
                const imageUrl = article.image_url || 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800';
                
                return (
                  <Link
                    key={article.id}
                    to={`/article/${article.slug}`}
                    className="group bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-500 overflow-hidden transform hover:scale-[1.02] animate-fade-in"
                  >
                    {/* Article Image */}
                    <div 
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Reading Time Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {readingTime} min läsning
                        </span>
                      </div>
                      
                      {/* Category Badge (if available) */}
                      {article.category && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Article Content */}
                    <div className="p-6">
                      {/* Author and Date */}
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          <span>{article.author}</span>
                        </div>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>
                            {new Date(article.publication_date).toLocaleDateString('sv-SE', {
                              day: 'numeric',
                              month: 'short'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.content.split('\n')[0].substring(0, 120)}...
                      </p>

                      {/* Read More CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-blue-600 font-medium group/link text-sm">
                          <span>Läs hela guiden</span>
                          <svg
                            className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        
                        {/* Engagement indicator */}
                        <div className="flex items-center text-gray-400 text-xs">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>Populär</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;