import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PetList from './components/PetList';
import PetForm from './components/PetForm';
import PetPage from './components/PetPage';
import PetEdit from './components/PetEdit';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/pets/new" element={<PetForm />} />
          <Route path="/pets/:id" element={<PetPage />} />
          <Route path="/pets/:id/edit" element={<PetEdit />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;