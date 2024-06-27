// import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "services/movies.services";
import {  List, Wrapper } from "./MovieDetailsstyled";

const MovieDetails = () => {
    const [poster_path, setPoster_path] = useState('')
    const [title, setTitle] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [vote_average, setVote_average] = useState('')
    const [overview, setOverview] = useState('')
    const [genres, setGenres] = useState([])
 
    const {movieId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try{
                const data = await getMovieDetails(movieId);
                setPoster_path(data.poster_path)
                setTitle(data.title)
                setRelease_date(data.release_date)
                setVote_average(data.vote_average)
                setOverview(data.overview)
                setGenres(data.genres)            

            } catch (error) {
                console.log(error)
            } 
        }
        fetchData(movieId)
     
    }, [movieId])

  const handleCoBack = () => {
 navigate(-1);
 }

    return (
       <>
            <button onClick={handleCoBack}>Go back</button>
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
                    <h2> {title} ({release_date? release_date.substring(0, 4) : 'N/A'})</h2>
                    <p>User score:  {Math.round(vote_average*10)} %</p>
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
            <hr />
            <p>Additional information</p>
            <ul>
                <li>
                <Link to="credits">Cast</Link>
                </li>
                <li>
                <Link to="reviews">Reviews</Link>
                </li>            
            </ul>
            <hr />
            <Outlet />
        </>        
    )
} 

export default MovieDetails;

