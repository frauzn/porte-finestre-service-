import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.05] bg-[#07090D]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft size={20} />
            <span>Torna al sito</span>
          </Link>
        </div>
      </header>

      <div className="px-6 pb-20 pt-32 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[900px]"
        >
          <h1 className="mb-8 font-syne text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Cookie Policy
            </span>
          </h1>

          <p className="mb-12 text-zinc-400">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          <div className="space-y-12 leading-relaxed text-zinc-300">
            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">1. Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti web possono salvare sul dispositivo dell'utente durante la navigazione. Sono utilizzati per rendere il sito operativo, ricordare alcune preferenze e comprendere come viene utilizzato il sito.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">2. Titolare del trattamento</h2>
              <p className="mb-4">Il Titolare del trattamento dei dati personali è:</p>
              <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                <p className="mb-2 font-semibold text-white">Porte &amp; Finestre Service</p>
                <p>Modena, Emilia-Romagna, Italia</p>
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">3. Tipologie di cookie</h2>
              <p className="mb-4">Questo sito può utilizzare le seguenti categorie di cookie:</p>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                  <h3 className="mb-2 font-syne text-lg font-semibold text-white">Cookie tecnici</h3>
                  <p>
                    Sono necessari per il corretto funzionamento del sito e per fornire i servizi richiesti. Non richiedono il consenso dell'utente.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                  <h3 className="mb-2 font-syne text-lg font-semibold text-white">Cookie di preferenza</h3>
                  <p>
                    Consentono al sito di ricordare le scelte effettuate dall'utente, ad esempio la preferenza relativa ai cookie, per offrire un'esperienza più coerente nelle visite successive.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                  <h3 className="mb-2 font-syne text-lg font-semibold text-white">Cookie analitici</h3>
                  <p>
                    Possono essere utilizzati per raccogliere informazioni aggregate e anonime sull'utilizzo del sito, con lo scopo di migliorarne contenuti, prestazioni e navigazione. Se presenti e non anonimizzati, richiedono il consenso dell'utente.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                  <h3 className="mb-2 font-syne text-lg font-semibold text-white">Cookie di profilazione o marketing</h3>
                  <p>
                    Sono usati per creare profili relativi alle preferenze dell'utente e mostrare comunicazioni o contenuti personalizzati. Il sito non li utilizza senza il consenso esplicito dell'utente.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">4. Cookie utilizzati sul sito</h2>
              <p className="mb-4">
                Al momento il sito utilizza cookie tecnici e di preferenza necessari al funzionamento del banner dei cookie e alla memorizzazione della scelta dell'utente. Eventuali strumenti analitici o di marketing saranno attivati solo dopo il consenso, quando richiesto dalla normativa applicabile.
              </p>
              <div className="overflow-hidden rounded-xl border border-white/5 bg-[#0F131A]">
                <div className="grid grid-cols-1 border-b border-white/5 bg-white/[0.03] p-5 font-semibold text-white sm:grid-cols-[1.2fr_1fr_1fr]">
                  <span>Categoria</span>
                  <span>Finalità</span>
                  <span>Consenso</span>
                </div>
                <div className="grid grid-cols-1 gap-3 border-b border-white/5 p-5 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0">
                  <span>Cookie tecnici</span>
                  <span>Funzionamento del sito</span>
                  <span>Non richiesto</span>
                </div>
                <div className="grid grid-cols-1 gap-3 border-b border-white/5 p-5 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0">
                  <span>Cookie di preferenza</span>
                  <span>Memorizzazione delle scelte</span>
                  <span>Non richiesto</span>
                </div>
                <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[1.2fr_1fr_1fr] sm:gap-0">
                  <span>Cookie analitici o marketing</span>
                  <span>Statistiche o personalizzazione</span>
                  <span>Richiesto, se utilizzati</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">5. Gestione del consenso</h2>
              <p>
                Al primo accesso al sito puoi accettare, rifiutare o gestire le preferenze relative ai cookie non necessari tramite il banner visualizzato. Puoi modificare le tue scelte in qualsiasi momento cancellando i cookie dal browser o utilizzando le opzioni disponibili nel banner, se presenti.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">6. Come gestire i cookie dal browser</h2>
              <p className="mb-4">
                Puoi eliminare, bloccare o limitare i cookie direttamente dalle impostazioni del browser. La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
              </p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Google Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
                <li>Mozilla Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti</li>
                <li>Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito</li>
                <li>Safari: Impostazioni → Privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">7. Cookie di terze parti</h2>
              <p>
                Alcuni servizi esterni eventualmente integrati nel sito possono installare cookie propri. Tali cookie sono gestiti direttamente dai rispettivi fornitori, secondo le loro informative. Prima di integrare nuovi servizi esterni, il Titolare valuterà la necessità di aggiornare questa Cookie Policy e il meccanismo di consenso.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">8. Aggiornamenti della Cookie Policy</h2>
              <p>
                Questa Cookie Policy può essere aggiornata in caso di modifiche tecniche, normative o ai servizi utilizzati dal sito. La versione aggiornata sarà pubblicata su questa pagina con la relativa data di aggiornamento.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">9. Maggiori informazioni</h2>
              <p>
                Per maggiori informazioni sul trattamento dei dati personali, consulta la nostra{' '}
                <Link to="/privacy-policy" className="text-[#3A7DFF] hover:underline">
                  Informativa sulla Privacy
                </Link>
                . Per domande sui cookie o sul trattamento dei dati, puoi contattarci all'indirizzo portefinestre88@gmail.com.
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] px-8 py-4 font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#1F5FBF]/30"
            >
              <ArrowLeft size={20} />
              Torna alla Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
