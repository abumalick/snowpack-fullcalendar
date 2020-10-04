import React from 'react';
import './App.css';
// import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="App">
      TEST
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}

export default App;
