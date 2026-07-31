import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
              Informativa sulla Privacy
            </span>
          </h1>

          <p className="mb-12 text-zinc-400">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          <div className="space-y-12 leading-relaxed text-zinc-300">
            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">1. Titolare del Trattamento</h2>
              <p className="mb-4">Il Titolare del trattamento dei dati personali è:</p>
              <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                <p className="mb-2 font-semibold text-white">Porte &amp; Finestre Service</p>
                <p>Modena, Emilia-Romagna, Italia</p>
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">2. Dati Personali Raccolti</h2>
              <p className="mb-4">Raccogliamo i seguenti dati personali:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Messaggio di contatto</li>
                <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">3. Finalità del Trattamento</h2>
              <p className="mb-4">I dati personali vengono raccolti e trattati per le seguenti finalità:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Gestire la relazione commerciale</li>
                <li>Migliorare i servizi offerti</li>
                <li>Adempiere a obblighi di legge</li>
                <li>Analisi statistiche anonime sul traffico del sito</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">4. Base Giuridica del Trattamento</h2>
              <p className="mb-4">Il trattamento dei dati personali si basa su:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Consenso esplicito dell'interessato (art. 6, par. 1, lett. a) GDPR)</li>
                <li>Esecuzione di misure precontrattuali o contrattuali (art. 6, par. 1, lett. b) GDPR)</li>
                <li>Adempimento di obblighi legali (art. 6, par. 1, lett. c) GDPR)</li>
                <li>Legittimo interesse del Titolare (art. 6, par. 1, lett. f) GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">5. Periodo di Conservazione</h2>
              <p>
                I dati personali vengono conservati per il tempo strettamente necessario al conseguimento delle finalità per cui sono stati raccolti:
              </p>
              <ul className="ml-4 mt-4 list-inside list-disc space-y-2">
                <li>Dati di contatto: fino a 24 mesi dalla raccolta</li>
                <li>Dati contrattuali: 10 anni per obblighi fiscali</li>
                <li>Dati di navigazione: fino a 12 mesi</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">6. Destinatari dei Dati</h2>
              <p className="mb-4">I dati personali possono essere comunicati a:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Fornitori di servizi tecnici (hosting, email)</li>
                <li>Consulenti e professionisti (commercialisti, avvocati)</li>
                <li>Autorità pubbliche quando richiesto per legge</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">7. Cookie</h2>
              <p>
                Il sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per migliorare l'esperienza dell'utente. Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/cookie-policy" className="text-[#3A7DFF] hover:underline">
                  Cookie Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">8. Diritti dell'Interessato</h2>
              <p className="mb-4">In conformità al GDPR, hai diritto di:</p>
              <ul className="ml-4 list-inside list-disc space-y-2">
                <li>Accedere ai tuoi dati personali (art. 15 GDPR)</li>
                <li>Rettificare dati inesatti o incompleti (art. 16 GDPR)</li>
                <li>Cancellare i tuoi dati (&quot;diritto all'oblio&quot;) (art. 17 GDPR)</li>
                <li>Limitare il trattamento (art. 18 GDPR)</li>
                <li>Opporti al trattamento (art. 21 GDPR)</li>
                <li>Portabilità dei dati (art. 20 GDPR)</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Presentare reclamo all'Autorità Garante</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">9. Sicurezza dei Dati</h2>
              <p>
                Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione. Tutti i dati vengono trasmessi in modo sicuro tramite protocollo HTTPS.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">10. Trasferimento Dati Extra-UE</h2>
              <p>
                I dati personali non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE). Qualora ciò fosse necessario in futuro, verranno adottate tutte le garanzie previste dal GDPR.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">11. Modifiche alla Privacy Policy</h2>
              <p>
                Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-syne text-2xl font-bold text-white">12. Contatti</h2>
              <p className="mb-4">
                Per esercitare i tuoi diritti o per qualsiasi richiesta relativa al trattamento dei dati personali, puoi contattarci a:
              </p>
              <div className="rounded-xl border border-white/5 bg-[#0F131A] p-6">
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
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
