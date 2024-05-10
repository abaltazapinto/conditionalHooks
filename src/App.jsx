import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

// Componentes
function Inspiration() {
  const [list, setList] = useState([]);

  const handleFetch = () => {
    setList(LIST);
  };

  if (!list.length) {
    return (
      <div>
        <button type="button" onClick={handleFetch}>
          Fetch
        </button>
      </div>
    );
  }

  // Adicione uma visualização para a lista carregada se necessário
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

function Welcome({ text }) {
  return <h1>{text}</h1>;
}

// Componente principal
function App() { 
  const greeting = 'Welcome to React';
  const [isShow, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <div>
      <button onClick={handleToggle} type="button">
        Toggle
      </button>

      {isShow ? <Welcome text={greeting} /> : null}
      <Inspiration />
    </div>
  );
}

export default App;
