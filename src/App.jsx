import React, { useState, useEffect } from 'react';
import Header from './Header';
import Pokedex from './Pokedex';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'english'); // Get language from local storage or default to 'english'

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}&language=${language}`);
        const data = await response.json();
        setPokemonData(data.data);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [currentPage, language]); 

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage); // Store language preference in local storage
  };

  return (
    <div className="app">
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Pokedex pokemonData={pokemonData} language={language} onLanguageChange={handleLanguageChange} />
          <div className="pagination-buttons">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Back</button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
              <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
