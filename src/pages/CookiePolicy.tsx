import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function CookiePolicy() {
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
              Cookie Policy
            </span>
          </h1>

          <p className="text-zinc-400 mb-12">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>

          {/* Content Sections */}
          <div className="space-y-12 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">1. Cosa sono i Cookie</h2>
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo
                (computer, tablet, smartphone) quando visiti un sito web. I cookie permettono al
                sito di ricordare le tue azioni e preferenze (come login, lingua, dimensione dei
                caratteri e altre impostazioni di visualizzazione) per un periodo di tempo, così
                non devi reinserirle ogni volta che torni sul sito o navighi da una pagina all'altra.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">2. Come Utilizziamo i Cookie</h2>
              <p className="mb-4">
                Utilizziamo i cookie per diversi motivi descritti di seguito. Purtroppo nella
                maggior parte dei casi non esistono opzioni standard del settore per disabilitare
                i cookie senza disabilitare completamente le funzionalità e le caratteristiche
                che aggiungono a questo sito.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">3. Tipologie di Cookie Utilizzati</h2>
              
              <div className="space-y-6 mt-6">
                <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-3">Cookie Tecnici (Necessari)</h3>
                  <p className="mb-3">
                    Questi cookie sono essenziali per il corretto funzionamento del sito.
                    Senza questi cookie, alcuni servizi non possono essere forniti.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Cookie di sessione per la navigazione</li>
                    <li>Cookie per il consenso ai cookie</li>
                    <li>Cookie di sicurezza</li>
                  </ul>
                  <p className="mt-3 text-sm text-zinc-500">
                    Durata: Sessione o fino a 12 mesi
                  </p>
                </div>

                <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-3">Cookie Analitici</h3>
                  <p className="mb-3">
                    Questi cookie ci aiutano a capire come i visitatori interagiscono con il
                    sito web raccogliendo e riportando informazioni in forma anonima.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Numero di visitatori del sito</li>
                    <li>Pagine più visitate</li>
                    <li>Durata media della visita</li>
                    <li>Sorgente del traffico</li>
                  </ul>
                  <p className="mt-3 text-sm text-zinc-500">
                    Durata: Fino a 24 mesi
                  </p>
                </div>

                <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-syne text-xl font-bold text-white mb-3">Cookie di Preferenza</h3>
                  <p className="mb-3">
                    Questi cookie permettono al sito di ricordare le scelte che hai fatto
                    (come il tuo nome utente, lingua o la regione in cui ti trovi) e forniscono
                    funzionalità migliorate e più personali.
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Preferenze di visualizzazione</li>
                    <li>Impostazioni della lingua</li>
                  </ul>
                  <p className="mt-3 text-sm text-zinc-500">
                    Durata: Fino a 12 mesi
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">4. Cookie di Terze Parti</h2>
              <p className="mb-4">
                In alcuni casi utilizziamo cookie forniti da terze parti fidate. La seguente
                sezione descrive quali cookie di terze parti potresti incontrare attraverso
                questo sito:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Servizi di analisi web per aiutarci a capire come gli utenti utilizzano il
                  sito e come possiamo migliorare la tua esperienza
                </li>
                <li>
                  Occasionalmente testiamo nuove funzionalità e apportiamo modifiche al modo
                  in cui il sito viene offerto
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">5. Gestione dei Cookie</h2>
              <p className="mb-4">
                Puoi gestire le tue preferenze sui cookie in diversi modi:
              </p>
              
              <div className="space-y-4">
                <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Banner dei Cookie</h3>
                  <p className="text-sm">
                    Quando visiti il sito per la prima volta, ti viene mostrato un banner che
                    ti permette di accettare o rifiutare i cookie non essenziali.
                  </p>
                </div>

                <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Impostazioni del Browser</h3>
                  <p className="text-sm mb-3">
                    Puoi configurare il tuo browser per rifiutare tutti i cookie o per indicare
                    quando un cookie viene inviato. Tuttavia, se non accetti i cookie, potresti
                    non essere in grado di utilizzare alcune funzionalità del sito.
                  </p>
                  <p className="text-xs text-zinc-500">
                    Consulta la guida del tuo browser per maggiori informazioni su come gestire i cookie.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">6. Come Disabilitare i Cookie</h2>
              <p className="mb-4">
                La maggior parte dei browser web consente di controllare i cookie attraverso
                le impostazioni del browser. Ecco i link alle istruzioni per i browser più comuni:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#3A7DFF] hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-[#3A7DFF] hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#3A7DFF] hover:underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#3A7DFF] hover:underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">7. Aggiornamenti alla Cookie Policy</h2>
              <p>
                Potremmo aggiornare questa Cookie Policy periodicamente per riflettere, ad esempio,
                modifiche ai cookie che utilizziamo o per altri motivi operativi, legali o normativi.
                Ti invitiamo quindi a rivisitare periodicamente questa Cookie Policy per rimanere
                informato sul nostro utilizzo dei cookie.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">8. Contatti</h2>
              <p className="mb-4">
                Per qualsiasi domanda relativa a questa Cookie Policy, puoi contattarci a:
              </p>
              <div className="bg-[#0F131A] border border-white/5 rounded-xl p-6">
                <p className="font-semibold text-white mb-2">Porte & Finestre Service</p>
                <p>Email: portefinestre88@gmail.com</p>
                <p>Telefono: +39 371 519 9017</p>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-2xl font-bold text-white mb-4">9. Informazioni Aggiuntive</h2>
              <p>
                Per ulteriori informazioni sul trattamento dei tuoi dati personali, consulta la
                nostra{' '}
                <a href="/privacy-policy" className="text-[#3A7DFF] hover:underline">
                  Informativa sulla Privacy
                </a>.
              </p>
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
