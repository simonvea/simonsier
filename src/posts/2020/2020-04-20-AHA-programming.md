---
title: AHA Programmering
date: 2020-04-20
---

<!-- Excerpt Start -->

Nei, AHA programmering er ikke å lytte til AHA i felleskap mens man programmerer. AHA programmering kommer ut av innsikten at det er bedre å skrive noe to ganger enn å gjøre feil abstraksjon.

<!-- Excerpt End -->

Unngå forhastede abstraksjoner.

AHA programmering er et uttrykt skapt av [Kent C. Dodds](https://kentcdodds.com/) og står for Avoid Hasty Abstractions. AHA er ment som noe mellom D.R.Y og W.E.T. prinsippene.

Det vil si, et sted mellom å ikke gjenta seg selv (D.R.Y - Don't Repeat Yourself) og å skrive alt to ganger (W.E.T - Write Everythin Twice).

## DRY Programmering

D.R.Y står for Don't Repeat Yourself

Tanken bak DRY er at det skal gjøre koden lettere å navigere og lese. Problemet er at vi ofte gjør abstraksjoner prematurt.

## WET Programmering

## ~~MOIST~~ AHA Programmering

Innsikten kommer fra erfaringen av at vi som programmerere er veldig glad i å abstrahere felles egenskaper i flere metoder til en felles funksjon eller objekt, men at vi

Dette er spesielt relevant for oss som er oppfostret på begrepet D.R.Y - Don't Repeat Yourself.

Sandy Wetz har skrevet en [god artikkel](https://www.sandimetz.com/blog/2016/1/20/the-wrong-abstraction) om akuratt dette. Wetz viser til begrepet sunk cost, og hvordan vi mennesker ofte tillegger større verdi til noe som vi har brukt tid på enn vi kanskje burde.

## Eksempel

```js
const x = 2;
```
