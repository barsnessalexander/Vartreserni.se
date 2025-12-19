import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import ReactMarkdown from 'react-markdown';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [readingProgress, setReadingProgress] = React.useState(0);

  React.useEffect(() => {
    fetchArticle();
  }, [slug]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchArticle = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          <div className="text-gray-600 animate-pulse">Laddar guide...</div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center">
        <div className="text-center animate-fade-in max-w-md mx-auto px-4">
          <div className="bg-white rounded-xl shadow-soft p-8">
            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Guiden hittades inte
            </h2>
            <p className="text-gray-600 mb-6">
              Vi kunde inte hitta den guide du letar efter.
            </p>
            <Link
              to="/articles"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium group transition-colors duration-200"
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
              Tillbaka till guider
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate reading time
  const wordCount = article.content.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Use article image or fallback
  const heroImage = article.image_url || 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920';

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-50 via-white to-rose-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div 
          className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-secondary-900/20 mix-blend-multiply" />
          
          {/* Back Button */}
          <div className="absolute top-6 left-4 sm:left-6 z-10">
            <Link
              to="/articles"
              className="inline-flex items-center px-4 py-2 text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group border border-white/20"
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
              <span className="text-sm font-medium">Tillbaka</span>
            </Link>
          </div>

          {/* Article Meta */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto">
              {/* Reading Time & Date */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-white/90 text-sm">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{readingTime} min läsning</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {new Date(article.publication_date).toLocaleDateString('sv-SE', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{article.author}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Main Article Content */}
            <div>
              <div className="bg-white rounded-xl shadow-soft overflow-hidden animate-fade-in">
                {/* Article Header */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 sm:p-8 border-b border-gray-100">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {article.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span>Publicerad {new Date(article.publication_date).toLocaleDateString('sv-SE')}</span>
                    <span className="text-gray-400">•</span>
                    <span>{readingTime} minuters läsning</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 sm:p-8 lg:p-12">
                  <article className="prose prose-lg max-w-none">
                    <ReactMarkdown 
                      components={{
                        h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">{children}</h1>,
                        h2: ({children}) => <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8 border-l-4 border-primary-500 pl-4">{children}</h2>,
                        h3: ({children}) => <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">{children}</h3>,
                        p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4 text-lg">{children}</p>,
                        ul: ({children}) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">{children}</ul>,
                        ol: ({children}) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">{children}</ol>,
                        li: ({children}) => <li className="leading-relaxed">{children}</li>,
                        blockquote: ({children}) => (
                          <blockquote className="border-l-4 border-accent-400 bg-accent-50 p-4 my-6 italic text-gray-700 rounded-r-lg">
                            {children}
                          </blockquote>
                        ),
                        strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                        em: ({children}) => <em className="italic text-gray-800">{children}</em>,
                        a: ({href, children}) => (
                          <a 
                            href={href} 
                            className="text-primary-600 hover:text-primary-800 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                        code: ({children}) => (
                          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
                            {children}
                          </code>
                        ),
                        pre: ({children}) => (
                          <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                            {children}
                          </pre>
                        )
                      }}
                    >
                      {article.content}
                    </ReactMarkdown>
                  </article>

                  {/* Article Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4">
                            <span className="text-white font-bold">
                              {article.author.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Skriven av {article.author}</p>
                            <p className="text-sm text-gray-600">Reseguide och äventyrare</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles CTA */}
              <div className="mt-8">
                <div className="bg-white rounded-xl shadow-soft p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Fler reseguider väntar
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Upptäck fler expertguider och tips för din nästa resa
                  </p>
                  <Link
                    to="/articles"
                    className="inline-flex items-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-medium group"
                  >
                    <span>Utforska alla guider</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Redo för ditt nästa äventyr?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Upptäck vart andra reser och planera din perfekta resa med hjälp av vår statistik och community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Se resestatistik
            </Link>
            <Link
              to="/articles"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold"
            >
              Fler guider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;