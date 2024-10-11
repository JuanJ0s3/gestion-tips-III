import React from 'react';
import TipForm from './components/TipForm';
import TipList from './components/TipList';
import TipSearch from './components/TipSearch';
import './styles/style.css'





const App = () => {
  return (
    <>
      <h1>Gestión de Tips Tecnológicos </h1>
      <TipForm />
      <TipSearch />
      <TipList />
    </>
  );
};



export default App;
