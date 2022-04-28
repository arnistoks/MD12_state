import React from 'react';
import './App.scss';
import Count from './components/Count/Count';
import Count10 from './components/Count/Count10';
import PlusPica from './components/Pica/Pica';
import CubeColor from './components/CubeColor/CubeColor';
import PushText from './components/PushText/PushText';
import InputText from './components/InputText/InputText';
import Numbers from './components/Numbers/Numbers';
import Cards from './components/Cards/Cards';

const App = () => (
  <section className="section">
    <div className="container">
      <Count />
      <Count10 />
      <PlusPica />
    </div>
    <div className="container container__wrap">
      <CubeColor />
      <PushText />
    </div>
    <div className="container">
      <InputText />
    </div>
    <div className="container">
      <Numbers />
    </div>
    <div className="container">
      <Cards />
    </div>
  </section>
);

export default App;
