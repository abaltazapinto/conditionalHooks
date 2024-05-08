import React from 'react';

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

const App = () => {
  const [list, setList] = React.useState([]);

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
  

  return (
    <div>
      <List 
        list={list}

      />
      
    </div>
  );
};

const List = ({ list, selectedId, setSelectedId }) => {
  return (
    <ul>
      {list.map((item) => (
        <Item 
          key={item.id} 
          item={item}
          selectedId={selectedId}
          onSelectedId={selectedId}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, selectedId, onSelectedId }) => {
  const handleSelect = () => {
    onSelectedId(item.id);
  };

  const selectedStyle = {
    fontWeight: selectedId === item.id ? 'bold' : 'normal',
  };

  return (
    <li key={item.id} style={selectedStyle}>
      <span>{item.title}</span>

      <button type="button" onClick={handleSelect}>
        Select
      </button>
    </li>
  );
};

export default App;
