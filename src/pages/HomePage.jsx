
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import { getMovies } from 'services/movies.services';
import { STATUS } from "../constants/status.constants";

import { Loader } from 'ui/Loader';


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);


 useEffect(() => {
     localStorage.setItem('location', '/');
     setStatus(STATUS.IDLE);
    }, []);


    useEffect(() => {
        async function fetchData() {
            setStatus(STATUS.LOADING);
            try {
                const data = await getMovies();
                setMovies(data.results);
                setStatus(STATUS.SUCCESS);
            } catch (error) {
                setStatus(STATUS.ERROR);
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <main>
            {status === STATUS.LOADING && <Loader />}
            {status === STATUS.ERROR && <p>Error loading data</p>}
            {status === STATUS.SUCCESS && movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </main>
    );
};

export default HomePage;

