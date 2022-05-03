import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import StyledApp from './components/App';

// Assets
import './assets/styles/reset.css';
import './assets/styles/main.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);

root.render(<StyledApp />);
