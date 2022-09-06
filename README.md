Inlämningsuppgift 1

Individuell inlämningsuppgift - React Bulletin Board

Beskrivning: Du ska bygga en "anslagstavla" med inlägg om React. Du ska skapa upp tre komponenter: BulletinBoard, ReactPost och PostLiked. Använda er utav det vi gått igenom på lektionerna (state, props, conditional rendering etc).

1.
BulletinBoard-komponenten ska fungera lite som ett FAQ, och ska ligga i App.js. Den ska fungera på följande vis:

    Här ska det finnas en array av objekt där varje objekt innehåller en fråga (se listan av frågor nedan) och ett svar. Se exempel nedan:

{

question:”Vad är tre fördelar med att använda React?”,

answer: “Lorem ipsum...”

}

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

Inlämningsuppgiften kan laddas upp på Studentportalen som en .zip-fil eller som en länk till ett Github-repo där ni laddat upp den. OBS! Radera node_modules i projektet om ni komprimerar den till en .zip. Namnge den sedan "Förnamn_Efternamn_Javascript3_Inlämningsuppgift1"