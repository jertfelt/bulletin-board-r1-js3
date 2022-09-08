Studentarbete - kurs i React 
![image](https://user-images.githubusercontent.com/30622818/188831701-52116a1f-679a-4039-a828-01c5d1074bb9.png)
![image](https://user-images.githubusercontent.com/30622818/188831742-61100741-0775-4f37-a565-00a126becbff.png)
![image](https://user-images.githubusercontent.com/30622818/188831784-fb915982-6abb-4b91-b4ab-39a4831c4bac.png)
![image](https://user-images.githubusercontent.com/30622818/189083134-b9aadee4-feea-4ac8-89a7-14c50d0f2ab4.png)


<h3>Några kommentarer:</h3>
      <p>Att få till själva grunden var lätt som en plätt, det som sedan tog mig en vecka var att *försöka* förstå hur jag kan få Gilla-knappen att bara fungera på en specifik mappad div. Samma dag som allting skulle in så konsulterade jag delvis en klasskamrat och delvis en Todo-list tutorial och insåg att om jag lade in 'liked' i datan som renderades, så kunde jag på så vis filtrera de utmappade arrayerna. FAST: Detta är bara i DOM:en som jag ser det i dagsläget, jag påverkar ju faktiskt inte den fysiska datan då jag inte gör vare sig POST/GET-requests. 
      </p>
      <h3>Svårt:</h3>
      <ul>
        <li>
          Filter() och map() istället för forEach, samt också *exakt* vad dessa gör och vad de behöver.
          Jag menar, vad fan är detta: 
          "  return item.Qid === Numberid ?  ...item, liked: !item.liked :  ...item;" DET ÄR RAPPAKALJA!
          </li>
        <li>Hur jag jobbar med mappade array-items och ser till att en specifik knapp togglar en specifik div (dvs - att gilla knappen fungerar på rätt ställen)</li>
        <li>Lite klur med props, men så fort man förstår det så är det kul. Det som kan vara klurigt är NÄR och VART man ska importera props, till/från vilken komponent.</li>
        </ul>
      <h3>Lättare:</h3>
      <ul>
        <li>useEffect - däremot tror jag 100% att jag kan använda den mer och bättre i framtiden.</li>
        <li>Funktioner</li>
      </ul>
      <h3>Saker jag provade:</h3>
      <ul>
        <li>Router och länkar (hur länkar man UT ur en hemsida?! Trodde jag hade förstått det men det fungerar ej i dagsläget) </li>
        <li> Att få in en footer i ett router-system. Ska kolla lektionsanteckningar för både denna och ovan punkt.</li>
        <li>useEffect och en loading-skärm. Bra övning för mig själv.</li>
        <li>useFetch-komponent och axios, men fick det inte att fungera, GET-requesten ville inte. Pga tidsbrist fick det lov att vara, spenderade 2 dagar på att försöka skriva om koden.</li>
        <li>Leka med komponenter</li>
        <li>JSON</li>
        <li>Jag använde mig först av en array i BulletinBoard som jag exporterade som en array (se BulletinBoard.jsx i archive), det var en bra övning i att importera props</li>
      </ul>
      <h3>
        Något jag gjort mest:
      </h3>
      <p>Skrivit om koden tusen, tusen, och åter tusen gånger.</p>
    </div>


Här kommer anvisningar:

Individuell inlämningsuppgift - React Bulletin Board

Beskrivning: Du ska bygga en "anslagstavla" med inlägg om React. Du ska skapa upp tre komponenter: BulletinBoard, ReactPost och PostLiked. Använda er utav det vi gått igenom på lektionerna (state, props, conditional rendering etc).

1.
BulletinBoard-komponenten ska fungera lite som ett FAQ, och ska ligga i App.js. Den ska fungera på följande vis:

    Här ska det finnas en array av objekt där varje objekt innehåller en fråga (se listan av frågor nedan) och ett svar. Se exempel nedan:
    

question:”Vad är tre fördelar med att använda React?”,

answer: “Lorem ipsum...”





    För varje objekt, rendera en ReactPost-komponent.

ReactPost-komponenten ska se ut på följande vis:

    Komponenten ska skriva ut en fråga samt svaret på frågan.

    Komponenten ska ha en knapp för att kunna gilla inlägget.

    OM användaren har gett inlägget en like, rendera PostLiked-komponenten och dölj like-knappen. 

PostLiked ska vara en text som lyder “You have liked this post!”

Frågorna som ska besvaras på anslagstavlan är följande:

    Vad är tre fördelar med att använda React?

    Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?

    Nämn tre skillnader mellan React och Angular.

Kriterier för godkänt:

    Du ska ha uppfyllt ovanstående krav och svarat på samtliga frågor (minst 3-4 meningar per fråga).

    Du ska använda dig utav minst 1 conditional operator - ternary eller short-circuit (dvs &&) för att rendera en komponent.

