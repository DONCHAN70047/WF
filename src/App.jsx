// src/App.jsx
import React, { useState } from 'react';
import File1 from './section/File1';
import File2 from './section/File2';
import File3 from './section/File3';
import MomentSlider from './section/MomentSlider';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 4)); // limit to page 4
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // minimum is page 1
  };

  return (
    <div className="App">
      {currentPage === 1 && <File1 onNextPage={handleNextPage} />}
      {currentPage === 2 && (
        <File2 onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
      )}
      {currentPage === 3 && (
        <File3 onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />
      )}
      {currentPage === 4 && <MomentSlider />}
    </div>
  );
}

export default App;
