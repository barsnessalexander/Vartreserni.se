import { Link } from 'react-router-dom';

function Terms() {
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
            <h1 className="text-3xl font-bold mb-6">Användarvillkor</h1>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptans av villkor</h2>
                <p>
                  Genom att använda Vart Reser Ni? accepterar du dessa användarvillkor. Om du inte accepterar villkoren ska du inte använda webbplatsen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Användning av tjänsten</h2>
                <p>Du samtycker till att:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Tillhandahålla korrekt information</li>
                  <li>Inte missbruka tjänsten</li>
                  <li>Inte använda tjänsten för olagliga ändamål</li>
                  <li>Inte störa tjänstens funktion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Innehåll</h2>
                <p>
                  All information som tillhandahålls på webbplatsen är endast för informationsändamål. Vi garanterar inte att informationen är fullständig eller aktuell.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Användardata</h2>
                <p>
                  Information du delar med oss behandlas enligt vår integritetspolicy. Genom att använda tjänsten godkänner du vår insamling och användning av data enligt policyn.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Annonser och tredjepartsinnehåll</h2>
                <p>
                  Webbplatsen kan visa annonser och länkar till tredjepartswebbplatser. Vi ansvarar inte för innehållet på dessa webbplatser eller deras integritetspolicyer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Ändringar av villkor</h2>
                <p>
                  Vi förbehåller oss rätten att ändra dessa villkor när som helst. Fortsatt användning av tjänsten efter ändringar utgör acceptans av de nya villkoren.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Ansvarsbegränsning</h2>
                <p>
                  Vi ansvarar inte för direkta eller indirekta skador som uppstår genom användning av tjänsten. All användning sker på egen risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Kontakt</h2>
                <p>
                  Vid frågor om dessa villkor, kontakta oss på{' '}
                  <a
                    href="mailto:vartreserni@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    vartreserni@gmail.com
                  </a>
                </p>
              </section>

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

export default Terms;