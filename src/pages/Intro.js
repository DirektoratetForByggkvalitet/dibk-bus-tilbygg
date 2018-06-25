import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Primitives } from 'losen';
import { IntroMain } from '../primitives/IntroMain';

function Intro({ close, data }) {
  const arrayWithData = Object.keys(data);

  // close / hide intro page if user has begun schema journey
  // TODO: a better approach might be to exclude the $computed prop if
  // it's values is non-existent, in losen.
  if (
    arrayWithData.length !== 0 &&
    !(arrayWithData.length === 1 && !arrayWithData[0] !== '$computed')
  ) {
    close();
  }

  return (
    <Primitives.Wizard>
      <IntroMain>
        <Primitives.Heading.H1>Bygg uten å søke</Primitives.Heading.H1>
        <Primitives.Paragraphs.Lead>Skal du utvide huset ditt med en terrasse, veranda eller et nytt rom? Svar på spørsmålene i denne veiviseren for å finne ut om du må sende byggesøknad til kommunen, eller om du kan slippe å søke.</Primitives.Paragraphs.Lead>
        <Primitives.Heading.H2>Før du begynner</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Før du begynner er det lurt å finne fram til kommunale regler som gjelder for din eiendom. Dette er typisk:
        </Primitives.Paragraphs.P>
        <ul>
          <li>Situasjonskart for din eiendom</li>
          <li>Reguleringsplan</li>
          <li>Kommuneplanens arealdel</li>
          <li>Kommunale vedtekter</li>
        </ul>
        <Primitives.Paragraphs.P>
          Disse dokumentene gir blant annet svar på:
        </Primitives.Paragraphs.P>
        <ul>
          <li>hva du har lov til å bygge på eiendommen din</li>
          <li>hvor du har lov til å bygge på eiendommen din</li>
          <li>hvor mye du har lov til å bygge på eiendommen din</li>
        </ul>
        <Primitives.Paragraphs.P>Dette kan hjelpe deg å svare riktig i veiviseren. </Primitives.Paragraphs.P>
        <br />
        <Primitives.Heading.H2>Start nå og fullfør senere</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Det er du som er ansvarlig for at alle lover og regler blir fulgt når du bygger. Er det noen spørsmål du er usikker på underveis? Du kan ta en pause og fortsette senere. Nettleseren husker hvor du var.
        </Primitives.Paragraphs.P>
        <br />
        <Primitives.Heading.H2>Har du funnet ut det du trenger?</Primitives.Heading.H2>
        <Primitives.Paragraphs.P>
          Da er det bare å sette i gang med veiviseren! Du får hjelp til hvert spørsmål underveis.
        </Primitives.Paragraphs.P>
        <Primitives.Button.MainButton type="button" onClick={() => close()}>
          Start veiviseren
        </Primitives.Button.MainButton>
      </IntroMain>
    </Primitives.Wizard>
  );
}

Intro.propTypes = {
  close: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default connect(state => ({ data: state['@WIZARD_STATE'] }))(Intro);
