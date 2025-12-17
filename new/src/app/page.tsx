import { Calculator } from "@/components/Calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Logo Section - white background */}
      <header className="bg-white">
        <div className="container mx-auto px-4 pt-8 pb-4 max-w-4xl print:pt-4 print:pb-4">
          <div className="text-center">
            {/* Logo - screen only */}
            <img
              src="/images/logo.png"
              alt="Escoles Bressol Municipals"
              className="max-w-md mx-auto print:hidden"
            />
          </div>
        </div>
      </header>

      {/* Main content with subtle gradient */}
      <main className="bg-gradient-to-b from-orange-50/40 to-white print:bg-white">
        <div className="container mx-auto px-4 pb-16 max-w-4xl print:pb-4 print:px-0">
          {/* Print-only header */}
          <div className="hidden print:flex print:items-center print:justify-between print:mb-6 print:pb-4 print:border-b print:border-gray-300">
            <div>
              <p className="font-bold text-sm">Escoles Bressol Municipals</p>
              <p className="text-xs text-gray-500">Sant Just Desvern</p>
            </div>
            <div className="text-right text-xs text-gray-500">
              <p className="font-medium">Simulació de quotes</p>
              <p>Data: {new Date().toLocaleDateString("ca-ES")}</p>
            </div>
          </div>

          {/* Info Banner - hide on print */}
          <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 print:hidden">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-emerald-900 mb-1">
                  Escolarització I2 gratuïta
                </h3>
                <p className="text-emerald-700 text-sm">
                  L&apos;import del servei educatiu per a l&apos;alumnat d&apos;I2 està subvencionat íntegrament.
                  <br />
                  El cost per a les famílies és de 0 €.
                </p>
              </div>
            </div>
          </div>

          {/* Calculator */}
          <Calculator />

          {/* Info Section - hide on print */}
          <section className="mt-12 space-y-6 print:hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Què és la tarifació social?</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Un sistema que ajusta les quotes de manera individual segons la renda i el nombre de membres de la unitat familiar.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900">Avís legal</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Els resultats són orientatius i no generen dret adquirit fins a la verificació administrativa oficial.
                </p>
              </div>
            </div>
          </section>

          {/* Footer - hide on print */}
          <footer className="mt-16 pt-8 border-t border-gray-100 text-center print:hidden">
            <p className="text-sm text-gray-400">
              Ajuntament de Sant Just Desvern
            </p>
          </footer>

          {/* Print-only footer */}
          <footer className="hidden print:block mt-8 pt-4 border-t border-gray-300 text-center">
            <p className="text-xs text-gray-500">
              Document generat per la Calculadora de Quotes · Escoles Bressol Municipals de Sant Just Desvern
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Els resultats són orientatius i no generen dret adquirit fins a la verificació administrativa oficial.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
