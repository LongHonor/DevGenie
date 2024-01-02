import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuizListPage, QuizPage, ReminderPage, HomePage } from './Pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quizlist' element={<QuizListPage />} />
        <Route path='/reminder' element={<ReminderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
