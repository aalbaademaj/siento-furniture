#	Siento Furniture

##	Om	sidan
Vad	handlar	sidan	om,	och	vem	är	den	till	för?	Två–tre	meningar.
- Siento Furniture är en modern webbplats för ett möbelföretag som säljer och presenterar möbler och inredning för hemmet. Sidan riktar sig till personer som vill hitta nya möbler, få inspiration och enkelt kunna utforska olika produkter och kategorier.


##	Skiss
Länk	eller	hänvisning	till	skissfilen	i	repot.
Skiljer	sig	den	färdiga	sidan	från	skissen?	Vad	ändrades	och	varför?
- Min skiss ligger in i, sketch/siento-furniture.png. 
Den färdiga webbplatsen följer skissen och har i stort sett samma utseende. Jag tog bort några knappar som jag först hade planerat att ha med, eftersom jag bedömde att de inte behövdes. På så sätt blev sidan enklare att använda utan att den övergripande designen förändrades.


##	Funktionalitet
Vad	kan	besökaren	göra	på	sidan?	Vilken	fil	och	vilka	funktioner	sköter	det?
- Besökaren kan:

1. Bläddra mellan tre bilder och texter i hero-slidern med pilar, indikatorer eller automatisk växling.

2. Filtrera produkterna efter kategori: All, Sofas, Tables och Chairs.

3. Visa fler produkter eller visa färre igen med knappen Show More / Show Less.

4. Markera produkter som favoriter genom att klicka på hjärtat.

5. Öppna en produktvy med produktens bild, namn, beskrivning och pris genom att klicka på View.

6. Lägga till produkter i kundvagnen och se antal produkter samt en lista med produkter och totalsumma.

7. Öppna och stänga navigeringsmenyn på mobilskärm.

Filer:

1. index.html innehåller sidans struktur, navigation, hero-sektion, produktkort, About Us, footer, produktvy och kundvagnens HTML.

2. style.css styr utseendet, färgerna, layouten, produktkorten och den responsiva anpassningen för mindre skärmar.

3. script.js hanterar interaktionen, bland annat hero-slider, kategorifiltrering, Show More/Show Less, favoriter, produktvyn, kundvagnen och mobilmenyn.


##	AI-användning
Minst	två	exempel.	För	varje:-	Vad	bad	jag	om?-	Vad	fick	jag?-	Vad	gjorde	jag	med	det?
-  
Exempel 1 – Kundvagnen

- Vad bad jag om? Hjälp med att skapa en kundvagn där besökaren kan lägga till produkter och se antalet produkter och totalsumman.

- Vad fick jag? Förklaringar och förslag på hur JavaScript kan läsa av produktens namn och pris, uppdatera räknaren och visa innehållet i kundvagnen.

- Vad gjorde jag med det? Jag använde förslagen som vägledning och arbetade in funktionen i min egen kod. Jag testade också utseendet och justerade CSS så att kundvagnen och knapparna fungerade bättre på olika skärmstorlekar.

Exempel 2 – Show More / Show Less

- Vad bad jag om? Hjälp med att visa ett begränsat antal produkter först och låta besökaren visa fler eller färre produkter.

- Vad fick jag? Förklaringar och kodförslag för att hålla reda på hur många produkter som ska visas och ändra knappens text.

- Vad gjorde jag med det? Jag anpassade lösningen till mina produktkort och kategorifiltreringen så att visningen uppdateras när besökaren väljer en kategori.

Exempel 3 – Hero-slider

- Vad bad jag om? Hjälp med att få bildspelet att byta bild med pilar och indikatorer samt automatiskt efter en viss tid.

- Vad fick jag? Förklaringar om hur JavaScript kan aktivera rätt slide och indikator och växla till nästa eller föregående bild.

- Vad gjorde jag med det? Jag använde det som stöd för att bygga sliderfunktionen och anpassade den till mina tre slides.


##	Tekniska	val	(VG)
Vilka	beslut	tog	jag,	och	varför?
- Jag valde HTML, CSS och JavaScript för att bygga en interaktiv och responsiv webbplats. Jag använde CSS Grid och Flexbox för layouten, CSS-variabler för att enkelt hantera färger och media queries för att anpassa sidan till olika skärmstorlekar. JavaScript används för funktioner som bildspelet, produktfiltreringen och kundvagnen. Jag valde dessa tekniker eftersom jag ville lära mig grunderna och kunna förstå och ändra koden själv. 


##	Bedömning	av	AI-innehåll	(VG)
Hur	avgjorde jag om	det	AI	gav	mig	var	bra	nog?
Vad	behöll	jag, vad ändrade jag, och varför?
- Jag testade AI-förslagen på min webbplats för att se om de fungerade som jag ville. Ibland innehöll förslagen onödigt mycket kod eller passade inte min befintliga struktur. Då förenklade och anpassade jag koden så att den blev mer användbar och lättare för mig att förstå. Mitt mål var att använda AI som ett stöd för att lära mig, inte bara kopiera färdig kod.