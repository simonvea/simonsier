---
title: Hvordan sette opp din egen Jamstack på AWS
date: 2020-01-30
---

<!-- Excerpt Start -->

Det finnes mange muligheter i dag for å distribuere en nettside. I denne artikkelen gir jeg en kjapp introduksjon i hvordan man enkelt kan sette opp en nettside på AWS ved hjelp av S3 og Cloudfront.

<!-- Excerpt End -->

I dag finnes det mange måter å distribuere en nettside. En populær måte er å bruke Netlify eller GitHub Pages, som gjør det veldig enkelt å laste opp og oppdatere en nettside. Man trenger bare å koble det til et git repository, for eksempel GitHub, og hvert git push vil føre til en automatisk distribusjon av det nye innholdet.

## Hva er Jamstack?

Den klassiske måten å distribuere en nettside på er via en server, hvor man har en backend som lager det brukeren skal se on demand. Wordpress er et typisk eksempel. I dag er mange nettsider dynamiske web applikasjoner hvor meste parten av gjengivelsen (rendering) gjøres klient side. Dette, sammen med oppvoksingen av sky-tjenester har gjort behovet for servere mindre og ført til fremveksten av serverless arkitekturer og tjenestetilbydre som [Netlify](https://www.netlify.com) hvor alt du trenger å gjøre for å distribuere nettsiden din er å skrive `git push`.

Netlify, og det som populært kalles the [Jamstack](https://jamstack.org/) (Javascript, API, Markup), gjør det veldig enkelt å distribuere nettsider i dag. Så hvorfor bruke en tilbyder som AWS for nettsiden din?

## Hvorfor AWS?

Hovedfordelen med AWS i dette tilfellet er at du enklet kan koble det til annen arkitektur du har eller ønsker å bygge.

En annen fordel er at du ved å bruke AWS får en bedre kontroll over struktur og tilganger. I de tilfeller hvor du er et team som skal bygge en nettside vil det å sette opp strukturen på AWS fort ende opp med å være billigere enn å bruke Netlify. (REF!)

Firebase er et alternativ..

### Sette opp en aws konto

### Lage en nettside

## S3

Hvorfor?

### Lage en S3 bucket

### Laste opp nettsiden

#### Manuelt

#### Via kommandolinjen

aws s3 sync . //

## CloudFront

Hvorfor?

Må sette opp 404 routing selv: route forbidden til 404.

HTTPS

## Lambda @Edge

Må til for å få nettsiden der du vil..

## CI/CD

Neste steg vil være å sette på en Contious Integration(CI) / Continous Deployment pipeline for å automatisere denne prosessen. AWS har verktøy for dette i sin CodePipeline tjeneste. Det blir tema i neste artikkel.

Oppsummert har du i denne artikkelen lært å sette opp en statisk nettside på AWS ved hjelp av S3 og CloudFront.
