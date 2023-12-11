import React from 'react';
import './App.css';
import { MuiMode } from './components/mui/mui';
import { AppProviders } from './Providers/AppProviders';
import CounterTwo from './components/counter-two/CounterTwo';
import { Users } from './components/users/user';

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
        <CounterTwo count={0} />
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
