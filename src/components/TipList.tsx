import React from 'react';
import useTipStore from '../store/tipStore';

const TipList = () => {
  const { tips, deleteTip, updateTip, searchQuery } = useTipStore();
  const filteredTips = tips.filter(tip => 
    tip.author.includes(searchQuery) || tip.description.includes(searchQuery)
  );

  const handleStatusChange = (id: string) => {
    const tip = tips.find(t => t.id === id);
    if (tip) {
      const newStatus = tip.status === 'leído' ? 'no leído' : 'leído';
      updateTip(id, { status: newStatus });
    }
  };

  return (
    <ul>
      {filteredTips.map((tip) => (
        <li key={tip.id}>
          <h3>{tip.description}</h3>
          <p>Autor: {tip.author}</p>
          <p>Estado: {tip.status}</p>
          <p>Fecha: {tip.creationDate}</p>
          <button onClick={() => handleStatusChange(tip.id)}>
            Marcar como {tip.status === 'leído' ? 'no leído' : 'leído'}
          </button>
          <button onClick={() => deleteTip(tip.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default TipList;
