import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies.services';


const Cast = () => {
    const [casts, setCast] = useState([])

    const {movieId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try{
        const data =  await getCast(movieId, 'credits');
        setCast(data.cast);

            } catch (error) {
                console.log(error)
            } 
        }

        fetchData(movieId, 'credits')
     
    }, [movieId])

    return (
      <ul>
            {casts.map(cast => (
            <li key={cast.id}>
                 {cast.profile_path && (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} 
                        alt={cast.name} 
                        style={{ maxWidth: '100px', height: 'auto' }} 
                   />
                 )}
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
            </li>
            ))}
        </ul>
  
    )
}

export default Cast;