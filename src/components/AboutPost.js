const AboutPost = () => {
  return ( <>
  <article className="about">
   
    <div>
    <h2>Kommentarer:</h2>
    
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
    <img src="https://art.pixilart.com/22231991cc24155.gif"
    alt="Super Mario question"></img>
    
    </article></> );
}
 
export default AboutPost;