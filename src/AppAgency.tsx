import { Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LadingPage/LandingPage'
import { RegisterForm } from './components/Form/RegisterForm/RegisterForm';
import { DestinationPage } from './pages/DestinationPages/DestinationPages';
import './App.css'
import { AdminApp } from './components/admin/AdminApp';
import { LoginForm } from './components/Form/LoginForm/LoginForm';
import { DashboardAdmin } from './components/admin/Dashboard';
export const AppAgency = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/admin/*" element={<AdminApp />} />
        <Route path="/Dashboard/*" element={<DashboardAdmin/>}/>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/destinations' element={<DestinationPage />} />
      </Routes>
    </>
  );
};


