import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { getSearchQuery } from "services/movies.services";

const MoviesPage = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (query === '') {
            return;
        }

        async function fetchData() {
            try {
                const data = await getSearchQuery(query);
                setMovies(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData(query);

    }, [query]);

    const handleSubmit = newQuery => {
        setQuery(newQuery.trim());
         navigate(`?query=${newQuery.trim()}`);
    };

    return (
        <main>
            <SearchBar onSubmit={handleSubmit} />
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}?query=${query}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </main>
    );
};

export default MoviesPage;

