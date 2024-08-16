import React from 'react';
import Carousel from './Carousel';

const items = [
  {
    title: 'Slide 1',
    image: 'https://via.placeholder.com/300x100',
    description: 'Description for Slide 1',
  },
  {
    title: 'Slide 2',
    image: 'https://via.placeholder.com/300x100',
    description: 'Description for Slide 2',
  },
  {
    title: 'Slide 3',
    image: 'https://via.placeholder.com/300x100',
    description: 'Description for Slide 3',
  },
];

function App() {
  return (
    <div className="App">
      <h1>My Carousel</h1>
      <Carousel items={items} />
    </div>
  );
}

export default App;
