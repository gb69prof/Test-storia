// Test concettuale sulla Seconda guerra mondiale
// Le domande sono originali e puntano soprattutto su relazioni, cause, processi e interpretazione storica.
// Ogni domanda ha 4 risposte, una sola corretta.

const QUESTION_BANK = [
  {
    id: 1,
    question: "Perché la Seconda guerra mondiale non può essere spiegata solo come una guerra tra Stati?",
    answers: [
      { text: "Perché fu anche uno scontro tra visioni politiche opposte", correct: true },
      { text: "Perché fu combattuta soltanto con armi economiche", correct: false },
      { text: "Perché non coinvolse davvero le popolazioni civili", correct: false },
      { text: "Perché riguardò solo confini coloniali secondari", correct: false }
    ],
    explanation: "La guerra fu anche uno scontro ideologico: nazismo, fascismo, democrazie liberali e comunismo entrarono in conflitto in modo diretto."
  },
  {
    id: 2,
    question: "Quale idea aiuta a capire meglio la politica estera aggressiva della Germania nazista?",
    answers: [
      { text: "L'espansione territoriale come diritto del popolo tedesco", correct: true },
      { text: "La rinuncia a ogni forma di conquista europea", correct: false },
      { text: "La difesa rigida dell'ordine nato a Versailles", correct: false },
      { text: "La ricerca di neutralità stabile con tutti gli Stati", correct: false }
    ],
    explanation: "Il nazismo legava nazionalismo, razzismo e conquista dello spazio vitale, soprattutto verso l'Europa orientale."
  },
  {
    id: 3,
    question: "Che cosa mostra la politica dell'appeasement seguita da Francia e Regno Unito?",
    answers: [
      { text: "Il tentativo di evitare la guerra concedendo qualcosa a Hitler", correct: true },
      { text: "La volontà di attaccare subito la Germania nazista", correct: false },
      { text: "La scelta di allearsi stabilmente con l'Italia fascista", correct: false },
      { text: "Il rifiuto di trattare qualunque problema europeo", correct: false }
    ],
    explanation: "L'appeasement nacque dal desiderio di evitare un nuovo conflitto, ma finì per incoraggiare l'aggressività hitleriana."
  },
  {
    id: 4,
    question: "Perché l'invasione della Polonia segnò una rottura decisiva?",
    answers: [
      { text: "Perché rese evidente che Hitler non si sarebbe fermato", correct: true },
      { text: "Perché concluse subito il conflitto europeo", correct: false },
      { text: "Perché isolò completamente la Germania dal Giappone", correct: false },
      { text: "Perché portò l'Italia a uscire dal fascismo", correct: false }
    ],
    explanation: "Dopo la Polonia, Francia e Regno Unito dichiararono guerra: le concessioni non bastavano più."
  },
  {
    id: 5,
    question: "Che cosa distingue la guerra lampo da una guerra di logoramento?",
    answers: [
      { text: "La ricerca di vittorie rapide con mezzi coordinati", correct: true },
      { text: "La scelta di non usare carri armati e aviazione", correct: false },
      { text: "La volontà di combattere solo nelle trincee", correct: false },
      { text: "L'attesa passiva del crollo economico nemico", correct: false }
    ],
    explanation: "La guerra lampo puntava su velocità, sorpresa, aviazione e corazzati, evitando il blocco statico del fronte."
  },
  {
    id: 6,
    question: "Perché la battaglia d'Inghilterra ebbe un valore strategico superiore al suo territorio?",
    answers: [
      { text: "Perché impedì alla Germania di dominare l'aria britannica", correct: true },
      { text: "Perché permise ai tedeschi di occupare Londra", correct: false },
      { text: "Perché eliminò ogni presenza navale inglese", correct: false },
      { text: "Perché costrinse l'URSS ad arrendersi subito", correct: false }
    ],
    explanation: "Senza il controllo dei cieli, l'invasione della Gran Bretagna divenne impraticabile."
  },
  {
    id: 7,
    question: "Che cosa rivela l'attacco tedesco all'Unione Sovietica?",
    answers: [
      { text: "Il passaggio a una guerra ideologica e razziale totale", correct: true },
      { text: "La volontà tedesca di rispettare il patto con Stalin", correct: false },
      { text: "La decisione di abbandonare ogni conquista orientale", correct: false },
      { text: "Il ritorno tedesco a una guerra solo difensiva", correct: false }
    ],
    explanation: "L'Operazione Barbarossa non fu solo militare: portò sterminio, occupazione brutale e guerra ideologica contro il comunismo."
  },
  {
    id: 8,
    question: "Perché Stalingrado è considerata una svolta della guerra?",
    answers: [
      { text: "Perché mostrò che l'esercito tedesco poteva essere battuto", correct: true },
      { text: "Perché aprì la strada alla conquista tedesca di Mosca", correct: false },
      { text: "Perché causò l'uscita immediata degli Stati Uniti", correct: false },
      { text: "Perché chiuse il fronte orientale con una tregua", correct: false }
    ],
    explanation: "La sconfitta tedesca a Stalingrado spezzò il mito dell'invincibilità nazista e invertì l'iniziativa sul fronte orientale."
  },
  {
    id: 9,
    question: "Che cosa rende Pearl Harbor un evento decisivo nel conflitto mondiale?",
    answers: [
      { text: "Perché portò gli Stati Uniti dentro la guerra", correct: true },
      { text: "Perché fece uscire il Giappone dall'Asse", correct: false },
      { text: "Perché concluse subito la guerra nel Pacifico", correct: false },
      { text: "Perché rese neutrale la potenza americana", correct: false }
    ],
    explanation: "L'attacco giapponese spinse gli Stati Uniti a entrare direttamente nel conflitto, cambiando il rapporto di forze globale."
  },
  {
    id: 10,
    question: "Perché la guerra nel Pacifico ebbe caratteristiche diverse da quella europea?",
    answers: [
      { text: "Perché fu segnata da isole, flotte e lunga distanza", correct: true },
      { text: "Perché fu combattuta quasi solo in città europee", correct: false },
      { text: "Perché non coinvolse mai aviazione e marina", correct: false },
      { text: "Perché escluse ogni interesse coloniale asiatico", correct: false }
    ],
    explanation: "Nel Pacifico contavano il controllo delle isole, delle rotte navali e della superiorità aerea su spazi enormi."
  },
  {
    id: 11,
    question: "Che cosa significa definire la Seconda guerra mondiale una guerra totale?",
    answers: [
      { text: "Che coinvolse eserciti, economie, civili e propaganda", correct: true },
      { text: "Che fu combattuta soltanto da soldati professionisti", correct: false },
      { text: "Che rimase separata dalla vita quotidiana civile", correct: false },
      { text: "Che non richiese alcuna mobilitazione industriale", correct: false }
    ],
    explanation: "La guerra totale mobilitò fabbriche, città, comunicazione, donne, civili e risorse economiche."
  },
  {
    id: 12,
    question: "Quale funzione ebbe la propaganda nei regimi totalitari durante la guerra?",
    answers: [
      { text: "Costruire consenso e trasformare il nemico in minaccia", correct: true },
      { text: "Garantire libera discussione pubblica sulle sconfitte", correct: false },
      { text: "Separare completamente politica e comunicazione", correct: false },
      { text: "Ridurre il controllo dello Stato sulle masse", correct: false }
    ],
    explanation: "La propaganda serviva a mobilitare, semplificare, manipolare e rendere accettabile la violenza del regime."
  },
  {
    id: 13,
    question: "Perché la Shoah non è un semplice effetto collaterale della guerra?",
    answers: [
      { text: "Perché fu un progetto di sterminio pensato e organizzato", correct: true },
      { text: "Perché nacque solo da incidenti militari casuali", correct: false },
      { text: "Perché riguardò soltanto prigionieri armati", correct: false },
      { text: "Perché fu decisa dagli Alleati dopo il conflitto", correct: false }
    ],
    explanation: "La Shoah fu parte centrale del progetto razzista nazista: persecuzione, deportazione e sterminio furono organizzati dallo Stato."
  },
  {
    id: 14,
    question: "Che cosa mostra il ruolo dei collaborazionismi nei Paesi occupati?",
    answers: [
      { text: "Che il dominio nazista usò anche complicità locali", correct: true },
      { text: "Che tutte le società europee resistettero compatte", correct: false },
      { text: "Che l'occupazione avvenne sempre senza governi locali", correct: false },
      { text: "Che i nazisti agirono senza alcun appoggio esterno", correct: false }
    ],
    explanation: "Il controllo nazista fu spesso facilitato da apparati locali, opportunismo, antisemitismo e interessi politici interni."
  },
  {
    id: 15,
    question: "Perché la Resistenza non fu solo un fatto militare?",
    answers: [
      { text: "Perché fu anche scelta civile, politica e morale", correct: true },
      { text: "Perché evitò ogni forma di rischio personale", correct: false },
      { text: "Perché dipese solo dagli eserciti stranieri", correct: false },
      { text: "Perché non ebbe legami con la popolazione", correct: false }
    ],
    explanation: "Resistere significò combattere, aiutare, sabotare, nascondere, scegliere da che parte stare."
  },
  {
    id: 16,
    question: "Che cosa rese fragile la posizione dell'Italia fascista nel conflitto?",
    answers: [
      { text: "L'ambizione imperiale superiore alle risorse disponibili", correct: true },
      { text: "La superiorità industriale rispetto alla Germania", correct: false },
      { text: "La piena autosufficienza militare e produttiva", correct: false },
      { text: "L'assenza di obiettivi politici nel Mediterraneo", correct: false }
    ],
    explanation: "Il fascismo voleva una guerra da grande potenza, ma l'Italia non aveva risorse, industria e preparazione adeguate."
  },
  {
    id: 17,
    question: "Perché il 1943 fu un anno decisivo per l'Italia?",
    answers: [
      { text: "Perché cadde Mussolini e il Paese si divise", correct: true },
      { text: "Perché l'Italia conquistò stabilmente il Nord Africa", correct: false },
      { text: "Perché il fascismo ottenne il massimo consenso", correct: false },
      { text: "Perché la guerra terminò senza occupazioni", correct: false }
    ],
    explanation: "Dopo lo sbarco alleato e la caduta del fascismo, l'armistizio aprì occupazione tedesca, RSI e Resistenza."
  },
  {
    id: 18,
    question: "Quale concetto spiega bene il peso economico degli Stati Uniti nella guerra?",
    answers: [
      { text: "La capacità industriale trasformata in forza militare", correct: true },
      { text: "La rinuncia a produrre armi per gli Alleati", correct: false },
      { text: "La dipendenza totale dalle fabbriche europee", correct: false },
      { text: "La scelta di combattere senza mobilitare risorse", correct: false }
    ],
    explanation: "Gli Stati Uniti trasformarono industria, tecnologia e logistica in una potenza militare decisiva."
  },
  {
    id: 19,
    question: "Perché lo sbarco in Normandia ebbe un valore politico e militare insieme?",
    answers: [
      { text: "Perché aprì un fronte occidentale contro la Germania", correct: true },
      { text: "Perché fermò l'avanzata sovietica dentro Berlino", correct: false },
      { text: "Perché diede alla Germania il controllo dell'Atlantico", correct: false },
      { text: "Perché chiuse la guerra nel Pacifico contro il Giappone", correct: false }
    ],
    explanation: "La Normandia costrinse la Germania a combattere su più fronti e rafforzò il ruolo occidentale nella liberazione dell'Europa."
  },
  {
    id: 20,
    question: "Quale conseguenza storica emerse con chiarezza alla fine della guerra?",
    answers: [
      { text: "Il declino europeo e l'ascesa di USA e URSS", correct: true },
      { text: "Il ritorno dell'Europa al dominio mondiale assoluto", correct: false },
      { text: "La scomparsa di ogni tensione tra vincitori", correct: false },
      { text: "La fine definitiva di ogni organismo internazionale", correct: false }
    ],
    explanation: "Dopo il 1945 l'Europa uscì indebolita, mentre Stati Uniti e Unione Sovietica divennero le due superpotenze."
  }
];
