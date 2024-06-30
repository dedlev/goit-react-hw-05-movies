import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/movies.services';
import { STATUS } from 'constants/status.constants';
import { Loader } from 'ui/Loader';


const Cast = () => {
    const [casts, setCast] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);

    const {movieId} = useParams();

    useEffect(() => {
        async function fetchData() {
            setStatus(STATUS.LOADING);
            try{
        const data =  await getCast(movieId, 'credits');
                setCast(data.cast);
                setStatus(STATUS.SUCCESS);

            } catch (error) {
                setStatus(STATUS.ERROR);
                console.log(error)
            } 
        }

        fetchData(movieId, 'credits')
     
    }, [movieId])

    return (
        <main>
            {status === STATUS.LOADING && <Loader />}
            {status === STATUS.ERROR && <p>Error loading data</p>}
            {status === STATUS.SUCCESS && (
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
            )}
        </main>
       
  
    )
}

export default Cast;