
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams, } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { getMovieDetails } from "services/movies.services";
import { List, Wrapper } from "./MovieDetailsstyled";
import { STATUS } from "../constants/status.constants";
import { Button } from "./MovieDetailsstyled";

const MovieDetails = () => {
    const [poster_path, setPoster_path] = useState('');
    const [title, setTitle] = useState('');
    const [release_date, setRelease_date] = useState('');
    const [vote_average, setVote_average] = useState('');
    const [overview, setOverview] = useState('');
    const [genres, setGenres] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);

    const { movieId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const goBackRef = useRef(location.state?.from ?? '/');
    
    useEffect(() => {
        const fetchData = async () => {
            setStatus(STATUS.LOADING);
            try {
                const data = await getMovieDetails(movieId);
                setPoster_path(data.poster_path);
                setTitle(data.title);
                setRelease_date(data.release_date);
                setVote_average(data.vote_average);
                setOverview(data.overview);
                setGenres(data.genres);
                setStatus(STATUS.SUCCESS);
            } catch (error) {
                setStatus(STATUS.ERROR);
                console.log(error);
            }
        };

        fetchData(movieId);
    }, [movieId]);

    const handleGoBack = () => {
        navigate(goBackRef.current);
    };

    return (
        <main>
            <Button onClick={handleGoBack}>
                <GoArrowLeft />
                Go back
            </Button>
            {status === STATUS.LOADING && <p>Loading...</p>}
            {status === STATUS.ERROR && <p>Error loading data</p>}
            {status === STATUS.SUCCESS && (
                <Wrapper>
                    <div>
                        {poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                                alt={title}
                                style={{ maxWidth: '200px', height: 'auto' }}
                            />
                        )}
                    </div>
                    <div>
                        <h2>{title} ({release_date ? release_date.substring(0, 4) : 'N/A'})</h2>
                        <p>User score: {Math.round(vote_average * 10)}%</p>
                        <p><b>Overview</b></p>
                        <p>{overview}</p>
                        <p><b>Genres</b></p>
                        <List>
                            {genres.map(genre => (
                                <li key={genre.id}>{genre.name}</li>
                            ))}
                        </List>
                    </div>
                </Wrapper>
            )}
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <hr />
            <Outlet />
        </main>
    );
};

export default MovieDetails;

