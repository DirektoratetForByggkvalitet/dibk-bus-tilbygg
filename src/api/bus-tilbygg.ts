import { WizardDefinition } from 'losen';

const data: WizardDefinition = {
  meta: {
    title: 'Bygg uten å søke - tilbygg',
    name: 'tilbygg',
    footer: 'fooooter',
  },
  computed: {
    grenser: {
      type: 'or',
      clauses: [
        {
          field: 'firemeterTilbygg',
          operator: 'eq',
          value: 'ja',
        },
        {
          field: 'enmeterTerrasse',
          operator: 'eq',
          value: 'ja',
        },
        {
          field: 'byggegrenseOk',
          operator: 'eq',
          value: 'ja',
        },
        {
          field: 'byggegrenseOk',
          operator: 'eq',
          value: 'tilatelse',
        },
      ],
    },
    visAreal: {
      type: 'or',
      clauses: [
        {
          field: 'hoyestePunkt',
          operator: 'eq',
          value: 'under',
        },
        {
          field: 'hoyestePunkt',
          operator: 'eq',
          value: 'overOk',
        },
        {
          field: 'areal',
          operator: 'eq',
          value: 'ja',
        },
      ],
    },
  },
  schema: [
    {
      id: 'kartlegging',
      type: 'Page',
      heading: 'Det du skal bygge',
      children: [
        {
          id: 'hvaSkalDuBygge',
          property: 'hvaSkalDuBygge',
          type: 'Radio',
          heading: 'Hva skal du bygge?',
          options: [
            {
              id: 'hvaSkalDuBygge.tilbygg',
              type: 'Answer',
              heading: 'Tilbygg til bolig, bod eller garasje',
              value: 'tilbygg',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/Forside_tilbygg.jpg',
                alt: 'Hus med tilbygg',
              },
            },
            {
              id: 'hvaSkalDuBygge.terrasseEllerPlatting',
              type: 'Answer',
              heading: 'Terrasse eller platting inntil bolig',
              value: 'terrasse',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/Forside_terrasse.jpg',
                alt: 'Hus med terrasse',
              },
            },
            {
              id: 'hvaSkalDuBygge.verandaEllerGlassveranda',
              type: 'Answer',
              heading:
                'Veranda, vinterhage eller overbygd inngangsparti til bolig',
              value: 'veranda',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/Forside_veranda.jpg',
                alt: 'Hus med veranda',
              },
            },
            {
              id: 'hvaSkalDuBygge.pergola',
              type: 'Answer',
              heading: 'Pergola inntil bolig',
              value: 'pergola',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/Forside_pergola.png',
                alt: 'Pergola inntil hus',
              },
            },
            {
              id: 'hvaSkalDuBygge.anneks',
              type: 'Answer',
              heading: 'Tilbygg til et anneks',
              value: 'anneks',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/forside_anneks.jpg',
                alt: 'Anneks',
              },
            },
            {
              id: 'hvaSkalDuBygge.takterrasse',
              type: 'Answer',
              heading: 'Takterrasse til bolig',
              value: 'takterrasse',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/Forside_takterrasse.jpg',
                alt: 'Hus med takterrasse',
              },
            },
            {
              id: 'hvaSkalDuBygge.annet',
              type: 'Answer',
              heading:
                'Gjøre endringer på næringseiendom, endre eksisterende byggverk eller annet',
              value: 'annet',
              image: {
                url: 'https://dibk.no/globalassets/2.-verktoy-og-veivisere/bygg-uten-a-soke-tilbygg/forside_annet.jpg',
                alt: 'Annet',
              },
            },
          ],
        },
        {
          type: 'Branch',
          id: 'hvaSkalDuByggeBranch',
          branches: [
            {
              test: {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'pergola',
              },
              children: [
                {
                  id: 'hvaSkalDuBygge.pergola.result',
                  type: 'Result',
                  heading: 'Pergola til bolig',
                  lead: '<p><strong>Hva er en pergola?</strong></br>Begrepet pergola har ikke en klar definisjon. Tradisjonelt var pergola et byggverk med åpne tak og vegger, som skulle bli overgrodd av slyngplanter. Nå brukes pergola også om konstruksjoner med tak og vegger.</p><p><strong>Skal pergolaen ha tak og vegger, for eksempel skyvbare lameller eller i glass?</strong></br> En pergola med tak og vegger som er inntil 15 kvm, kan være unntatt søknadsplikt. <a href="https://dibk.no/tilbygg/">For å finne ut om du må søke, start veiviseren på nytt og velg stien « Veranda, vinterhage eller overbygd inngangsparti til bolig».</a></p><p><strong>Usikker på om du må søke?</strong></br>Spør alltid kommunen din om du er i tvil om du må søke. Dette gjelder for eksempel om du vil sette opp en terrassemarkise, pergolamarkise eller andre løsninger med understøtting.</p><p><strong>Når får en pergola areal?</strong></br>Dersom det legges tak eller skvvbare lameller over pergolaen, skal arealet regnes med i bebygd areal (BYA). Derfor må du gjøre deg kjent med hvor mye som er tillatt å bygge på eiendommen. En klassisk pergola med bjelker, men uten tak, regnes ikke med i bebygd areal (BYA). Det kan også gjelde begrensninger i kommunens planbestemmelser om utforming og plassering.</p>',
                },
              ],
            },
          ],
        },
        {
          id: 'hvaSkalDuByggeBranch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'takterrasse',
              },
              children: [
                {
                  id: 'hvaSkalDuByggeBranch.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'hvaSkalDuByggeBranch.text',
                      type: 'Text',
                      text: 'Det er søknadspliktig å bygge takterrasse, og du må bruke fagpersoner i hele byggeprosessen.',
                    },
                  ],
                },
                {
                  type: 'Result',
                  id: 'resultatAnsvarligSoker',
                  heading: {
                    complete: 'Du må søke og bruke fagpersoner',
                    completeWithError: 'Du har ikke svart på alle spørsmålene',
                    incomplete: 'Du har ikke svart på alle spørsmålene',
                    incompleteWithError:
                      'Du har ikke svart på alle spørsmålene',
                  },
                  lead: {
                    complete:
                      '<p>Det er søknadspliktig å bygge det du ønsker, og du må bruke fagpersoner i hele byggeprosessen.</p><p>I små byggeprosjekter kan du ofte bruke en byggmester til å gjøre alt. Han/hun blir da ansvarlig for å:</p><ol><li>å sende inn byggesøknaden for deg (ansvarlig søker), </li><li>å planlegge prosjektet ditt (ansvarlig prosjekterende) og</li><li>å bygge (ansvarlig utførende).</li></ol><p>Vi anbefaler å bruke foretak med sentral godkjenning. En liste over disse finner du <a href="https://sgregister.dibk.no/">her</a>.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                    completeWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incompleteWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incomplete:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'hvaSkalDuByggeBranch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'anneks',
              },
              children: [
                {
                  id: 'hvaSkalDuByggeBranch.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'hvaSkalDuByggeBranch.text',
                      type: 'Text',
                      text: 'Denne veiviseren dekker dessverre ikke deg.',
                    },
                  ],
                },
                {
                  type: 'Result',
                  id: 'resultatAnneks',
                  heading: {
                    complete: 'Denne veiviseren dekker ikke deg',
                    incomplete: 'Du har ikke svart på alle spørsmålene',
                    incompleteWithError:
                      'Du har ikke svart på alle spørsmålene',
                    completeWithError: 'Du har ikke svart på alle spørsmålene',
                  },
                  lead: {
                    complete:
                      '<p>Denne veiviseren dekker dessverre ikke deg.</p>',
                    incomplete:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incompleteWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    completeWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'hvaSkalDuByggeBranch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'annet',
              },
              children: [
                {
                  id: 'hvaSkalDuByggeBranch.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'hvaSkalDuByggeBranch.text',
                      type: 'Text',
                      text: 'Denne veiviseren dekker dessverre ikke deg. Sjekk i stedet vår nettside <a href="https://dibk.no/bygge-eller-endre/arbeid-pa-eksisterende-bygg/">«Arbeid på eksisterende bygg»</a>',
                    },
                  ],
                },
                {
                  type: 'Result',
                  id: 'resultatAnnet',
                  heading: {
                    complete: 'Denne veiviseren dekker ikke deg',
                    incomplete: 'Du har ikke svart på alle spørsmålene',
                    incompleteWithError:
                      'Du har ikke svart på alle spørsmålene',
                    completeWithError: 'Du har ikke svart på alle spørsmålene',
                  },
                  lead: {
                    complete:
                      '<p>Denne veiviseren dekker dessverre ikke deg.</p>',
                    incomplete:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incompleteWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    completeWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'bebygdGroup',
          type: 'Group',
          show: {
            field: 'hvaSkalDuBygge',
            operator: 'is',
          },
          children: [
            {
              id: 'bebygd',
              property: 'bebygd',
              type: 'Radio',
              heading: 'Er eiendommen bebygd?',
              text: '<p>Eiendommen din er bebygd hvis det for eksempel er et bolighus eller en hytte på eiendommen fra før. Står det kun et skur eller garasje regnes ikke eiendommen som bebygd.</p>',
              options: [
                {
                  id: 'bebygd.ja',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'ja',
                },
                {
                  id: 'bebygd.nei',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'nei',
                },
              ],
            },
            {
              type: 'Branch',
              id: 'bebygdBranch',
              branches: [
                {
                  test: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'bebygd',
                        operator: 'eq',
                        value: 'nei',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'error.bebygd.nei',
                      type: 'Error',
                      show: {
                        field: 'bebygd',
                        operator: 'eq',
                        value: 'nei',
                      },
                      children: [
                        {
                          id: 'error.bebygd.nei',
                          type: 'Text',
                          text: 'Du må som regel søke hvis det ikke er et bolighus eller hytte på tomta fra før. Gjelder det en næringseiendom må du snakke med kommunen.',
                        },
                      ],
                    },
                    {
                      id: 'resultatTakk',
                      type: 'Result',
                      heading: {
                        complete:
                          'Veiviseren dekker dessverre ikke ditt tilfelle',
                        incomplete: 'Du har ikke svart på alle spørsmålene',
                        incompleteWithError:
                          'Du har ikke svart på alle spørsmålene',
                        completeWithError:
                          'Du har ikke svart på alle spørsmålene',
                      },
                      lead: {
                        complete:
                          '<p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                        incomplete:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        incompleteWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        completeWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Page',
      heading: 'Plassering og størrelse',
      id: 'omBygget',
      children: [
        {
          type: 'Branch',
          id: 'omByggetBranch',
          branches: [
            {
              test: {
                field: 'bebygd',
                operator: 'is',
                value: 'ja',
              },
              children: [
                {
                  type: 'Group',
                  id: 'terrasseRekkverkGroup',
                  show: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'hvaSkalDuBygge',
                        operator: 'eq',
                        value: 'terrasse',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'terrasseOverBakken',
                      property: 'terrasseOverBakken',
                      type: 'Radio',
                      heading:
                        'Hva blir høyeste punkt på terrassegulvet målt fra bakken?',
                      show: {
                        field: 'hvaSkalDuBygge',
                        operator: 'eq',
                        value: 'terrasse',
                      },
                      options: [
                        {
                          id: 'terrasseOverBakken.under',
                          type: 'Answer',
                          heading:
                            'Gulvet blir ikke på noe som helst punkt høyere enn 0,5 meter over bakken',
                          value: 'under',
                        },
                        {
                          id: 'terrasseOverBakken.middels',
                          type: 'Answer',
                          heading:
                            'Gulvet blir ikke på noe som helst punkt høyere enn 1,0 meter over bakken',
                          value: 'middels',
                        },
                        {
                          id: 'terrasseOverBakken.over',
                          type: 'Answer',
                          heading:
                            'Gulvet blir høyere enn 1,0 meter over bakken på minst ett punkt',
                          value: 'over',
                        },
                      ],
                    },
                    {
                      id: 'terrasseOverBakkenResultat',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseOverBakken',
                            operator: 'eq',
                            value: 'over',
                          },
                          children: [
                            {
                              id: 'terrasseOverBakkenResultat',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseOverBakkenResultat.over.tekst',
                                  type: 'Text',
                                  warning: true,
                                  text: 'Det kan hende det du vil gjøre er unntatt søknadsplikt, dersom hele terrassen blir under 15 kvadratmeter. For å få svar må du ta veiviseren på nytt og velge svaralternativet «Veranda, vinterhage eller overbygget inngangsparti til bolig».',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseRekkverk',
                      property: 'terrasseRekkverk',
                      type: 'Radio',
                      heading:
                        'Blir rekkverket høyere enn 1,2 meter over terrassegulvet?',
                      text: '<p></p>',
                      show: {
                        field: 'terrasseOverBakken',
                        operator: 'eq',
                        value: 'middels',
                      },
                      options: [
                        {
                          id: 'terrasseRekkverk.ja',
                          type: 'Answer',
                          heading: 'Ja',
                          value: 'ja',
                        },
                        {
                          id: 'terrasseRekkverk.nei',
                          type: 'Answer',
                          heading: 'Nei',
                          value: 'nei',
                        },
                      ],
                    },
                    {
                      id: 'terrasseRekkverkResultat',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseRekkverk',
                            operator: 'eq',
                            value: 'ja',
                          },
                          children: [
                            {
                              id: 'terrasseRekkverkResultat',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseRekkverkResultat.over05m.tekst',
                                  type: 'Text',
                                  warning: true,
                                  text: 'En slik terrasse er i utgangspunktet søknadspliktig. Blir hele terrassen under 15 kvadratmeter? Da kan det hende det du vil gjøre likevel er unntatt søknadsplikt. For å få svar må du ta veiviseren på nytt og velge svaralternativet «Veranda, vinterhage eller overbygget inngangsparti til bolig»',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'plattingRekkverk',
                      property: 'plattingRekkverk',
                      type: 'Radio',
                      heading:
                        'Blir noe av plattingen eller terrassen høyere enn 0,5 meter over bakken?',
                      text: '<p>Dette kan for eksempel være rekkverk, levegger, glassvegger eller annet som er fastmontert i terrassen.</p>',
                      show: {
                        field: 'terrasseOverBakken',
                        operator: 'eq',
                        value: 'under',
                      },
                      options: [
                        {
                          id: 'plattingRekkverk.ja',
                          type: 'Answer',
                          heading:
                            'Ja, hele eller deler av terrassen blir høyere enn 0,5 meter over bakken',
                          value: 'ja',
                        },
                        {
                          id: 'plattingRekkverk.nei',
                          type: 'Answer',
                          heading:
                            'Nei, hele terrassen er lavere enn 0,5 meter over bakken',
                          value: 'nei',
                        },
                      ],
                    },
                    {
                      id: 'plattingRekkverkResultat',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'plattingRekkverk',
                            operator: 'eq',
                            value: 'ja',
                          },
                          children: [
                            {
                              id: 'plattingRekkverkResultat',
                              type: 'Error',
                              children: [
                                {
                                  id: 'plattingRekkverkResultat.over05m.tekst',
                                  type: 'Text',
                                  warning: true,
                                  text: 'Veiviseren dekker foreløpig ikke ditt tilfelle. Du kan prøve å velge svaralternativet om at terrassen ikke er høyere enn 1,0 meter og se om det svaret dekker deg.',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrassePlassering',
                      property: 'terrassePlassering',
                      type: 'Radio',
                      heading: 'Hvor skal terrassen eller plattingen ligge?',
                      show: {
                        field: 'terrasseRekkverk',
                        operator: 'eq',
                        value: 'nei',
                      },
                      options: [
                        {
                          id: 'terrassePlassering.inntilHus',
                          type: 'Answer',
                          heading: 'Inntil en helårsbolig eller fritdsbolig',
                          value: 'inntilHus',
                        },
                        {
                          id: 'terrassePlassering.inntilBod',
                          type: 'Answer',
                          heading: 'Inntil en garasje, bod eller drivhus',
                          value: 'annet2',
                        },
                        {
                          id: 'terrassePlassering.frittliggende',
                          type: 'Answer',
                          heading: 'Terrassen blir frittliggende',
                          value: 'frittliggende',
                        },
                        {
                          id: 'terrassePlassering.annet',
                          type: 'Answer',
                          heading: 'Ingen av alternativene passer',
                          value: 'annet',
                        },
                      ],
                    },
                    {
                      id: 'terrasseplasseringAnnetResult',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrassePlassering',
                            operator: 'eq',
                            value: 'annet2',
                          },
                          children: [
                            {
                              id: 'terrasseplasseringAnnetResult.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseplasseringAnnetResult.text',
                                  type: 'Text',
                                  text: 'Veiviseren dekker dessverre ikke ditt tilfelle. Takk for at du prøvde veiviseren!',
                                },
                              ],
                            },
                            {
                              type: 'Reference',
                              nodeId: 'resultatTakk',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseplasseringAnnetResult',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrassePlassering',
                            operator: 'eq',
                            value: 'annet',
                          },
                          children: [
                            {
                              id: 'terrasseplasseringAnnetResult.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseplasseringAnnetResult.text',
                                  type: 'Text',
                                  text: 'Veiviseren dekker dessverre ikke ditt tilfelle. Takk for at du prøvde veiviseren!',
                                },
                              ],
                            },
                            {
                              type: 'Reference',
                              nodeId: 'resultatTakk',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseplasseringFrittliggendeResult',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrassePlassering',
                            operator: 'eq',
                            value: 'frittliggende',
                          },
                          children: [
                            {
                              id: 'terrasseplasseringFrittliggendeResult.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseplasseringFrittliggendeResult.text',
                                  type: 'Text',
                                  text: 'Du må høre med kommunen om det du vil bygge er søknadspliktig. Takk for at du prøvde veiviseren!',
                                },
                              ],
                            },
                            {
                              type: 'Reference',
                              nodeId: 'resultatTakk',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseOverbygd',
                      property: 'terrasseOverbygd',
                      type: 'Radio',
                      heading: 'Skal terrassen ha tak eller være overbygget?',
                      show: {
                        type: 'or',
                        clauses: [
                          {
                            field: 'terrassePlassering',
                            operator: 'eq',
                            value: 'inntilHus',
                          },
                          {
                            field: 'terrassePlassering',
                            operator: 'eq',
                            value: 'inntilBod',
                          },
                        ],
                      },
                      options: [
                        {
                          id: 'terrasseOverbygd.ja',
                          type: 'Answer',
                          heading: 'Ja, den skal ha tak eller være overbygd',
                          value: 'ja',
                        },
                        {
                          id: 'terrasseOverbygd.nei',
                          type: 'Answer',
                          heading:
                            'Nei, den skal ikke ha tak eller være overbygd',
                          value: 'nei',
                        },
                      ],
                    },
                    {
                      id: 'terrasseOverbygdResult',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseOverbygd',
                            operator: 'eq',
                            value: 'ja',
                          },
                          children: [
                            {
                              id: 'terrasseOverbygdResult.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseOverbygdResult.text',
                                  type: 'Text',
                                  text: 'Blir hele terrassen og overbygget under 15 kvadratmeter? Da kan det hende det du vil gjøre er unntatt søknadsplikt. For å få svar må du ta veiviseren på nytt og velge svaralternativet «Veranda, vinterhage eller overbygget inngangsparti til bolig».',
                                },
                              ],
                            },
                            {
                              type: 'Reference',
                              nodeId: 'resultatTakk',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseStorrelse',
                      property: 'terrasseStorrelse',
                      type: 'Radio',
                      heading:
                        'Hvor mye kommer terrassen til å stikke ut fra dagens fasadeliv, altså ytterveggen på bygningen din?',
                      show: {
                        field: 'terrasseOverbygd',
                        operator: 'eq',
                        value: 'nei',
                      },
                      options: [
                        {
                          id: 'terrasseStorrelse.mindreenn',
                          type: 'Answer',
                          heading:
                            'Terrassen vil stikke mindre enn 4,0 meter ut fra fasadelivet til bygningen',
                          value: 'mindreenn',
                        },
                        {
                          id: 'terrasseStorrelse.storreenn',
                          type: 'Answer',
                          heading:
                            'Terrassen vil stikke mer enn 4,0 meter ut fra fasadelivet til bygningen',
                          value: 'storreenn',
                        },
                      ],
                    },
                    {
                      id: 'terrasseTilbygg',
                      property: 'terrasseTilbygg',
                      type: 'Radio',
                      heading: 'Hvor stor blir hele terrassen',
                      show: {
                        field: 'terrasseStorrelse',
                        operator: 'eq',
                        value: 'storreenn',
                      },
                      options: [
                        {
                          id: 'terrasseTilbygg.mindreenn',
                          type: 'Answer',
                          heading: 'Mindre enn 15 kvadratmeter BYA/BRA',
                          value: 'mindreenn',
                        },
                        {
                          id: 'terrasseTilbygg.storreenn',
                          type: 'Answer',
                          heading: 'Større enn 15 kvadratmeter BYA/BRA',
                          value: 'storreenn',
                        },
                      ],
                    },
                    {
                      id: 'terrasseTilbygg.mindreenn.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseTilbygg',
                            operator: 'eq',
                            value: 'mindreenn',
                          },
                          children: [
                            {
                              id: 'error.terrasseTilbygg.mindreenn',
                              type: 'Error',
                              children: [
                                {
                                  id: 'error.terrasseTilbygg.mindreenn',
                                  type: 'Text',
                                  text: 'Det kan hende det du vil gjøre er unntatt søknadsplikt, dersom hele terrassen blir under 15 kvadratmeter. For å få svar må du ta veiviseren på nytt og velge svaralternativet «Veranda, vinterhage eller overbygget inngangsparti til bolig»',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseTilbygg.storreenn.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseTilbygg',
                            operator: 'eq',
                            value: 'storreenn',
                          },
                          children: [
                            {
                              id: 'error.terrasseTilbygg.storreenn',
                              type: 'Error',
                              children: [
                                {
                                  id: 'error.terrasseTilbygg.storreenn',
                                  type: 'Text',
                                  text: 'Det er søknadspliktig å bygge en slik terrasse som du ønsker. Takk for at du prøvde veiviseren!',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'frittliggendeINTAKTIV',
                      property: 'frittliggendeINAKTIV',
                      type: 'Radio',
                      heading: 'Hvor stort blir det du skal bygge?',
                      text: '<p>Vi er ute etter samlet bruksareal (BRA) og bebygd areal (BYA). Oppgi det som har størst areal av BRA og BYA.</p>',
                      summary: 'Hva er BRA/BYA?',
                      details:
                        '<p>Alle regulerte eiendommer har regler på hvor mye du kan bygge på eiendommen. Det finnes flere måter å beregne hvor mye du kan bygge, men det er kun én type som gjelder for din eiendom. Noen ganger er det hvor stort "fotavtrykk" bygninger har på eiendommen (BYA), andre ganger skal man regne sammen bruksareal i alle etasjer (BRA). Du finner beregningsmåten i kommuneplanen eller i reguleringsbestemmelsene. <a href="https://dibk.no/verktoy-og-veivisere/andre-fagomrader/sporsmal-og-svar-om-grad-av-utnytting/?_t_id=L6a5TUcEWyjt15qe1H2HIQ%3d%3d&_t_q=bruksareal&_t_tags=language%3ano%2csiteid%3aa8fed669-6208-4354-8fe6-9c93cb91a133&_t_ip=195.159.248.98%3a54423&_t_hit.id">Les mer om BRA/BYA på DiBKs nettsider.</a></p>',
                      show: {
                        field: 'terrassePlassering',
                        operator: 'eq',
                        value: 'frittliggendeINAKTIV',
                      },
                      options: [
                        {
                          id: 'frittliggende.under',
                          type: 'Answer',
                          heading: 'Inntil 50 kvadratmeter',
                          value: 'under',
                        },
                        {
                          id: 'frittliggende.mellom',
                          type: 'Answer',
                          heading: 'Mellom 50 - 70 kvadratmeter',
                          value: 'mellom',
                        },
                        {
                          id: 'frittliggende.over',
                          type: 'Answer',
                          heading: 'Over 70 kvadratmeter',
                          value: 'over',
                        },
                      ],
                    },
                    {
                      id: 'frittliggende.under.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'frittliggende',
                            operator: 'eq',
                            value: 'under',
                          },
                          children: [
                            {
                              id: 'frittliggende.under.text',
                              type: 'Text',
                              warning: true,
                              text: 'Du må høre med kommunen om det du vil gjøre er søknadspliktig. Takk for at du prøvde veiviseren!',
                            },
                            {
                              id: 'resultatFrittliggende',
                              type: 'Result',
                              heading: {
                                complete:
                                  'Veiviseren dekker dessverre ikke ditt tilfelle',
                                incomplete:
                                  'Du har ikke svart på alle spørsmålene',
                                incompleteWithError:
                                  'Du har ikke svart på alle spørsmålene',
                                completeWithError:
                                  'Du har ikke svart på alle spørsmålene',
                              },
                              lead: {
                                complete:
                                  '<p>Du må høre med kommunen om det du vil gjøre er søknadspliktig.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                                incomplete:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                                incompleteWithError:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                                completeWithError:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'frittliggende.mellom.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'frittliggende',
                            operator: 'eq',
                            value: 'mellom',
                          },
                          children: [
                            {
                              id: 'frittliggende.mellom.text',
                              type: 'Error',
                              children: [
                                {
                                  id: 'frittliggende.mellom.text',
                                  type: 'Text',
                                  warning: true,
                                  text: 'Du må høre med kommunen din om dette er søknadspliktig, og om du kan søke og bygge på egenhånd.',
                                },
                              ],
                            },
                            {
                              id: 'resultatSokeSelv',
                              type: 'Result',
                              heading: {
                                complete: 'Du må søke',
                                incomplete:
                                  'Du har ikke svart på alle spørsmålene',
                                incompleteWithError:
                                  'Du har ikke svart på alle spørsmålene',
                                completeWithError:
                                  'Du har ikke svart på alle spørsmålene',
                              },
                              lead: {
                                complete:
                                  '<p>Det er søknadsplikt for det du ønsker å bygge, men du kan søke og bygge selv.<p>Du kan få tips og råd til søknadsprosessen i kortfilmen <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Hva må til for å sende inn byggesøknad?“</a> og i vår veiledning <a target=‘blank’ href="https://dibk.no/verktoy-og-veivisere/atte-steg-fra-ide-til-ferdig-soknad/">“Åtte steg fra idé til ferdig søknad“</a>. Skjema for nabovarsling og byggesøknad finner du på siden <a target=‘blank’ href="https://dibk.no/bygge-selv/soknadsskjema-for-mindre-byggeprosjekter-pa-boligeiendom/">“Søknadsskjemaer for mindre byggeprosjekter på boligeiendom“</a>.<p>Husk at det er ditt ansvar at du bygger lovlig. Dersom bygningen er ulovlig kan den i verste fall rives.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                                incomplete:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                                incompleteWithError:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                                completeWithError:
                                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                              },
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'frittliggende.over.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'frittliggende',
                            operator: 'eq',
                            value: 'over',
                          },
                          children: [
                            {
                              id: 'frittliggende.over.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'frittliggende.over.text',
                                  type: 'Text',
                                  warning: true,
                                  text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen.',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatAnsvarligSoker',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      id: 'terrasseplan.branch',
                      type: 'Branch',
                      branches: [
                        {
                          test: {
                            field: 'terrasseRekkverk',
                            operator: 'eq',
                            value: 'ja',
                          },
                          children: [
                            {
                              id: 'terrasseplan.error',
                              type: 'Error',
                              children: [
                                {
                                  id: 'terrasseplan.text',
                                  type: 'Text',
                                  warning: true,
                                  text: 'Interessant at den blir høyere enn 0.5 meter',
                                },
                              ],
                            },
                            {
                              nodeId: 'resultatTakk',
                              type: 'Reference',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'tilbyggVerandaHvorGroup',
          type: 'Group',
          show: {
            type: 'or',
            clauses: [
              {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'tilbygg',
              },
              {
                field: 'hvaSkalDuBygge',
                operator: 'eq',
                value: 'veranda',
              },
            ],
          },
          children: [
            {
              type: 'Radio',
              id: 'tilbyggVerandaHvor',
              property: 'tilbyggVerandaHvor',
              heading: 'Hvor skal du plassere det du bygger?',
              text: '<p>Vi tar utgangspunkt i at du skal plassere det du bygger på en bygning som står der fra før.</p>',
              options: [
                {
                  id: 'tilbyggVerandaHvor.paaBakken',
                  type: 'Answer',
                  heading: 'På bakken inntil en bygning',
                  value: 'paaBakken',
                },
                {
                  id: 'tilbyggVerandaHvor.veggTilEksisterende',
                  type: 'Answer',
                  heading: 'På veggen til et eksisterende bygg',
                  value: 'veggTilEksisterende',
                },
                {
                  id: 'tilbyggVerandaHvor.takTilEksisterende',
                  type: 'Answer',
                  heading: 'På taket til en eksisterende bygning',
                  value: 'takTilEksisterende',
                },
                {
                  id: 'tilbyggVerandaHvor.underBakken',
                  type: 'Answer',
                  heading: 'Under bakkenivå (for eksempel lysgrav)',
                  value: 'underBakken',
                },
                {
                  id: 'tilbyggVerandaHvor.annet',
                  type: 'Answer',
                  heading: 'Ingen av alternativene passer',
                  value: 'annet',
                },
              ],
            },
            {
              id: 'tilbyggVerandaHvor.annet.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'tilbyggVerandaHvor',
                    operator: 'eq',
                    value: 'annet',
                  },
                  children: [
                    {
                      id: 'error.bebygd.nei',
                      type: 'Error',
                      children: [
                        {
                          id: 'error.bebygd.nei',
                          type: 'Text',
                          text: 'Veiviseren dekker dessverre ikke ditt tilfelle. Takk for at du prøvde veiviseren!',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
            {
              id: 'tilbygVerandaHvorResult',
              type: 'Branch',
              branches: [
                {
                  test: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'tilbyggVerandaHvor',
                        operator: 'eq',
                        value: 'takTilEksisterende',
                      },
                      {
                        field: 'tilbyggVerandaHvor',
                        operator: 'eq',
                        value: 'underBakken',
                      },
                    ],
                  },
                  children: [
                    {
                      id: 'tilbygVerandaHvorResult.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'tilbygVerandaHvorResult.text',
                          type: 'Text',
                          text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatAnsvarligSoker',
                    },
                  ],
                },
              ],
            },
            {
              id: 'tilbyggUnderBakken',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'tilbyggVerandaHvor',
                    operator: 'eq',
                    value: 'underBakken',
                  },
                  children: [
                    {
                      id: 'tilbyggUnderBakken.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'tilbyggUnderBakken.text',
                          type: 'Text',
                          text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatAnsvarligSoker',
                    },
                  ],
                },
              ],
            },
            {
              id: 'tilbyggVerandaFeste',
              property: 'tilbyggVerandaFeste',
              type: 'Radio',
              heading: 'Blir det du bygger understøttet og festet til bakken?',
              text: '<p>Du kan svare ja hvis du for eksempel skal bygge:</p><ul><li>en bygning som står på bakken</li><li>en veranda med en bærekonstruksjon som står på bakken</li></ul>',
              show: {
                field: 'tilbyggVerandaHvor',
                operator: 'eq',
                value: 'veggTilEksisterende',
              },
              options: [
                {
                  id: 'tilbyggVerandaFeste.ja',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'ja',
                },
                {
                  id: 'tilbyggVerandaFeste.nei',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'tilbyggVerandaFeste.nei.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'tilbyggVerandaFeste',
                    operator: 'eq',
                    value: 'nei',
                  },
                  children: [
                    {
                      id: 'error.feste.nei',
                      type: 'Error',
                      children: [
                        {
                          id: 'error.feste.nei',
                          type: 'Text',
                          text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatAnsvarligSoker',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
            {
              id: 'tilbyggVerandaPlassering',
              property: 'tilbyggVerandaPlassering',
              type: 'Radio',
              heading: 'Hva skal det du bygger ligge inntil?',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'tilbyggVerandaHvor',
                    operator: 'eq',
                    value: 'paaBakken',
                  },
                  {
                    field: 'tilbyggVerandaFeste',
                    operator: 'eq',
                    value: 'ja',
                  },
                ],
              },
              options: [
                {
                  id: 'tilbyggVerandaPlassering.inntilHusHytte',
                  type: 'Answer',
                  heading: 'Inntil en helårsbolig eller en fritidsbolig',
                  value: 'husHytte',
                },
                {
                  id: 'tilbyggVerandaPlassering.inntilBodGarasje',
                  type: 'Answer',
                  heading: 'Inntil en garasje, bod eller drivhus',
                  value: 'bodGarasje',
                },
                {
                  id: 'tilbyggVerandaPlassering.annet',
                  type: 'Answer',
                  heading: 'Ingen av alternativene passer',
                  value: 'annet',
                },
              ],
            },
            {
              id: 'tilbyggVerandaResult',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'tilbyggVerandaPlassering',
                    operator: 'eq',
                    value: 'annet',
                  },
                  children: [
                    {
                      id: 'tilbyggVerandaResult.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'tilbyggVerandaResult.text',
                          type: 'Text',
                          text: 'Veiviseren dekker dessverre ikke ditt tilfelle. Takk for at du prøvde veiviseren!',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatTakk',
                    },
                  ],
                },
              ],
            },
            {
              type: 'Branch',
              id: 'tilbyggVerandaHvorBranch',
              branches: [
                {
                  test: {
                    type: 'or',
                    clauses: [
                      {
                        field: 'tilbyggVerandaHvor',
                        operator: 'eq',
                        value: 'underBakken',
                      },
                      {
                        field: 'tilbyggVerandaHvor',
                        operator: 'eq',
                        value: 'takTilEksisterende',
                      },
                      {
                        field: 'tilbyggVerandaFeste',
                        operator: 'eq',
                        value: 'nei',
                      },
                    ],
                  },
                  children: [
                    {
                      type: 'Error',
                      id: 'tilbyggVerandaHvor.error',
                      show: {
                        field: 'tilbyggVerandaHvor',
                        operator: 'eq',
                        value: 'underBakken',
                      },
                      children: [
                        {
                          id: 'tilbyggGarasje.error.text',
                          type: 'Text',
                          text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen. ',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatAnsvarligSoker',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'tilbyggGarasjeGroup',
          type: 'Group',
          show: {
            type: 'or',
            clauses: [
              {
                type: 'and',
                clauses: [
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'veranda',
                  },
                  {
                    field: 'tilbyggVerandaHvor',
                    operator: 'eq',
                    value: 'paaBakken',
                  },
                  {
                    type: 'or',
                    clauses: [
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'bodGarasje',
                      },
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'husHytte',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'and',
                clauses: [
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'veranda',
                  },
                  {
                    field: 'tilbyggVerandaHvor',
                    operator: 'eq',
                    value: 'veggTilEksisterende',
                  },
                  {
                    field: 'tilbyggVerandaFeste',
                    operator: 'eq',
                    value: 'ja',
                  },
                  {
                    type: 'or',
                    clauses: [
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'bodGarasje',
                      },
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'husHytte',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'or',
                clauses: [
                  {
                    type: 'and',
                    clauses: [
                      {
                        field: 'hvaSkalDuBygge',
                        operator: 'eq',
                        value: 'tilbygg',
                      },
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'bodGarasje',
                      },
                    ],
                  },
                  {
                    type: 'and',
                    clauses: [
                      {
                        field: 'hvaSkalDuBygge',
                        operator: 'eq',
                        value: 'tilbygg',
                      },
                      {
                        field: 'tilbyggVerandaPlassering',
                        operator: 'eq',
                        value: 'husHytte',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          children: [
            {
              id: 'tilbyggGarasje',
              property: 'tilbyggGarasje',
              type: 'Radio',
              heading:
                'Hvor stort blir det som står der nå og det du skal bygge til sammen?',
              text: '<p>Oppgi det arealet som er størst av enten bruksareal (BRA) eller bebygd areal (BYA).</p>',
              summary: 'Hva er BRA/BYA?',
              details:
                '<p>Alle regulerte eiendommer har regler på hvor mye du kan bygge på eiendommen. Det finnes flere måter å beregne hvor mye du kan bygge, men det er kun én type som gjelder for din eiendom. Noen ganger er det hvor stort "fotavtrykk" bygninger har på eiendommen (BYA), andre ganger skal man regne sammen bruksareal i alle etasjer (BRA). Du finner beregningsmåten i kommuneplanen eller i reguleringsbestemmelsene. <a href="https://dibk.no/verktoy-og-veivisere/andre-fagomrader/sporsmal-og-svar-om-grad-av-utnytting/?_t_id=L6a5TUcEWyjt15qe1H2HIQ%3d%3d&_t_q=bruksareal&_t_tags=language%3ano%2csiteid%3aa8fed669-6208-4354-8fe6-9c93cb91a133&_t_ip=195.159.248.98%3a54423&_t_hit.id">Les mer om BRA/BYA på DiBKs nettsider.</a></p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'tilbyggVerandaPlassering',
                    operator: 'eq',
                    value: 'bodGarasje',
                  },
                  {
                    field: 'terrassePlassering',
                    operator: 'eq',
                    value: 'inntilBod',
                  },
                ],
              },
              options: [
                {
                  id: 'tilbyggGarasje.under50kvadratmeter',
                  type: 'Answer',
                  heading: 'Inntil 50 kvadratmeter',
                  value: 'under50kvadratmeter',
                },
                {
                  id: 'tilbyggGarasje.over50kvadratmeter',
                  type: 'Answer',
                  heading: 'Over 50 kvadratmeter',
                  value: 'over50kvadratmeter',
                },
              ],
            },
            {
              id: 'tilbyggGarasjeResultatBranch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'tilbyggGarasje',
                    operator: 'eq',
                    value: 'under50kvadratmeter',
                  },
                  children: [
                    {
                      id: 'tilbyggGarasje.error.text',
                      type: 'Text',
                      text: 'Vi anbefaler deg å ta veiviseren <a href="http://byggutenåsøke.dibk.no">Bygg uten å søke</a>, og svare som om du skal bygge en ny bygning under 50 kvadratmeter.  Finner du ikke begrensninger der, kan du utvide bygningen som står der i dag slik du ønsker.',
                    },
                    {
                      id: 'resultatGarasje',
                      type: 'Result',
                      heading: {
                        complete:
                          'Veiviseren dekker dessverre ikke ditt tilfelle',
                        incomplete: 'Du har ikke svart på alle spørsmålene',
                        incompleteWithError:
                          'Du har ikke svart på alle spørsmålene',
                        completeWithError:
                          'Du har ikke svart på alle spørsmålene',
                      },
                      lead: {
                        complete:
                          '<p>Vi anbefaler deg å ta veiviseren <a href="http://byggutenåsøke.dibk.no">Bygg uten å søke</a>, og svare som om du skal bygge en ny bygning under 50 kvadratmeter. Finner du ikke begrensninger der, kan du utvide bygningen som står der i dag slik du ønsker.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                        incomplete:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        incompleteWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        completeWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: 'inntilBygning',
              property: 'inntilBygning',
              type: 'Radio',
              heading: 'Hvor stort blir det du skal bygge?',
              text: '<p>Her er vi kun ute etter arealet på det du skal bygge, og ikke på det som står der fra før. Oppgi det arealet som er størst av enten bruksareal (BRA) eller bebygd areal (BYA).</p>',
              summary: 'Hva er BRA/BYA?',
              details:
                '<p>Alle regulerte eiendommer har regler på hvor mye du kan bygge på eiendommen. Det finnes flere måter å beregne hvor mye du kan bygge, men det er kun én type som gjelder for din eiendom. Noen ganger er det hvor stort "fotavtrykk" bygninger har på eiendommen (BYA), andre ganger skal man regne sammen bruksareal i alle etasjer (BRA). Du finner beregningsmåten i kommuneplanen eller i reguleringsbestemmelsene. <a href="https://dibk.no/verktoy-og-veivisere/andre-fagomrader/sporsmal-og-svar-om-grad-av-utnytting/?_t_id=L6a5TUcEWyjt15qe1H2HIQ%3d%3d&_t_q=bruksareal&_t_tags=language%3ano%2csiteid%3aa8fed669-6208-4354-8fe6-9c93cb91a133&_t_ip=195.159.248.98%3a54423&_t_hit.id">Les mer om BRA/BYA på DiBKs nettsider.</a></p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'tilbyggVerandaPlassering',
                    operator: 'eq',
                    value: 'husHytte',
                  },
                  {
                    field: 'tilbyggGarasje',
                    operator: 'eq',
                    value: 'over50kvadratmeter',
                  },
                  {
                    field: 'terrassePlassering',
                    operator: 'eq',
                    value: 'inntilHus',
                  },
                ],
              },
              options: [
                {
                  id: 'inntilBygning.under',
                  type: 'Answer',
                  heading: 'Inntil 15 kvadratmeter',
                  value: 'under',
                },
                {
                  id: 'inntilBygning.mellom',
                  type: 'Answer',
                  heading: 'Mellom 15-50 kvadratmeter',
                  value: 'mellom',
                },
                {
                  id: 'inntilBygning.over',
                  type: 'Answer',
                  heading: 'Over 50 kvadratmeter',
                  value: 'over',
                },
              ],
            },
            {
              id: 'inntilBygningBranch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'inntilBygning',
                    operator: 'eq',
                    value: 'over',
                  },
                  children: [
                    {
                      id: 'inntilBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'inntilBygningBranch.text',
                          type: 'Text',
                          text: 'Dette er søknadspliktig, og du må bruke ansvarlige foretak i hele byggeprosessen.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatAnsvarligSoker',
                    },
                  ],
                },
                {
                  test: {
                    field: 'inntilBygning',
                    operator: 'eq',
                    value: 'mellom',
                  },
                  children: [
                    {
                      id: 'inntilBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'inntilBygningBranch.text',
                          type: 'Text',
                          text: 'Dette blir søknadspliktig, men du kan søke og bygge på egenhånd.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatSokeSelv',
                    },
                  ],
                },
              ],
            },
            {
              id: 'soknadsBygning',
              property: 'soknadsBygning',
              type: 'Radio',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'tilbyggGarasje',
                    operator: 'eq',
                    value: 'over50kvadratmeter',
                  },
                  {
                    field: 'inntilBygning',
                    operator: 'eq',
                    value: 'under',
                  },
                ],
              },
              heading:
                'Er bygningen som står det fra før blitt søkt om og godkjent av kommunen?',
              text: '<p>Dette kan du finne ut ved å sjekke tidligere byggesaker på eiendommen din. Du finner ofte svar på dette i kommunens arkiv. Spør kommunen om du trenger hjelp til å finne fram.</p>',
              summary: 'Hvorfor spør dere om dette?',
              details:
                '<p>Det er ulike regler basert på hvorvidt bygningen som står der fra før er søkt om eller ikke.</p>',
              options: [
                {
                  id: 'soknadsBygning.ja',
                  type: 'Answer',
                  heading: 'Ja, den er omsøkt og godkjent',
                  value: 'ja',
                },
                {
                  id: 'soknadsBygning.nei',
                  type: 'Answer',
                  heading: 'Nei, den var søknadsfri',
                  value: 'nei',
                },
                {
                  id: 'soknadsBygning.vetikke',
                  type: 'Answer',
                  heading: 'Vet ikke',
                  value: 'vetikke',
                },
              ],
            },
            {
              id: 'soknadsBygningBranch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'soknadsBygning',
                    operator: 'eq',
                    value: 'nei',
                  },
                  children: [
                    {
                      id: 'soknadsBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'soknadsBygningBranch.text',
                          type: 'Text',
                          text: 'Når du skal sette opp for eksempel et tilbygg inntil en søknadsfri bygning, må du vanligvis søke dersom arealet blir større enn 50 kvadratmeter. Er du usikker på hva du har lov til, må du snakke med kommunen.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatTakk',
                    },
                  ],
                },
                {
                  test: {
                    field: 'soknadsBygning',
                    operator: 'eq',
                    value: 'vetikke',
                  },
                  children: [
                    {
                      id: 'soknadsBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'soknadsBygningBranch.text',
                          type: 'Text',
                          text: 'Sjekk byggesaken din hos kommunen. Har kommunen et digitalt arkiv kan du ofte sjekke dette selv på nett. Finner du ikke informasjon om bygningen, kan du få hjelp av byggesak i kommunen.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatTakk',
                    },
                  ],
                },
              ],
            },
            {
              id: 'brukAvBygning',
              property: 'brukAvBygning',
              type: 'Radio',
              heading: 'Hva skal tilbygget inneholde?',
              text: '<p></p>',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'soknadsBygning',
                    operator: 'eq',
                    value: 'ja',
                  },
                ],
              },
              options: [
                {
                  id: 'brukAvBygning.hoveddel',
                  type: 'Answer',
                  heading:
                    'Kun hoveddel (oppholdsrom, stue, soverom, kjøkken, entré, bad, vaskerom, badstue, hobbyrom, arbeidsrom, isolert vinterhage eller gang mellom rom som er hoveddel).',
                  value: 'hoveddel',
                },
                {
                  id: 'brukAvBygning.tillegg',
                  type: 'Answer',
                  heading:
                    'Kun tilleggsdel (f eks bod, oppbevaringsrom, uisolert vinterhage, drivhus, veranda, teknisk rom  og gang mellom rom som kun er tilleggsdel)',
                  value: 'tilleggsdel',
                },
                {
                  id: 'brukAvBygning.vetikke',
                  type: 'Answer',
                  heading: 'Annet',
                  value: 'vetikke',
                },
              ],
            },
            {
              id: 'brukAvBygningBranch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'brukAvBygning',
                    operator: 'eq',
                    value: 'hoveddel',
                  },
                  children: [
                    {
                      id: 'brukavBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'brukAvBygningBranch.text',
                          type: 'Text',
                          text: 'Du må søke dersom du vil utvide garasjen eller boden din med denne type rom. Snakk med kommunen om du er usikker',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatTakk',
                    },
                  ],
                },
                {
                  test: {
                    field: 'brukAvBygning',
                    operator: 'eq',
                    value: 'vetikke',
                  },
                  children: [
                    {
                      id: 'brukAvBygningBranch.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'brukAvBygningBranch.text',
                          type: 'Text',
                          text: 'Snakk med kommunen for å finne ut om det du vil bygge er søknadspliktig.',
                        },
                      ],
                    },
                    {
                      type: 'Reference',
                      nodeId: 'resultatTakk',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Page',
      heading: 'Sjekk kommunens planer',
      id: 'tilbyggSjekkePlaner',
      show: {
        type: 'or',
        clauses: [
          {
            field: 'plattingRekkverk',
            operator: 'eq',
            value: 'nei',
          },
          {
            field: 'inntilBygning',
            operator: 'eq',
            value: 'over',
          },
          {
            field: 'inntilBygning',
            operator: 'eq',
            value: 'under',
          },
          {
            field: 'inntilBygning',
            operator: 'eq',
            value: 'mellom',
          },
          {
            field: 'terrasseStorrelse',
            operator: 'eq',
            value: 'mindreenn',
          },
        ],
      },
      children: [
        {
          id: 'regulert',
          property: 'regulert',
          type: 'Radio',
          heading: 'Har du funnet frem reguleringsplanen for eiendommen?',
          text: '<p>Sjekk med kommunen om det finnes en reguleringsplan for eiendommen din. Du kan som regel finne ut dette på kommunens nettsted. Du trenger reguleringsplanen for å svare på de neste spørsmålene.</p>',
          hide: {
            field: 'bebygd',
            operator: 'not',
          },
          options: [
            {
              id: 'regulert.ja',
              type: 'Answer',
              heading: 'Ja, jeg har funnet frem reguleringsplan.',
              value: 'ja',
            },
            {
              id: 'regulert.nei',
              type: 'Answer',
              heading: 'Nei, det finnes ikke en reguleringsplan.',
              value: 'nei',
            },
          ],
        },
        {
          type: 'Branch',
          id: 'regulertBranch',
          branches: [
            {
              test: {
                field: 'regulert',
                operator: 'eq',
                value: 'nei',
              },
              children: [
                {
                  id: 'regulert.nei.feil',
                  type: 'Error',
                  show: {
                    field: 'regulert',
                    operator: 'eq',
                    value: 'nei',
                  },
                  children: [
                    {
                      id: 'regulert.nei.feil.tekst',
                      type: 'Text',
                      warning: true,
                      text: 'Du trenger som regel en dispensasjon for å bygge noe på en eiendom hvor det ikke finnes en reguleringsplan. Hør med kommunen om hva det er lov å gjøre på eiendommen.',
                    },
                  ],
                },
                {
                  nodeId: 'resultatTakk',
                  type: 'Reference',
                },
              ],
            },
          ],
        },
        {
          id: 'hvisRegulertGroup',
          type: 'Group',
          show: {
            field: 'regulert',
            operator: 'eq',
            value: 'ja',
          },
          children: [
            {
              id: 'hvisregulert',
              property: 'hvisregulert',
              type: 'Radio',
              heading:
                'Er eiendommen din regulert til enten bolig eller fritidsbolig?',
              text: '<p>Dette finner du vanligvis i arealplankartet til reguleringsplanen. Spør kommunen om du er usikker hva eiendommen din er regulert til.</p>',
              hide: {
                field: 'regulert',
                operator: 'eq',
                value: 'nei',
              },
              options: [
                {
                  id: 'hvisregulert.ja',
                  type: 'Answer',
                  heading:
                    'Ja, eiendommen er regulert til bolig eller fritidsbolig',
                  value: 'ja',
                },
                {
                  id: 'hvisregulert.nei',
                  type: 'Answer',
                  heading:
                    'Nei, eiendommen er regulert til et annet formål (f eks regulert til LNF)',
                  value: 'nei',
                },
                {
                  id: 'hvisregulert.vetikke',
                  type: 'Answer',
                  heading: 'Vet ikke',
                  value: 'vetikke',
                },
              ],
            },
            {
              type: 'Branch',
              id: 'hvisregulertBranch',
              branches: [
                {
                  test: {
                    field: 'hvisregulert',
                    operator: 'eq',
                    value: 'nei',
                  },
                  children: [
                    {
                      id: 'hvisregulert.nei.feil',
                      type: 'Error',
                      show: {
                        field: 'hvisregulert',
                        operator: 'eq',
                        value: 'nei',
                      },
                      children: [
                        {
                          id: 'hvisregulert.nei.feil.tekst',
                          type: 'Text',
                          warning: true,
                          text: 'Du trenger som regel en dispensasjon for å bygge noe som er i strid med arealformålet. Kontakt kommunen dersom du trenger mer informasjon.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
            {
              type: 'Branch',
              id: 'hvisregulertVetikkeBranch',
              branches: [
                {
                  test: {
                    field: 'hvisregulert',
                    operator: 'eq',
                    value: 'vetikke',
                  },
                  children: [
                    {
                      id: 'hvisregulert.vetikke.feil',
                      type: 'Error',
                      show: {
                        field: 'hvisregulert',
                        operator: 'eq',
                        value: 'vetikke',
                      },
                      children: [
                        {
                          id: 'hvisregulert.vetikke.feil.tekst',
                          type: 'Text',
                          warning: true,
                          text: 'Kontakt kommunen din for å finne ut hva eiendommen er regulert til. Hva eiendommen er regulert til, bestemmer hva du kan bygge uten å søke.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'plattingplanGroup',
          type: 'Group',
          show: {
            type: 'and',
            clauses: [
              {
                field: 'plattingRekkverk',
                operator: 'eq',
                value: 'nei',
              },
              {
                field: 'hvisregulert',
                operator: 'eq',
                value: 'ja',
              },
            ],
          },
          children: [
            {
              id: 'plattingplan',
              property: 'plattingplan',
              type: 'Radio',
              heading: 'Er det andre begrensninger som hindrer deg i å bygge?',
              text: '<p>Sett deg godt inn i reguleringsplanen, kommuneplanens arealdel og kommunale vedtekter. Disse inneholder ofte andre begrensninger som kan hindre deg i å bygge det du ønsker. For eksempel om du vil utvide en bevaringsverdig bygning eller bygge i nærheten av:</p><ul><li>sjø og vassdrag</li><li>vei, trikk eller jernbane</li><li>flom- og skredsområder</li><li>kulturminner</li><li>sjeldne plante- og dyrearter</li><li>kraftlinjer</li></ul><p>Bygger du ulovlig kan det bli dyrt og tidkrevende å rydde opp i ettertid. Er du usikker bør du sjekke med kommunen.</p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'plattingRekkverk',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              options: [
                {
                  id: 'plattingplan.ja',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'ja',
                },
                {
                  id: 'plattingplan.nei',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'nei',
                },
              ],
            },
            {
              type: 'Branch',
              id: 'plattingplanBranch',
              branches: [
                {
                  test: {
                    field: 'plattingplan',
                    operator: 'eq',
                    value: 'ja',
                  },
                  children: [
                    {
                      id: 'plattingplan.ja.feil',
                      type: 'Error',
                      show: {
                        field: 'plattingplan',
                        operator: 'eq',
                        value: 'ja',
                      },
                      children: [
                        {
                          id: 'plattingplan.ja.feil.tekst',
                          type: 'Text',
                          warning: true,
                          text: 'Du trenger som regel en dispensasjon for å bygge noe på en eiendom hvor det finnes slike begrensninger. Hør med kommunen om hva det er lov å gjøre på eiendommen.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'plattingplan.branch',
      type: 'Branch',
      branches: [
        {
          test: {
            type: 'and',
            clauses: [
              {
                field: 'plattingplan',
                operator: 'eq',
                value: 'nei',
              },
            ],
          },
          children: [
            {
              id: 'resultatJippiUnder05',
              type: 'Result',
              heading: {
                complete: 'Du kan bygge uten å søke!',
                incomplete: 'Du har ikke svart på alle spørsmålene',
                incompleteWithError: 'Du har ikke svart på alle spørsmålene',
                completeWithError: 'Du har ikke svart på alle spørsmålene',
              },
              lead: {
                complete:
                  '<p>Ut fra de opplysnigenen du har gitt, kan du bygge uten å søke. Er du usikker på om du har svart riktig bør du kontakte kommunen.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                incomplete:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                incompleteWithError:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                completeWithError:
                  '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
              },
            },
          ],
        },
      ],
    },
    {
      type: 'Branch',
      id: 'tilbyggSjekkePlanerBranch',
      branches: [
        {
          test: {
            type: 'and',
            clauses: [
              {
                field: 'plattingplan',
                operator: 'eq',
                value: 'ja',
              },
            ],
          },
          children: [
            {
              id: 'plattingplan.error',
              type: 'Error',
              children: [
                {
                  id: 'plattingplan.text',
                  type: 'Text',
                  warning: true,
                  text: 'Du trenger som regel en dispensasjon for å bygge noe på en eiendom hvor det finnes slike begrensninger. Hør med kommunen om hva det er lov å gjøre på eiendommen.',
                },
              ],
            },
            {
              nodeId: 'resultatTakk',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      type: 'Page',
      heading: 'Mulige begrensninger',
      id: 'byggetsGrenserOgDimensjoner',
      show: {
        type: 'or',
        clauses: [
          {
            type: 'or',
            clauses: [
              {
                field: 'regulert',
                operator: 'eq',
                value: 'ja',
              },
            ],
          },
        ],
      },
      children: [
        {
          id: 'grenseGroup',
          type: 'Group',
          children: [
            {
              id: 'byggegrense',
              property: 'byggegrense',
              type: 'Radio',
              heading:
                'Finnes det en byggegrense mot naboeiendommer i reguleringsplanen?',
              text: '<p>En byggegrense bestemmer hvor langt unna du kan bygge mot f eks vei eller nabo. Du finner informasjon om byggegrense i reguleringsplanen, reguleringsbestemmelser eller i kommuneplanens arealdel. </p>',
              options: [
                {
                  id: 'byggegrense.ja',
                  type: 'Answer',
                  heading: 'Ja, det finnes byggegrense mot naboeiendommer',
                  value: 'ja',
                },
                {
                  id: 'byggegrense.nei',
                  type: 'Answer',
                  heading:
                    'Nei, det finnes ikke byggegrense mot naboeiendommer',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'firemeterTilbygg',
              property: 'firemeterTilbygg',
              type: 'Radio',
              heading: 'Blir tilbygget minst 4 meter fra nabogrensa?',
              text: '<p>Når det ikke finnes byggegrense mot naboeiendommer, må det du bygger plasseres minst 4,0 meter fra nabogrensa.</p>',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'tilbygg',
                  },
                  {
                    field: 'byggegrense',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              options: [
                {
                  id: 'firemeterTilbygg.ja',
                  type: 'Answer',
                  heading: 'Ja, det er minst 4,0 meter til nabogrense',
                  value: 'ja',
                },
                {
                  id: 'firemeterTilbygg.nei',
                  type: 'Answer',
                  heading: 'Nei, det blir nærmere',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'firemeterVeranda',
              property: 'firemeterVeranda',
              type: 'Radio',
              heading: 'Blir det du skal bygge minst 4 meter fra nabogrensa?',
              text: '<p>Når det ikke finnes byggegrense mot naboeiendommer, må det du bygger plasseres minst 4,0 meter fra nabogrensa.</p>',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'veranda',
                  },
                  {
                    field: 'byggegrense',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              options: [
                {
                  id: 'firemeterVeranda.ja',
                  type: 'Answer',
                  heading: 'Ja, det er minst 4,0 meter til nabogrense',
                  value: 'ja',
                },
                {
                  id: 'firemeterVeranda.nei',
                  type: 'Answer',
                  heading: 'Nei, det blir nærmere',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'enmeterTerrasse',
              property: 'enmeterTerrasse',
              type: 'Radio',
              heading: 'Blir det du skal bygge minst 1 meter fra nabogrensa?',
              text: '<p>Hvis det ikke finnes byggegrense mot naboer, er hovedregelen at slike terrasser kan bygges 1,0 meter fra nabogrensa. Terrassen kan ikke på noe som helst punkt være nærmere nabogrensa enn 1,0 meter.</p>',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'terrasse',
                  },
                  {
                    field: 'byggegrense',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              options: [
                {
                  id: 'enmeterTerrasse.ja',
                  type: 'Answer',
                  heading: 'Ja, det er minst 1,0 meter til nabogrense',
                  value: 'ja',
                },
                {
                  id: 'enmeterTerrasse.nei',
                  type: 'Answer',
                  heading: 'Nei, terrassen blir nærmere',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'byggegrenseOk',
              property: 'byggegrenseOk',
              type: 'Radio',
              heading: 'Blir det du skal bygge innenfor byggegrensene?',
              text: '<p>For å slippe å søke, må det du skal bygge være innenfor byggegrensene. </p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'byggegrense',
                    operator: 'eq',
                    value: 'ja',
                  },
                ],
              },
              options: [
                {
                  id: 'byggegrenseOk.ja',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'ja',
                },
                {
                  id: 'byggegrenseOk.nei',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'nei',
                },
                {
                  id: 'byggegrenseOk.tilatelse',
                  type: 'Answer',
                  heading:
                    'Nei, men jeg har fått nødvendige tillatelser fra kommunen',
                  value: 'tilatelse',
                },
              ],
            },
          ],
        },
        {
          id: 'firemetergrenseresultat.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                type: 'or',
                clauses: [
                  {
                    field: 'firemeterTilbygg',
                    operator: 'eq',
                    value: 'nei',
                  },
                  {
                    field: 'firemeterVeranda',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              children: [
                {
                  id: 'firemetergrenseresultat.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'firemetergrenseresultat.text',
                      type: 'Text',
                      warning: true,
                      text: 'Dette blir søknadspliktig, men du kan søke og bygge på egenhånd. Les mer på resultatsiden.',
                    },
                  ],
                },
                {
                  nodeId: 'resultatSokeSelv',
                  type: 'Reference',
                },
              ],
            },
          ],
        },
        {
          id: 'enmetergrenseresultat.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'enmeterTerrasse',
                operator: 'eq',
                value: 'nei',
              },
              children: [
                {
                  id: 'enmetergrenseresultat.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'enmetergrenseresultat.text',
                      type: 'Text',
                      warning: true,
                      text: 'Dette blir søknadspliktig, men du kan søke og bygge på egenhånd. Les mer på resultatsiden.',
                    },
                  ],
                },
                {
                  nodeId: 'resultatSokeSelv',
                  type: 'Reference',
                },
              ],
            },
          ],
        },
        {
          id: 'byggegrenseOk.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'byggegrenseOk',
                operator: 'eq',
                value: 'nei',
              },
              children: [
                {
                  id: 'byggegrenseOk.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'byggegrenseOk.text',
                      type: 'Text',
                      warning: true,
                      text: 'Du må velge en annen plassering. Er ikke det mulig, må du høre med kommunen om hva det er lov å gjøre på eiendommen.',
                    },
                  ],
                },
                {
                  nodeId: 'resultatDisp',
                  type: 'Reference',
                },
              ],
            },
          ],
        },
        {
          id: 'hoydeGroup',
          type: 'Group',
          heading: 'Høyde på det du skal bygge',
          show: {
            type: 'or',
            clauses: [
              {
                field: '$computed.grenser',
                operator: 'eq',
                value: true,
              },
              {
                field: 'firemeterTilbygg',
                operator: 'eq',
                value: 'ja',
              },
              {
                field: 'firemeterVeranda',
                operator: 'eq',
                value: 'ja',
              },
              {
                field: 'enmeterTerrasse',
                operator: 'eq',
                value: 'ja',
              },
            ],
          },
          children: [
            {
              id: 'forHoy',
              property: 'forHoy',
              type: 'Radio',
              heading:
                'Blir det du skal bygge høyere enn bygningen som står der fra før?',
              options: [
                {
                  id: 'forHoy.ja',
                  type: 'Answer',
                  heading: 'Ja, blir høyere',
                  value: 'ja',
                },
                {
                  id: 'forHoy.kommuneOk',
                  type: 'Answer',
                  heading:
                    'Ja, men det er avklart med kommunen at jeg kan bygge høyere uten å søke',
                  value: 'kommuneOk',
                },
                {
                  id: 'forHoy.nei',
                  type: 'Answer',
                  heading: 'Nei, blir lavere',
                  value: 'nei',
                },
              ],
            },
            {
              id: 'hoyestePunkt',
              property: 'hoyestePunkt',
              type: 'Radio',
              heading: 'Blir det du skal bygge høyere enn 5 meter over bakken?',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'forHoy',
                    operator: 'eq',
                    value: 'kommuneOk',
                  },
                  {
                    field: 'forHoy',
                    operator: 'eq',
                    value: 'nei',
                  },
                ],
              },
              options: [
                {
                  id: 'hoyestePunkt.over',
                  type: 'Answer',
                  heading: 'Ja, det blir høyere enn 5 meter',
                  value: 'over',
                },
                {
                  id: 'hoyestePunkt.overOk',
                  type: 'Answer',
                  heading:
                    'Ja, men avklart med kommunen at jeg kan bygge høyere uten å søke',
                  value: 'overOk',
                },
                {
                  id: 'hoyestePunkt.under',
                  type: 'Answer',
                  heading: 'Nei, det blir lavere enn 5 meter',
                  value: 'under',
                },
              ],
            },
            {
              id: 'forHoy.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'forHoy',
                    operator: 'eq',
                    value: 'ja',
                  },
                  children: [
                    {
                      id: 'forHoy.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'forHoy.text',
                          type: 'Text',
                          warning: true,
                          text: 'Du må høre med kommunen din om det du skal bygge blir så høyt at du må søke.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
            {
              id: 'hoyestePunkt.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'hoyestePunkt',
                    operator: 'eq',
                    value: 'over',
                  },
                  children: [
                    {
                      id: 'hoyestePunkt.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'hoyestePunkt.text',
                          type: 'Text',
                          warning: true,
                          text: 'Du må høre med kommunen din om det du skal bygge blir så høyt at du må søke.',
                        },
                      ],
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'arealGroup',
          type: 'Group',
          show: {
            type: 'or',
            clauses: [
              {
                field: '$computed.visAreal',
                operator: 'eq',
                value: true,
              },
              {
                field: 'terrasseRekkverk',
                operator: 'eq',
                value: 'nei',
              },
            ],
          },
          children: [
            {
              id: 'areal',
              property: 'areal',
              type: 'Radio',
              show: {
                field: '$computed.visAreal',
                operator: 'eq',
                value: true,
              },
              heading:
                'Har eiendommen din stort nok areal til bygningen du ønsker å sette opp?',
              text: '<p>Eiendommen din har en begrensning på hvor mye areal eller volum du kan ha bygninger på. Dette er som regel oppgitt i situasjonskart eller reguleringsplan som:</p><ul><li>BYA: Bebygd areal. Se etter prosent BYA eller antall kvadratmeter BYA</li><li>BRA: Bruksareal. Se etter prosent BRA eller antall kvadratmeter BRA</li><li>TU: Tomteutnyttelse. Se etter prosent TU. Finnes kun på eldre planer</li></ul><p>For å finne ut hvor mye plass du har igjen å bygge på, må du regne ut hvor mye plass de eksisterende bygningene opptar.</p><p>Du kan ta vår veiviser <a href="https://dibk.no/verktoy-og-veivisere/hvor-stort-kan-du-bygge/">Hvor stort kan du bygge</a> for å få hjelp.</p>',
              options: [
                {
                  id: 'areal.ja',
                  type: 'Answer',
                  heading: 'Ja, jeg har regnet ut at jeg har plass',
                  value: 'ja',
                },
                {
                  id: 'areal.nei',
                  type: 'Answer',
                  heading: 'Nei, jeg har regnet ut at jeg ikke har plass',
                  value: 'nei',
                },
                {
                  id: 'areal.vetIkke',
                  type: 'Answer',
                  heading: 'Jeg vet ikke',
                  value: 'vetIkke',
                },
              ],
            },
            {
              id: 'arealNei.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'areal',
                    operator: 'eq',
                    value: 'nei',
                  },
                  children: [
                    {
                      id: 'arealNei.error',
                      type: 'Error',
                      children: [
                        {
                          id: 'arealNei.text',
                          type: 'Text',
                          warning: true,
                          text: 'Du bør bygge mindre. Er ikke det mulig, må du høre med kommunen om mulighetene for å søke om dispensasjon.',
                        },
                      ],
                    },
                    {
                      id: 'resultatDisp',
                      type: 'Result',
                      heading: {
                        complete: 'Du trenger dispensasjon',
                        incomplete: 'Du har ikke svart på alle spørsmålene',
                        incompleteWithError:
                          'Du har ikke svart på alle spørsmålene',
                        completeWithError:
                          'Du har ikke svart på alle spørsmålene',
                      },
                      lead: {
                        complete:
                          '<p>Ut fra svarene dine vil det du skal bygge være i strid med reguleringsplan eller andre plasseringsregler. Det enkleste er ofte å tilpasse det du skal bygge, for eksempel ved å endre størrelse eller plassering.</p><p>Hvis det ikke er mulig å tilpasse det du skal bygge, bør du forhøre deg med kommunen om det er mulig å få dispensasjon. Søknad om dispensasjon må nabovarsles og har minst 12 ukers behandlingstid.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                        incomplete:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        incompleteWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                        completeWithError:
                          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                      },
                    },
                  ],
                },
              ],
            },
            {
              id: 'hoydeResultat.branch',
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'areal',
                    operator: 'eq',
                    value: 'vetIkke',
                  },
                  children: [
                    {
                      id: 'hoydeResultat.text',
                      type: 'Text',
                      warning: true,
                      text: 'Vi anbefaler å ta vår veiviser <a href="https://dibk.no/verktoy-og-veivisere/hvor-stort-kan-du-bygge/">Hvor stort kan du bygge</a> for å få hjelp til å finne om du har plass. Du kan fortsette veiviseren etterpå.',
                    },
                    {
                      nodeId: 'resultatTakk',
                      type: 'Reference',
                    },
                  ],
                },
              ],
            },
            {
              id: 'avstandTilNaboeiendom',
              property: 'avstandTilNaboeiendom',
              type: 'Radio',
              heading:
                'Blir det mindre enn 8,0 meter til nærmeste bygning på naboeiendommen?',
              text: '<p>Da må du brannsikre de delene av bygningen eller tilbygget som blir nærmere naboen enn 8,0 meter.</p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'IKKEVIS',
                    operator: 'eq',
                    value: 'IKKEVIS',
                  },
                ],
              },
              options: [
                {
                  id: 'avstandTilNaboeiendom.ja',
                  type: 'Answer',
                  heading:
                    'Ja, det blir mindre enn 8,0 meter til bygning på naboeiendom',
                  value: 'ja',
                },
                {
                  id: 'avstandTilNaboeiendom.nei',
                  type: 'Answer',
                  heading:
                    'Nei, det blir minst 8,0 meter til bygning på naboeiendom',
                  value: 'nei',
                },
                {
                  nodeId: 'plan',
                  type: 'Reference',
                },
              ],
            },
            {
              id: 'avstandTilNaboeiendom.error',
              type: 'Error',
              show: {
                type: 'and',
                clauses: [
                  {
                    field: 'avstandTilNaboeiendom',
                    operator: 'eq',
                    value: 'ja',
                  },
                ],
              },
              children: [
                {
                  id: 'avstandTilNaboeiendom.msg',
                  type: 'Text',
                  warning: true,
                  heading: '',
                  text: 'Du må vanligvis brannsikre tilbygg som blir nærmere naboen enn 8,0 meter. Brannmotstanden må være på minst El 30 (motstandsdyktig mot brann i 30 minutter). Be om hjelp fra fagperson om du er usikker på hvilken brannsikring du trenger.',
                },
              ],
            },
            {
              id: 'plan',
              property: 'plan',
              type: 'Radio',
              heading: 'Er det andre begrensninger som hindrer deg i å bygge?',
              text: '<p>Sett deg godt inn i reguleringsplanen, kommuneplanens arealdel og kommunale vedtekter. Disse inneholder ofte andre begrensninger som kan hindre deg i å bygge det du ønsker. For eksempel om du vil utvide en bevaringsverdig bygning eller bygge i nærheten av:</p><ul><li>sjø og vassdrag</li><li>vei, trikk eller jernbane</li><li>flom- og skredsområder</li><li>kulturminner</li><li>sjeldne plante- og dyrearter</li><li>kraftlinjer</li></ul><p>Bygger du ulovlig kan det bli dyrt og tidkrevende å rydde opp i ettertid. Er du usikker bør du sjekke med kommunen.</p>',
              show: {
                type: 'or',
                clauses: [
                  {
                    field: 'areal',
                    operator: 'eq',
                    value: 'ja',
                  },
                ],
              },
              options: [
                {
                  id: 'plan.ja',
                  type: 'Answer',
                  heading: 'Ja',
                  value: 'ja',
                },
                {
                  id: 'plan.nei',
                  type: 'Answer',
                  heading: 'Nei',
                  value: 'nei',
                },
              ],
            },
          ],
        },
        {
          id: 'planNeiTerrasse.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                type: 'and',
                clauses: [
                  {
                    field: 'plan',
                    operator: 'eq',
                    value: 'nei',
                  },
                  {
                    field: 'hvaSkalDuBygge',
                    operator: 'eq',
                    value: 'terrasse',
                  },
                  {
                    field: 'terrasseOverBakken',
                    operator: 'eq',
                    value: 'middels',
                  },
                ],
              },
              children: [
                {
                  id: 'resultatJippiUnder10',
                  type: 'Result',
                  heading: {
                    complete: 'Du kan bygge uten å søke!',
                    incomplete: 'Du har ikke svart på alle spørsmålene',
                    incompleteWithError:
                      'Du har ikke svart på alle spørsmålene',
                    completeWithError: 'Du har ikke svart på alle spørsmålene',
                  },
                  lead: {
                    complete:
                      '<p>Ut fra de opplysnigenen du har gitt, kan du bygge uten å søke. Er du usikker på om du har svart riktig bør du kontakte kommunen.</p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                    incomplete:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incompleteWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    completeWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'planNeiTilbyggVeranda.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                type: 'or',
                clauses: [
                  {
                    type: 'and',
                    clauses: [
                      {
                        field: 'plan',
                        operator: 'eq',
                        value: 'nei',
                      },
                      {
                        type: 'or',
                        clauses: [
                          {
                            field: 'hvaSkalDuBygge',
                            operator: 'eq',
                            value: 'veranda',
                          },
                          {
                            field: 'hvaSkalDuBygge',
                            operator: 'eq',
                            value: 'tilbygg',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: 'and',
                    clauses: [
                      {
                        field: 'plan',
                        operator: 'eq',
                        value: 'nei',
                      },
                      {
                        type: 'or',
                        clauses: [
                          {
                            field: 'hvaSkalDuBygge',
                            operator: 'eq',
                            value: 'terrasseEllerPlatting',
                          },
                          {
                            field: 'terrasseOverBakken',
                            operator: 'eq',
                            value: 'middels',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              children: [
                {
                  id: 'resultatHurraMenHusk',
                  type: 'Result',
                  heading: {
                    complete: 'Du kan bygge uten å søke!',
                    incomplete: 'Du har ikke svart på alle spørsmålene',
                    incompleteWithError:
                      'Du har ikke svart på alle spørsmålene',
                    completeWithError: 'Du har ikke svart på alle spørsmålene',
                  },
                  lead: {
                    complete:
                      '<p>Ut fra de opplysnigenen du har gitt, kan du bygge uten å søke. Er du usikker på om du har svart riktig bør du kontakte kommunen.</p><p>Når du er ferdig å bygge, må du melde fra til kommunen om hva du har bygget.</p><p>Du skal bruke meldeskjemaet <a href=\'https://dibk.no/globalassets/blanketter_utfyllbare/alle-blanketter/5188-melding-om-bygning-eller-tilbygg-som-er-unntatt-soknadsplikt.pdf\'>"Melding om bygning eller tilbygg som er unntatt søknadsplikt"</a></p><p><strong>Takk for at du prøvde veiviseren!</strong><br />Under kan du se en oppsummering av hva du har svart. Du kan også gå inn på hvert steg i veiviseren og endre svarene dine.</p>',
                    incomplete:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    incompleteWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                    completeWithError:
                      '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'planJa.branch',
          type: 'Branch',
          branches: [
            {
              test: {
                field: 'plan',
                operator: 'eq',
                value: 'ja',
              },
              children: [
                {
                  id: 'planJa.error',
                  type: 'Error',
                  children: [
                    {
                      id: 'planJa.text',
                      type: 'Text',
                      warning: true,
                      text: 'Du trenger som regel en dispensasjon for å bygge noe på en eiendom hvor det finnes slike begrensninger. Hør med kommunen om hva det er lov å gjøre på eiendommen.',
                    },
                  ],
                },
                {
                  nodeId: 'resultatDisp',
                  type: 'Reference',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'Result',
      id: 'resultatIkkeFerdig',
      heading: {
        complete: 'Du skal aldri se denne resultatsiden',
        incomplete: 'Du har ikke svart på alle spørsmålene',
        incompleteWithError: 'Du har ikke svart på alle spørsmålene',
        completeWithError: 'Du har ikke svart på alle spørsmålene',
      },
      lead: {
        complete:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        completeWithError:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incomplete:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
        incompleteWithError:
          '<p>Vi kan derfor ikke gi deg svar på om du må søke eller ikke. Du kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der kan du også klikke deg inn på hvert steg i veiviseren for å legge til og endre dine svar.</p>',
      },
    },
  ],
};
export default data;