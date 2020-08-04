import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/62628971?s=460&u=036a1db7ec264e09b40c15e441a2d684bc6fcc60&v=4" alt="Gideon Fernandes"/>
        <div>
          <strong>Gideon Fernandes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium tempora quis autem culpa nihil laborum ratione.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Botão de whatsapp."/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
