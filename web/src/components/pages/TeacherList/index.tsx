import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../PageHeader';
import TeacherItem, { Teacher } from '../../TeacherItem';
import Input from '../../Input';
import Select from '../../Select';
import api from '../../../services/api';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const searchTeachers = async (event: FormEvent) => {
    event.preventDefault();

    if (subject !== '' && week_day !== '' && time !== '') {
      const response = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time
        }
      });
  
      setTeachers(response.data);
    } else {
      alert('Preencha todos os campos!')
    };
  };

  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={event => setWeekDay(event.target.value)}
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
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeacherList;
