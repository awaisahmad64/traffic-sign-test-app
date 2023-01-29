import { useState } from 'react';

function App() {
  const centerStyle = {
    textAlign: 'center',
    display: 'block',
    marginTop: '1rem',
  };

  return (
    <div className="App">
      <a style={centerStyle} href="#" target="_blank">
        <img
          src="https://play-lh.googleusercontent.com/80S21fv2HXzgRVzL8HrWXlXqAz9MkDmJBAB9BtvkB_6to6KdPLPsMbLBCNb2B1XI9Cg=s48-rw"
          className="logo"
          alt="Vite logo"
        />
      </a>
    </div>
  );
}

export default App;
