import React from 'react';
import ReactDOM from 'react-dom';

// Importing components
import TodoContainer from './functionBased/components/TodoContainer';

// Importing CSS
import "./functionBased/App.css";


ReactDOM.render(
   <React.StrictMode>
     <TodoContainer />
   </React.StrictMode>,
   document.getElementById('root')
  )