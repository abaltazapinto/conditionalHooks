import * as React from 'react';

const angular = () => {
  const [greeting, setGreeting] = React.useState('');
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  const handleChange = (event) => {
    setGreeting(event.target.value);
  };

  return (
    <div>
      <button onClick={handleToggle} type="button">
        Real G
      </button>
      <input type="text" value={greeting} onChange={handleChange} />
      {!isShow ? <Welcome text={greeting} /> : null}
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};

export default angular;
