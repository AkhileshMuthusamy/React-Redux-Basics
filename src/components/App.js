import React from 'react';
import './App.css';
import Stories from './Stories';

/**
 * @param {stories} param0 Reads stories properties from props
 */
const App = ({ stories, onArchive }) => {
  console.log(stories);
  return (
    <div className="app">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
};

export default App;
