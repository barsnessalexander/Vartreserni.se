import { Link } from 'react-router-dom';

function Privacy() {
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
            <h1 className="text-3xl font-bold mb-6">Integritetspolicy</h1>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introduktion</h2>
                <p>
                  Välkommen till Vart Reser Ni?:s integritetspolicy. Vi respekterar din integritet och är fast beslutna att skydda dina personuppgifter. Denna policy förklarar hur vi samlar in, använder och skyddar information som du delar med oss.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Information vi samlar in</h2>
                <p>Vi samlar in följande information när du använder vår tjänst:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Ålder</li>
                  <li>Kön</li>
                  <li>Hemort</li>
                  <li>Resmål och resplaner</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Hur vi använder informationen</h2>
                <p>Vi använder den insamlade informationen för att:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Visa statistik och trender om resemönster</li>
                  <li>Förbättra vår tjänst och användarupplevelse</li>
                  <li>Skapa aggregerad och anonymiserad statistik</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Delning av information</h2>
                <p>
                  Vi delar aldrig personligt identifierbar information med tredje part. All statistik som visas på webbplatsen är aggregerad och anonymiserad.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Cookies och spårning</h2>
                <p>
                  Vi använder Google Analytics för att förstå hur vår webbplats används. Detta innebär att cookies placeras på din enhet. Du kan när som helst ändra dina cookie-inställningar i din webbläsare.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Dina rättigheter</h2>
                <p>Du har rätt att:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Få tillgång till dina personuppgifter</li>
                  <li>Begära rättelse av felaktiga uppgifter</li>
                  <li>Begära radering av dina uppgifter</li>
                  <li>Invända mot vår behandling av dina uppgifter</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Kontakta oss</h2>
                <p>
                  Om du har frågor om vår integritetspolicy eller hur vi hanterar dina uppgifter, vänligen kontakta oss på{' '}
                  <a
                    href="mailto:vartreserni@gmail.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    vartreserni@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Uppdateringar av policyn</h2>
                <p>
                  Vi kan komma att uppdatera denna integritetspolicy från tid till annan. Den senaste versionen finns alltid tillgänglig på vår webbplats.
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

export default Privacy;