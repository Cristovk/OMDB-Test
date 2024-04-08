import React, { createContext, useState, useEffect, useContext } from 'react';
import { getMovieById , searchMovies} from '../utils/Utils'; // Assuming your Utils file is in './src/utils'

export const MovieContext = createContext();

let idMovie = 'tt0111161'
let idSearch = 'godfather'
export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSerchData] = useState([])

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const results = await searchMovies(idSearch); // Cambia el ID aquí si es necesario
        setSerchData(results);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
    fetchMovie()

  }, []); 

  console.log('PostFetch', searchData.Search)
  return (
    <MovieContext.Provider value={{ movieData, setMovieData, searchData, setSerchData }}>
      {children}
    </MovieContext.Provider>
  );
};