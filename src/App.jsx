import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import DeletePlayer from './components/API/DeletePlayer';
import DeleteVerification from './components/DeleteVerification';
import DetailedAddition from './components/AdditionForms/DetailedAddition';
import MainAddition from './components/AdditionForms/MainAddition';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<AllPlayers />} />
      <Route path='/details/:id' element={<SinglePlayer />} />
      <Route path='/deleteVerification/:id' element={<DeleteVerification />} />
      <Route path='/delete/:id' element={<DeletePlayer />} />
      <Route path='/mainAddition' element={<MainAddition />} />
      <Route path='/detailedAddition/' element={<DetailedAddition />} />
    </Routes>
  );
}
