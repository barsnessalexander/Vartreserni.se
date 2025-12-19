import { Link } from 'react-router-dom';

function About() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="min-h-screen bg-black/50">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Om Vart Reser Ni?</h1>

            <div className="space-y-6 text-gray-600">
              <p>
                Vart Reser Ni? är en plattform skapad för att hjälpa unga
                svenskar att upptäcka populära resmål och se vart andra i samma
                ålder planerar att resa. Vi tror på kraften i att dela
                reseinformation och hjälpa varandra att hitta de perfekta
                destinationerna.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">
                Vår Vision
              </h2>
              <p>
                Vår vision är att skapa Sveriges mest omfattande och
                användarvänliga plattform för unga resenärer. Vi vill göra det
                enklare att:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hitta populära resmål bland andra i din ålder</li>
                <li>Se demografisk information om olika destinationer</li>
                <li>Dela dina egna resplaner och inspirera andra</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">
                Kontakta Oss
              </h2>
              <p>
                Har du frågor, förslag eller vill samarbeta med oss? Tveka inte
                att höra av dig till{' '}
                <a
                  href="mailto:vartreserni@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  vartreserni@gmail.com
                </a>
              </p>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  ← Tillbaka till startsidan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
