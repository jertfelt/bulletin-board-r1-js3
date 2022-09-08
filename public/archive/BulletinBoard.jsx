

export const BulletinBoard = [
   {
    id:5,
    question: " Vad är en komponent?",
    answer: "En komponent är en beståndsdel i React - kan vara en header, en nav, en funktion. Genom att använda sig av komponenter kan hemsidorna vara enklare att göra användarvänliga - då man delar upp i komponenter. ",
    postLiked: false
  },
  { id:4,
    question: " Vad ÄR React egentligen?",
    answer: "Facebook utvecklade ramverket React, och det vilar på Javascript men är optimerat för användare - dvs att en besökare till appen eller hemsidan ska ha en sån sömlös vistelse som möjligt. Hur då? Jo: man renderar ut nya HTML istället för att hämta HTML. Det blir därför mer dynamiskt.",
    postLiked: false
  },
  { id:3,
    question: " Vad är tre fördelar med att använda React?",
    answer : "1. Man kan återanvända kod - DNRvänligt alltså - genom att bygga komponenter som sedan kan appliceras på flera ställen. 2. Genom att man renderar ut DOM så blir det mer effektivt - och snabbare - vilket är bättre för användaren. 3. Rätt lätt att lära sig om man redan kan lite kod plus ett jättestort community så det är lätt att hitta hjälp och tips.",
    postLiked: false
  },
  { id: 2,
    question: " Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
    answer : "Single Page Application är alltså begreppet för när man renderar ut en DOM från en webbserver, istället för att koda HTML-dokument och skapa en statisk DOM (som 'vanliga' hemsidor haft). Då det renderas ut istället för att läsas in så går det fortare i prestandan, och man behöver inte göra tex en sidladdning, utan snarare hämtas allt på en gång. Det är mer kontrollerat, smidigare och snabbare.",
    postLiked: false
  },
  {
    id: 1,
    question: " Vad är tre skillnader mellan React och Angular?",
    answer : "Största skillnaden som jag kan se är syftet med sidorna. Angular är mer komplicerad, detta då den gör så mycket mer än React - man kan bygga en interaktiv app eller hemsida, där det kanske inte är så mycket olika variabler som får rum. Vad jag menar med det är att Angular är bra när jag bygger projekt som jag vet att de kanske inte kommer behöva lägga till mycket mer integrationer från tex tredjepart, eller fler plugins. Detta för att Angular är så pass komplext att det kanske inte är värt att hela tiden sitta och bygga om den. React är mer anpassad till att bygga User Interface-appar och hemsidor som helst med en massa varierande data, och kan därför ses som lite sandslottsaktig och flexibel, och React jobbar utifrån bibliotek. För att grovt förenkla skillnaden: Angular är en hel mobil och alla dess funktioner (telefon, kamera, mail osv) och React är bara en app på telefonen. I Angulars fall så är DOM:en inte virtuell, medans React renderar ut den.Man kan också titta på vad för språk som passar bra för Angular eller React: Angular exempelvis jobbar bra med Java och C#. React är mer HTML, CSS och vanlig javascript. Det är också så att React, för mig som nybörjare, sägs vara enklare att lära sig än Angular.",
    postLiked: false
  },
]

export default {BulletinBoard};
