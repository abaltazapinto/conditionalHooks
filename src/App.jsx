import React, { useState } from 'react';
import Angular from './secondeconponent'; // Use o nome do arquivo correto e o caminho se estiver em diretório diferente

import './App.css';

// Dados constantes
const LIST = [
  {
    id: '1',
    title: 'The Road to React',
  },
  {
    id: '2',
    title: 'The Road to GraphQL',
  },
];

function Inspiration() {
  const [list, setList] = useState([]);

  const handleFetch = () => {
    setList(LIST);
  };

  if (!list.length) {
    return (
      <div>
        <button type="button" onClick={handleFetch}>
          Learn more about fetching :D
        </button>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal
function App() {
  return (
    <div>
      <Angular /> 
      <Inspiration />
    </div>
  );
}

export default App;

