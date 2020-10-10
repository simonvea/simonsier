---
title: Hvordan skrive lettleste tester
date: 2020-10-10
description: En ofte oversett egenskap ved tester er hva som kommuniseres til andre. Her er noen tips til å gjøre det på en god måte.
---

En ofte oversett egenskap ved tester er hva som kommuniseres til andre. Her er noen tips til å gjøre det på en god måte.

## Testing

Testing handler ikke om å finne bugs.

Hovedfordelen med testing er det som skjer når man tenker på og skriver testene.

Å skrive tester tvinger oss til å tenke nøyere på hva det er vi egentlig prøver å løse. Vi må forstå hva brukeren av koden trenger.

Kort sagt: For å kunne teste noe så må man forstå det, og riktig forståelse minsker sjansen for feiloppfatninger og dermed feil i koden.

_Tester er også en måte å kommunisere med andre utviklere._ Det inkluderer deg selv når du kommer tilbake til koden om et par måneder. Tester _kommuniserer_ forståelse og ikke bare tester den.

Tester handler altså _ikke_ om å finne bugs. De _kommuniserer_ og tester _forståelse_.

Hvordan testen er skrevet, og ikke bare hva den tester, blir dermed en viktig del av en test.

Videre bør tester være enkle å lese.

Vi er stort sett opptatt med produksjonskode og vil helst ikke bruke ekstra tankeprosesser på å forstå testkode. Å lese testkode burde føles som å lese HTML - en enkel opplevelse.

To prinsipper er derfor ofte omtalt i relasjon til å skrive gode tester:

- Inkluder Given, When, Then i testnavn
- Strukturér testen etter de tre Aene: Arrange, Act, Assert

## Inkluder Given, When, Then i testnavn

En enkel måte å gjøre testene klarere på, er å inkludere Given, When, Then i testbeskrivelsen(e).
Ha med:

1. Hva blir testet (gitt)?
2. I hvilken sammenheng (når)?
3. Hva er forventet resultat (så)?

Dette gjør det mye enklere å skjønne hva testene er ment å teste. En i devops eller en QA person vil slippe å lese koden for å skjønne hva testen gjør. Det samme vil andre utviklere og du i fremtiden.

I tilegg blir det klarere for deg som skal skrive koden hva du skal teste og i hvilken sammenheng.

For eksempel:

```javascript
// Given
describe('Products Service', () => {
  describe('Add new product', () => {
    // When and then
    it('When no price is specified, then the product status is pending approval', () => {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

Sammenlign det med denne koden:

```javascript
describe('Products Service', () => {
  describe('Add new product', () => {
    it('Should return the right status', () => {
        // Hva tester dette igjen? Hvilken sammenheng og hva er riktig status?
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

Det siste eksempelet er kort, men påpeker et viktig poeng: Utelater man Given, When, Then fra testbeskrivelsen, må man lese koden nøyere for å finne ut hva som testes.

Et annet eksempel er når vi leser fra kommandolinjen eller i et annet test-rapporterings interface:

```shell-session
Add Product failed
```

Sammenlign det med følgende beskjed:

```shell-session
Products Service --> Add new product --> When no price is specified, then the product status is pending approval failed
```

Hvilken beskjed kommuniserer best hva som har gått galt?

## Implementer de tre Aene

Given, When, Then gjør det enklere å resonere og forstå en test.

Et annet virkemiddel går på de forskjellige stadiene i en test.

La oss starte med et eksempel:

```javascript
test('Should be classified as premium', () => {
  const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
  const DBStub = sinon
    .stub(dataAccess, 'getCustomer')
    .reply({ id: 1, classification: 'regular' });
  const receivedClassification = customerClassifier.classifyCustomer(
    customerToClassify
  );
  expect(receivedClassification).toMatch('premium');
});
```

Hva skjer i testen ovenfor? Hva må være på plass for at noe(hva?) skal være klassifisert som premium? Hvilken handling er det som testes?

De tre Aene, Arrange, Act og Assert, er med på å tydeliggjøre disse spørsmålene.

### Arrange, Act og Assert

En test har generelt (minst) tre stadier.

1. For å kunne teste noe må man først legge til rette for det som skal testes. Vi må _sette opp_ (Arrange) miljøet.
2. Deretter må vi _utføre_ (Act) det vi ønsker å teste.
3. Til slutt sjekker vi (Assert) at vi har fått det resultatet vi ønsker.

Disse tre stadiene bør være tydelige i koden.

Sammenlign koden ovenfor med følgende:

```javascript
describe('Customer classifier', () => {
  test('When customer spent more than 500$, should be classified as premium', () => {
    //Arrange
    const customerToClassify = { spent: 505, joined: new Date(), id: 1 };
    const DBStub = sinon
      .stub(dataAccess, 'getCustomer')
      .reply({ id: 1, classification: 'regular' });

    //Act
    const receivedClassification = customerClassifier.classifyCustomer(
      customerToClassify
    );

    //Assert
    expect(receivedClassification).toMatch('premium');
  });
});
```

Hva er enklest å lese og forstå?

## Oppsummering

> "Writing is thinking. To write well is to think clearly. That's why it's so hard." - David McCullough

Å skrive er å tenke. Å skrive på en mer eksplisitt måte gjør også tenkingen vår mer eksplisitt: tydelig for oss selv og andre.

Å skrive klart er ikke bare en viktig egenskap innen humaniora, men også (spesielt) innenfor software utvikling. Vi kommuniserer ikke bare med maskiner, vi kommuniserer og tenker sammen med andre mennesker.

Given, When, Then og Arrange, Act, Assert er derfor veldig nyttige verktøy når vi skriver tester før vi koder.

Disse verktøyene gjør det lettere for oss å ressonere over hva det er vi skal teste, hvordan, og til hvilket formål. Dette gir oss bedre kode.

---

Kodeeksempler er lånt fra [Node Best Practices](https://github.com/goldbergyoni/nodebestpractices#4-testing-and-overall-quality-practices).
