import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LadingPage/LandingPage'
import { RegisterForm } from './components/Form/RegisterForm/RegisterForm';
import { DestinationPage } from './pages/DestinationPages/DestinationPages';
import './App.css'
export const AppAgency = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/destinations' element={<DestinationPage />} />
      </Routes>
    </>
  );  
};


