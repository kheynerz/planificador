//Component Routes
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Planificator from './components/planificator/planificator';
import Instructors from './components/instructors/instructors';
import AcademicOffer from './components/AcademicOffer/AcademicOffer';
import MainView from './components/MainView/MainView';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainView />} />
        <Route path="/plan" element={<Planificator />} />
        <Route path="/offer" element={<AcademicOffer />} />
        <Route path="/instruc" element={<Instructors />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router