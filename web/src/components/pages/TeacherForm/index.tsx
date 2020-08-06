import React from 'react';

import './styles.css';
import PageHeader from '../../PageHeader';
import Input from '../../Input';
import warningIcon from '../../../assets/images/icons/warning.svg';
import Textarea from '../../Textarea';
import Select from '../../Select';

const TeacherForm = () => {
  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />     
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Portugûes', label: 'Portugûes' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Química', label: 'Química' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Física', label: 'Física' },
              { value: 'Sociologia', label: 'Sociologia' },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />       
        </fieldset>

        <fieldset>
          <div className="legend-block">
            <legend>Horários disponíveis<button>+ Novo Horário</button></legend>
          </div>

          <div className="schedule-item">
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Portugûes', label: 'Portugûes' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Química', label: 'Química' },
                { value: 'História', label: 'História' },
                { value: 'Inglês', label: 'Inglês' },
                { value: 'Física', label: 'Física' },
                { value: 'Sociologia', label: 'Sociologia' },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="to" label="Até" type="time" />
          </div>        
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Icone de aviso importante." />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  );
};

export default TeacherForm;
