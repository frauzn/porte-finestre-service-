import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#07090D] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07090D]/80 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-6">
          <a href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span>Torna al sito</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[900px] mx-auto"
        >
          {/* Title */}
          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Informativa sulla Privacy
            </span>
          </h1>

          <p className="text-zinc-400 mb-12">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          {/* Content Sections */}
          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">1. Titolare del Trattamento</h2>
              <p className="mb-4">
                Il Titolare del trattamento dei dati personali è:
              </p>
              <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                <p className="font-semibold text-white mb-2">Porte & Finestre Service</p>
                <p>Modena, Emilia-Romagna, Italia</p>
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">2. Dati Personali Raccolti</h2>
              <p className="mb-4">Raccogliamo i seguenti dati personali:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Messaggio di contatto</li>
                <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">3. Finalità del Trattamento</h2>
              <p className="mb-4">I dati personali vengono raccolti e trattati per le seguenti finalità:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Gestire la relazione commerciale</li>
                <li>Migliorare i servizi offerti</li>
                <li>Adempiere a obblighi di legge</li>
                <li>Analisi statistiche anonime sul traffico del sito</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">4. Base Giuridica del Trattamento</h2>
              <p className="mb-4">Il trattamento dei dati personali si basa su:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Consenso esplicito dell'interessato (art. 6, par. 1, lett. a) GDPR)</li>
                <li>Esecuzione di misure precontrattuali o contrattuali (art. 6, par. 1, lett. b) GDPR)</li>
                <li>Adempimento di obblighi legali (art. 6, par. 1, lett. c) GDPR)</li>
                <li>Legittimo interesse del Titolare (art. 6, par. 1, lett. f) GDPR)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">5. Periodo di Conservazione</h2>
              <p>
                I dati personali vengono conservati per il tempo strettamente necessario al conseguimento
                delle finalità per cui sono stati raccolti:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Dati di contatto: fino a 24 mesi dalla raccolta</li>
                <li>Dati contrattuali: 10 anni per obblighi fiscali</li>
                <li>Dati di navigazione: fino a 12 mesi</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">6. Destinatari dei Dati</h2>
              <p className="mb-4">I dati personali possono essere comunicati a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornitori di servizi tecnici (hosting, email)</li>
                <li>Consulenti e professionisti (commercialisti, avvocati)</li>
                <li>Autorità pubbliche quando richiesto per legge</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">7. Cookie</h2>
              <p className="mb-4">
                Il sito utilizza cookie tecnici necessari al funzionamento e cookie analitici per
                migliorare l'esperienza dell'utente. Per maggiori informazioni, consulta la nostra{' '}
                <a href="/cookie-policy" className="text-[#3A7DFF] hover:underline">Cookie Policy</a>.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">8. Diritti dell'Interessato</h2>
              <p className="mb-4">
                In conformità al GDPR, hai diritto di:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accedere ai tuoi dati personali (art. 15 GDPR)</li>
                <li>Rettificare dati inesatti o incompleti (art. 16 GDPR)</li>
                <li>Cancellare i tuoi dati ("diritto all'oblio") (art. 17 GDPR)</li>
                <li>Limitare il trattamento (art. 18 GDPR)</li>
                <li>Opporti al trattamento (art. 21 GDPR)</li>
                <li>Portabilità dei dati (art. 20 GDPR)</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Presentare reclamo all'Autorità Garante</li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">9. Sicurezza dei Dati</h2>
              <p>
                Adottiamo misure tecniche e organizzative adeguate per proteggere i dati personali
                da accessi non autorizzati, perdita, distruzione o divulgazione. Tutti i dati vengono
                trasmessi in modo sicuro tramite protocollo HTTPS.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">10. Trasferimento Dati Extra-UE</h2>
              <p>
                I dati personali non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE).
                Qualora ciò fosse necessario in futuro, verranno adottate tutte le garanzie previste
                dal GDPR.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">11. Modifiche alla Privacy Policy</h2>
              <p>
                Ci riserviamo il diritto di modificare questa informativa in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di
                ultimo aggiornamento.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">12. Contatti</h2>
              <p className="mb-4">
                Per esercitare i tuoi diritti o per qualsiasi richiesta relativa al trattamento
                dei dati personali, puoi contattarci a:
              </p>
              <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-16 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] rounded-full font-semibold hover:shadow-xl hover:shadow-[#1F5FBF]/30 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Torna alla Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
