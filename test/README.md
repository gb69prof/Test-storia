# Test randomizzato - Seconda guerra mondiale

Pacchetto pronto per GitHub Pages.

## File principali

- `index.html`: pagina del test.
- `questions.js`: banca dati delle 20 domande.
- `manifest.webmanifest` e `sw.js`: supporto PWA/offline basilare.

## Funzioni

- 20 domande.
- 4 risposte per ogni domanda, una sola corretta.
- Ordine delle domande randomizzato a ogni ricaricamento.
- Ordine delle risposte randomizzato a ogni ricaricamento.
- Report finale con voto in decimi, percentuale, numero di risposte corrette.
- Mini lezioni di recupero sulle risposte sbagliate.
- Salvataggio del risultato con nome e data tramite `localStorage`.
- Esportazione dei risultati salvati in CSV.
- Download del report individuale in TXT.

## Nota sul salvataggio

Il salvataggio è locale al browser. Funziona bene su GitHub Pages senza database, ma i risultati restano sul dispositivo usato.
