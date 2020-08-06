import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './components/pages/Landing';
import TeacherList from './components/pages/TeacherList';
import TeacherForm from './components/pages/TeacherForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  )
};

export default Routes;
