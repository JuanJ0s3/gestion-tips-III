import React, { useState } from 'react';
import useTipStore from '../store/tipStore';

const TipSearch = () => {
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useTipStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(query); // Actualiza el query en el store
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Buscar por autor o descripción"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default TipSearch;
