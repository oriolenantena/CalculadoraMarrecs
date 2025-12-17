import { Calculator } from "@/components/Calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header with Logo */}
        <header className="text-center mb-8">
          <img
            src="/images/logo.png"
            alt="Calculadora Escoles Bressol Municipals"
            className="max-w-full h-auto mx-auto mb-6"
            style={{ maxWidth: "600px" }}
          />
        </header>

        {/* Intro Text */}
        <section className="prose prose-lg max-w-none mb-8 text-foreground">
          <p>
            L&apos;Ajuntament de Sant Just Desvern té implantat des del curs escolar
            2020-2021 un nou sistema de preus públics de les Escoles Bressol
            Municipals basat en la tarifació social. Aquesta tarifació permet
            ajustar les quotes de manera individual i diferenciada a la renda i
            extensió de la unitat familiar a la que pertanyin els infants que
            rebin la seva educació infantil a Marrecs o Mainada. Simulador dels
            preus públics per a l&apos;escolarització d&apos;infants a les Escoles Bressol
            Municipals de Sant Just.
          </p>

          <p>
            L&apos;objectiu d&apos;aquesta calculadora és orientar les famílies amb
            infants de 0-3 anys que desitgin inscriure&apos;ls a l&apos;EBM Marrecs o a
            l&apos;EBM Mainada perquè puguin conèixer quins serien, en el seu cas
            particular, els preus públics aplicables en cadascun dels serveis
            que podrien rebre. Els imports resultants es calculen en funció de
            les variables, de renda i nombre de membres de la unitat familiar,
            que utilitza el simulador, d&apos;acord amb l&apos;ordenança municipal
            aprovada per l&apos;Ajuntament de Sant Just Desvern.
          </p>

          {/* I2 Subsidy Notice */}
          <div className="bg-primary/10 border-l-4 border-primary p-4 my-6 rounded-r-lg">
            <p className="font-semibold text-primary m-0">
              L&apos;IMPORT RESULTANT CORRESPONENT A LA QUOTA DEL SERVEI EDUCATIU PER
              A L&apos;ALUMNAT D&apos;I2 ESTÀ SUBVENCIONAT INTEGRAMENT I, PER TANT, EL
              COST D&apos;AQUEST SERVEI PER A LES FAMÍLIES ÉS DE 0 €.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Els resultats obtinguts amb la calculadora, per part de les persones
            particulars, són fruit de les dades introduïdes i no generen cap
            dret adquirit, ni vinculen a l&apos;Administració fins al moment en el
            qual, a través del corresponent procediment administratiu i la
            verificació de totes les dades aplicables, es calculi la liquidació
            definitiva de la quota.
          </p>
        </section>

        {/* Calculator Component */}
        <Calculator />

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground print:hidden">
          <p>
            Calculadora de quotes - Escoles Bressol Municipals de Sant Just
            Desvern
          </p>
          <p className="mt-2">Curs 2025-2026</p>
        </footer>
      </main>
    </div>
  );
}
