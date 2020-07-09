import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Calendar from './Components/Calendar'

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Calendar} />
    </BrowserRouter>
  );
}

export default App;
