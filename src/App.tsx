import React from 'react';
import './App.css';
import { MuiMode } from './components/mui/mui';
import { AppProviders } from './Providers/AppProviders';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
