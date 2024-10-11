import React, { useState } from 'react';
import useTipStore from '../store/tipStore';

const TipForm = () => {
  const { addTip } = useTipStore();
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<'leído' | 'no leído'>('no leído');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTip = {
      id: Date.now().toString(),
      author,
      description,
      status,
      creationDate: new Date().toLocaleDateString(),
    };

    if(newTip.author == "" ){
      alert("Eror, el campo de autor està vacio");
    }
    else if(newTip.description == ""){
      alert("Eror, el campo de descripciòn està vacio");
    }
    else{
      addTip(newTip);
    }
        
      
  
    

    // Limpiar el formulario
    setAuthor('');
    setDescription('');
    setStatus('no leído');
  };

  return (
    <form >
      <div>
        <label>Autor:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        {/* <label>Estado:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value as 'leído' | 'no leído')}>
          <option value="no leído">No leído</option>
          <option value="leído">Leído</option>
        </select> */}
      </div>
      <button type="submit" onClick={handleSubmit} >Agregar Tip</button>
    </form>
  );
};

export default TipForm;
