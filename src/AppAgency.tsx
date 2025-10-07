import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/LadingPage/LandingPage'

export const AppAgency = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </>
  );
};


