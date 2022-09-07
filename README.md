Studentarbete - kurs i React 
![image](https://user-images.githubusercontent.com/30622818/188831701-52116a1f-679a-4039-a828-01c5d1074bb9.png)
![image](https://user-images.githubusercontent.com/30622818/188831742-61100741-0775-4f37-a565-00a126becbff.png)
![image](https://user-images.githubusercontent.com/30622818/188831784-fb915982-6abb-4b91-b4ab-39a4831c4bac.png)




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

