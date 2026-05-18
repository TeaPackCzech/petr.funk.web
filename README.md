# Petr Funk - prezentační web

Statický jednostránkový prezentační web pro lokálního řemeslníka a stavební firmu Petr Funk z Poličky. Web je připravený jako moderní demo návrh pro služby: zednické práce, stavební práce, rekonstrukce, fasády, odvětrávané fasády Novabrik a Stavoblock, sádrokartony a zateplování fasád.

## Použité technologie

- HTML5
- CSS3
- JavaScript bez frameworků
- Schema.org JSON-LD pro LocalBusiness / Contractor / HomeAndConstructionBusiness
- SEO a Open Graph meta tagy

## Jak spustit lokálně

Projekt nevyžaduje build ani Node.js. Stačí otevřít soubor `index.html` v prohlížeči.

Volitelně lze spustit jednoduchý lokální server:

```bash
python3 -m http.server 8080
```

Poté otevřete:

```text
http://localhost:8080
```

## GitHub Pages deploy

Web je připravený pro GitHub Pages z větve `main` a složky `/root`.

Postup:

1. Nahrajte soubory do repozitáře `TeaPackCzech/petr.funk.web`.
2. V GitHubu otevřete `Settings` -> `Pages`.
3. V části `Build and deployment` vyberte `Deploy from a branch`.
4. Zvolte větev `main` a složku `/root`.
5. Uložte nastavení.

Po zapnutí bude demo dostupné typicky na adrese:

```text
https://teapackczech.github.io/petr.funk.web/
```

## Kontakt klienta

**Petr Funk**  
IČO: 65186494  
Adresa: Paseky 127, 572 01 Polička – Horní Předměstí  
Telefon: +420 724 361 612  
E-mail: funk.petr@seznam.cz

## Poznámka

Tento web je ukázkový prezentační návrh připravený pro Petr Funk. Formulář je v demo režimu a je připravený pro pozdější napojení na backend nebo externí formulářovou službu.
