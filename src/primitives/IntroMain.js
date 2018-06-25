import styled from 'styled-components';

export const IntroMain = styled.main`
  display: block;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  padding: 75px 20px 200px;
  line-height: 1.6;
  font-weight: 300;
  font-size: 18px;
  h1 {
    line-height: 1.2;
    margin-bottom: 30px;
    &::before {
      content: "Veiviser";
      display: block;
      color: gray;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
  section {
    display: flex;
    > * {
      flex: 1;
      align-self: center;
    }
  }
  figure {
    max-width: 300px;
  }
  figure img {
    width: 100%;
  }
  ol {
    list-style: none;
    margin: 1.8em 0 3em 4em;
    padding: 0;
  }
  ol li {
    counter-increment: step;
    position: relative;
    margin-bottom: 1.6em;
    color: inherit;
    &::before {
      content: counter(step);
      color: white;
      background: black;
      border-radius: 50%;
      height: 1.8em;
      width: 1.8em;
      margin-left: -2.5em;
      position: absolute;
      vertical-align: middle;
      display: inline-block;
      text-align: center;
      line-height: 1.8;
      font-weight: bold;
    }
  }
  header.temp {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    background: #072938;
    color: white;
    font-size: 12px;
  }
  @media screen and (max-width: 700px) {
    font-size: 16px;
    figure {
      float: none;
    }
    section {
      display: block;
    }
    ol {
      margin-left: 2.5em;
    }
  }
  @media screen and (max-width: 900px) {
    button {
      min-width: 40% !important;
      text-align: center !important;
    }
  }
  @media screen and (max-width: 400px) {
    button {
      width: 100% !important;
    }
  }
`;

export const H2 = styled.h1`background-color: pink;`;
