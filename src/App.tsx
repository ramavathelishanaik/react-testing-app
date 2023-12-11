import React from 'react';
import './App.css';
import { MuiMode } from './components/mui/mui';
import { AppProviders } from './Providers/AppProviders';
import CounterHook from './components/counterView/counter';
function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
        <CounterHook />
      </div>
    </AppProviders>
  );
}

export default App;
