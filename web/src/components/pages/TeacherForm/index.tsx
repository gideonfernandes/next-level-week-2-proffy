import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import PageHeader from '../../PageHeader';
import Input from '../../Input';
import warningIcon from '../../../assets/images/icons/warning.svg';
import Textarea from '../../Textarea';
import Select from '../../Select';
import api from '../../../services/api';

const TeacherForm = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  };

  const handleCreateClass = (event: FormEvent) => {
    event.preventDefault();

    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    });
  };

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      };

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  };

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Input 
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={event => setAvatar(event.target.value)}
            />
            <Input 
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={event => setWhatsapp(event.target.value)}
            />
            <Textarea 
              name="bio"
              label="Biografia"
              value={bio}
              onChange={event => setBio(event.target.value)}
            />     
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={event => setSubject(event.target.value)}
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
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={event => setCost(event.target.value)}
            />       
          </fieldset>

          <fieldset>
            <div className="legend-block">
              <legend>Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
              </legend>
            </div>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={event => {
                      setScheduleItemValue(index, 'week_day', event.target.value)
                    }}
                    options={[
                      { value: '0', label: 'Domingo' },
                      { value: '1', label: 'Segunda-feira' },
                      { value: '2', label: 'Terça-feira' },
                      { value: '3', label: 'Quarta-feira' },
                      { value: '4', label: 'Quinta-feira' },
                      { value: '5', label: 'Sexta-feira' },
                      { value: '6', label: 'Sábado' },
                    ]}
                  />
                  <Input 
                    name="from"
                    label="Das"
                    value={scheduleItem.from}
                    type="time"
                    onChange={event => {
                      setScheduleItemValue(index, 'from', event.target.value)
                    }}
                  />
                  <Input 
                    name="to"
                    label="Até"
                    value={scheduleItem.to}
                    type="time"
                    onChange={event => {
                      setScheduleItemValue(index, 'to', event.target.value)
                    }}
                  />
                </div>
              );
            })}     
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Icone de aviso importante." />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
