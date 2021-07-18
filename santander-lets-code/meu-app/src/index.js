import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App2 title="Título">
      texto texto texto
    </App2>

    <App2 title="Título 2!">
      texto texto texto !!!!!!!!!
    </App2>

    <App3 title="Título 2!">
      texto texto texto !!!!!!!!!
    </App3>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
