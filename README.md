# Petr Funk - moderní stavební prezentace

Statický jednostránkový web pro lokálního řemeslníka Petra Funka z Poličky. Web prezentuje zednické práce, odvětrávané fasády, sádrokartony, rekonstrukce bytových jader, zateplování fasád a stavební práce kolem domu.

## Co bylo upraveno

- kompletně přepracovaný vizuální styl do moderní stavební prezentace
- nové hero s vlastní CSS stavební kompozicí bez cizích fotografií
- prémiový grid služeb s hover efekty a číslováním
- tmavá důvěryhodná sekce „Proč vybrat“
- výrazný pás čísel a důvěry
- moderní pětikroková timeline spolupráce
- výraznější kontaktní sekce s telefonním CTA
- rozšířený formulář o typ práce
- jemné scroll reveal animace, parallax pozadí a sticky header blur
- responzivní mobilní verze se spodním tlačítkem Zavolat

## Použitý styl

Směr vychází z moderních stavebních a architektonických prezentací: čisté bloky, velká typografie, technický rastr, stavební linky, betonově světlé plochy a teplý cihlově-měděný akcent.

Barevnost:

- pozadí: `#F7F6F2` / `#F5F3EE`
- tmavá: `#1F2328`
- sekundární tmavá: `#343A40`
- měděná: `#B86432` / `#C26B3A`
- betonová: `#D8D4CC`
- bílá: `#FFFFFF`

Typografie používá systémový stack s preferencí fontů `Inter` a `Manrope`, pokud jsou v zařízení dostupné.

## Použité technologie

- HTML5
- CSS3
- JavaScript bez frameworků
- Schema.org JSON-LD pro `LocalBusiness`, `Contractor` a `HomeAndConstructionBusiness`
- SEO a Open Graph meta tagy

Bez buildu, bez Node.js, bez frameworku.

## Jak spustit lokálně

Stačí otevřít `index.html` v prohlížeči.

Volitelně lze spustit statický server:

```bash
python3 -m http.server 8080
```

Poté otevřete:

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
IČO: 65186494  
Adresa: Paseky 127, 572 01 Polička – Horní Předměstí  
Telefon: +420 724 361 612  
E-mail: funk.petr@seznam.cz

## Demo poznámka

Jedná se o ukázkový prezentační návrh připravený pro klientskou prezentaci. Formulář je v demo režimu a je připravený pro pozdější napojení na backend nebo externí formulářovou službu.
