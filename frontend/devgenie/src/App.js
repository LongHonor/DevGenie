import React from 'react';

import './App.css';
import Router from './Router';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className='App'>
      <AnimatePresence>
        <Router />
      </AnimatePresence>
    </div>
  );
}

export default App;
