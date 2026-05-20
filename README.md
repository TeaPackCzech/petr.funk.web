# Petr Funk - prémiová stavební prezentace

Statický jednostránkový web pro lokálního řemeslníka Petra Funka z Poličky. Web prezentuje zednické práce, odvětrávané fasády, sádrokartony, rekonstrukce, zateplování fasád a stavební práce kolem domu.

## Popis webu

Cílem je ukázat klientovi hotový moderní návrh, který nepůsobí jako obyčejná vizitka, ale jako profesionální stavební prezentace. První obrazovka staví na velkém stavebním vizuálu, silné typografii, tmavém overlayi a jasných CTA tlačítkách pro telefon a poptávku.

Web je připravený jako demo pro GitHub Pages a obsahuje SEO metadata, Open Graph a Schema.org JSON-LD pro `LocalBusiness`, `Contractor` a `HomeAndConstructionBusiness`.

## Inspirační směr

Vizuální styl je inspirovaný moderními stavebními a architektonickými weby typu DPR Construction, Skanska, Turner Construction, Mortenson a BIG. Výsledkem není kopie, ale lokálně uvěřitelný web pro řemeslníka s výrazně profesionálnějším dojmem.

Použité principy:

- velký hero s fotkou, tmavým overlayem a technickými linkami
- architektonická typografie se širokými sekcemi
- asymetrický grid služeb s výraznou fotokartou
- tmavá sekce důvěry s animovanými čísly
- technický CSS diagram odvětrávané fasády
- timeline spolupráce s animovanou linkou
- konverzní kontaktní sekce s formulářem v demo režimu
- mobilní sticky CTA „Zavolat“

## Technologie

- HTML5
- CSS3
- JavaScript bez frameworků
- Google Fonts: `Space Grotesk` a `Inter`
- IntersectionObserver pro reveal animace
- requestAnimationFrame pro parallax a scroll efekty

Bez Reactu, bez Node.js, bez buildu a bez databáze.

## Fotky a vizuální zdroje

Hero využívá externí ilustrační stavební fotografii z Unsplash CDN:

- hero stavební fotografie: `https://images.unsplash.com/photo-1504307651254-35680f356dfd`

Ostatní vizuály jsou lokálně uložené AI generované ilustrační fotografie rodinných domů a řemeslných prací:

- `assets/images/rd-novabrik-fasada.jpg` - zateplení RD a fasádní obklad typu Novabrik
- `assets/images/rd-sadrokarton-strop.jpg` - montáž sádrokartonového stropu v interiéru
- `assets/images/rd-stavba-zdi.jpg` - zednická práce a stavba zdi u RD
- `assets/images/rd-remeslo-drevo.jpg` - řemeslná práce se dřevem v rekonstrukci

Před ostrým spuštěním je vhodné ilustrační fotografie nahradit reálnými fotkami prací, detailů fasád, rekonstrukcí nebo stavby klienta.

## Jak spustit lokálně

Stačí otevřít `index.html` v prohlížeči.

Volitelně lze spustit statický server:

```bash
python3 -m http.server 8080
```

Poté otevřít:

```text
http://localhost:8080
```

## GitHub Pages deploy

Web je připravený pro GitHub Pages z větve `main` a složky `/root`.

Aktuální demo:

```text
https://teapackczech.github.io/petr.funk.web/
```

## Kontakt klienta

**Petr Funk**

- IČO: 65186494
- Adresa: Paseky 127, 572 01 Polička - Horní Předměstí
- Telefon: +420 724 361 612
- E-mail: funk.petr@seznam.cz

## Demo poznámka

Jedná se o ukázkový prezentační návrh připravený pro obchodní prezentaci klientovi. Formulář je v demo režimu a je připravený pro pozdější napojení na backend, e-mailovou službu nebo externí formulářové řešení.

## Co doplnit před ostrým spuštěním

- reálné fotografie klientových prací
- finální souhlas s texty a rozsahem služeb
- případné napojení formuláře na e-mail nebo CRM
- analytiku a měření konverzí, pokud bude potřeba
