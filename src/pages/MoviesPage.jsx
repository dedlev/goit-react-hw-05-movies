
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { getSearchQuery } from "services/movies.services";
import { STATUS } from "../constants/status.constants";
import Notiflix from 'notiflix';
import { Loader } from "ui/Loader";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (query === '') {
            setMovies([]);
            setStatus(STATUS.IDLE);
            return;
        }

        const fetchData = async () => {
            setStatus(STATUS.LOADING);
            try {
                const data = await getSearchQuery(query);
                if (data.results.length === 0) {
                    Notiflix.Notify.failure(`Query with name '${query}' not faund`);
                }
                
                setMovies(data.results);
                setStatus(STATUS.SUCCESS);
                localStorage.setItem('location', `/movies?query=${query}`);
                navigate(`?query=${query.trim()}`, { replace: true });
            } catch (error) {
                setStatus(STATUS.ERROR);
                console.log(error);
            }
        };

        fetchData();
    }, [query, navigate]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const savedQuery = searchParams.get('query') || '';

        if (savedQuery) {
            setQuery(savedQuery);
        }
    }, [location.search]);

    const handleSubmit = newQuery => {
        setQuery(newQuery.trim());
    };

    return (
        <main>
            <SearchBar onSubmit={handleSubmit} />
            {status === STATUS.LOADING && <Loader />}
            {status === STATUS.ERROR && <p>Error loading data</p>}
            {status === STATUS.SUCCESS && (
                <ul>
                    {movies && movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}?query=${query}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
            <Outlet />
        </main>
    );
};

export default MoviesPage;
