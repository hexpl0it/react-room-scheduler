import React from 'react';
import { render } from 'react-dom';
import RoomScheduler from './RoomScheduler';

const RoomSchedulerDemo = () => (
  <div>
    <h1>Room Scheduler Tester</h1>
    <RoomScheduler title="Hello" />
  </div>
);

render(<RoomSchedulerDemo />, document.getElementById('root'));
