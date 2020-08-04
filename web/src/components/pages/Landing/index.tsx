import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImage from '../../../assets/images/logo.svg';
import landingImage from '../../../assets/images/landing.svg';
import studyIcon from '../../../assets/images/icons/study.svg';
import giveClassesIcon from '../../../assets/images/icons/give-classes.svg';

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImage} alt="Proffy Logo"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={landingImage} 
          alt="Plataforma de estudos online."
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar agora!"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Ensinar agora!"/>
            Dar aulas
          </Link>
        </div>

        <div className="total-connections">
          Total de 200 conexões já realizadas!
        </div>
      </div>
    </div>
  );
};

export default Landing;
