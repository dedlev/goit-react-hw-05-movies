

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getMovies } from 'services/movies.services';

const HomePage = () => {
    const [movies, setMovies] = useState('');

    useEffect(() => {
        async function fetchData() {
            try{
                const data = await getMovies();
                setMovies(data.results)
                console.log('HomePage', HomePage)
                         
            } catch (error) {
                console.log(error)
            } 
        }
        fetchData()
     
    }, [])

return (
    <main>
        {movies && movies.map(movie => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link> 
            </li>
        ))}

    </main>
  )
}

export default HomePage