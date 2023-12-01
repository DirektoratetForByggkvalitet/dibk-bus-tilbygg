/* eslint-disable react-refresh/only-export-components */
import React, { FC } from 'react';
import { DispatchProp } from 'react-redux';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

interface IntroProps extends DispatchProp {
  close: () => void;
  data: Record<string, unknown>;
}

const Intro: FC<any> = ({ close, data }) => {
  const arrayWithData = Object.keys(data);

  // close / hide intro page if user has begun schema journey
  // TODO: a better approach might be to exclude the $computed prop if
  // it's values is non-existent, in losen.
  if (
    arrayWithData.length !== 0 &&
    !(arrayWithData.length === 1 && arrayWithData[0] !== '$computed')
  ) {
    close();
  }

  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>
          Bygg uten å søke - terrasser og tilbygg
        </Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>
          Skal du utvide huset ditt med en terrasse, veranda eller et nytt rom?
          Svar på spørsmålene i denne veiviseren for å finne ut om du må sende
          byggesøknad til kommunen.
        </Primitives.Paragraphs.Lead>
        <Primitives.Paragraphs.P>
          <Primitives.Heading.H2>
            Oppdatert med endringene fra 1. mai 2021.
          </Primitives.Heading.H2>
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Finn fram til reglene som gjelder eiendommen din. Dette kan påvirke
          hva du kan bygge uten å søke. Let på kommunens nettside etter:
        </Primitives.Paragraphs.P>
        <ul>
          <li>Situasjonskart for din eiendom</li>
          <li>Reguleringsplan</li>
          <li>Kommuneplanens arealdel</li>
          <li>Kommunale vedtekter</li>
        </ul>
        <Primitives.Paragraphs.P>
          Du vil også trenge disse dokumentene for å svare riktig i veiviseren.{' '}
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>
          Start nå og fullfør senere
        </Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og
          fortsette senere. Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <Primitives.Heading.H2>
          Har du funnet ut det du trenger?
        </Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren! Du får hjelp til hvert
          spørsmål underveis.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type='button' onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default connect(
  (state: { data: unknown; '@WIZARD_STATE': unknown }) => ({
    data: state['@WIZARD_STATE'],
  }),
)(Intro);
