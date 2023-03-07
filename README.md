# Movie List Uppgift

Designa en webbsida som effektivt hämtar och presenterar filmdata från en API endpoint. Webbsidan skall inkludera verktyg för att filtrera filmer enligt användarens önskemål. Det skall också gå att välja en viss film, en skild sida, som visar end bild och mera information om just den filmen.

## Uppgift

* Klona/ladda ner denna repository och fortsätt från koden i detta projekt.
* `public`-mappen skall innehålla all front-end kod. Denna mapp innehåller även bilderna för alla filmer.
* `src`-mappen innehåller back-end kod. **Obs! back-end koden är inte fullständig och du måste implementera det som fattas**.
* Försök att planera och designa webbsidan så användarvänlig och *snygg* som möjligt.

**Installation och startande av servern**

När du klonat repositoryn måste du först installera alla dependencies:

```
yarn install
```

Sedan kan du starta servern med:

```
yarn dev
```

### Del 1

1. Planera och rita upp en design för webbsidan med hjälp av verktyg som Figma.
2. Skapa en `index.html`-sida som hämtar information från `/api/movies` och renderar informationen som en tabell. Tabellen skall ha kolumnerna **Title**, **Year**, **Age rating**, **Genre** och **Rating**, exempel:

   | Title        | Year     | Age rating     | Genre            | Rating     |
   |--------------|----------|----------------|------------------|------------|
   | The Matrix   | 1999     | K-16           | Action, Sci-Fi   |       85 % |
   | Die Hard     | 1988     | K-18           | Action, Thriller |       73 % |
   | Forrest Gump | 1994     | K-12           | Comedy, Drama    |       95 % |

### Del 2

Implementera ett verktygsfält där man kan filtrera enligt:

* **Year**, i detta filtret ska man kunna ange minsta och största årtal som skall visas i tabellen.
* **Genre**, i detta filtret ska man kunna välja en genre ur en lista och därefter visas endast filmer som tillhör den genren.

   > **Tips:** Implementera API routen `/api/genres` som returnerar alla genrer från `./src/data/genres.json` för att veta vilka alla genrer som finns att välja på.

* **Age rating**, i detta filtret ska man kunna välja yngsta och äldsta åldersgräns och tabellen filtreras därefter och visar endast filmer som finns inom den åldersgräns man valt, t.ex. om man väljer `K-7` som yngsta och `K-16` som äldsta, skall alla filmer med följande åldersgräns visas: `K-7`, `K-12` och `K-16`.
   
   > **Tips:** Implementera API routen `/api/age-ratings` som returnerar alla åldersgränser från `./src/data/age-ratings.json`.

* **Rating**, i detta filtret ska man välja det lägsta och högsta rating och endast filmer som ligger inom det valda spannet visas.

Det skall gå att använda flera filter samtidigt, det skall t.ex. gå att filtrera enligt både ålder och genre.

### Del 3

Gör så att det går att klicka på raderna för filmerna i tabellen på sidan `index.html`. När man klickar på en rad skall webbsidan öppna routen `/movies/:id` där `:id` är id för den film man klickade på. Implementera routen `/movies/:id` som visar sidan `movies-id.html`. Denna sida skall hämta information och visa följande information om en vald film:

* Bild
* Titel
* Beskrivning
* Filmens längd i minuter (objekten inuti movies arrayn innehåller `length`, denna property är längden på filmen i sekunder)
* Rating (från 0 % till 100 %)
* Åldersgräns
* Utgivningsdatum
* Genres

Denna sida skall du också planera och designa i t.ex. Figma.

**Exempel**

`/movie/1` visar en sida med information om filmen med id `1`

`/movie/2` visar en sida med information om filmen med id `2`

`/movie/16` visar en sida med information om filmen med id `16`

## Bedömning

| Vitsord     | Krav                                              |
|-------------|---------------------------------------------------|
| Nöjaktiga&nbsp;1 | Du skall klara av **Del 1** med lite handledning. |
| Goda&nbsp;3      | Du skall klara av **Del 1** och ett av filtreringsalternativen i **Del 2**. |
| Berömliga&nbsp;5 | Du skall på ett professionellt sätt planera och utföra **Del 1**, **Del 2** och **Del 3**. Du skall även planera och ge förslag på hur man skulle kunna vidareutveckla detta projekt. | 
