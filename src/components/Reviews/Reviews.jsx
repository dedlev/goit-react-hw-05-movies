import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies.services';
import { STATUS } from 'constants/status.constants';
import { Loader } from 'ui/Loader';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);

    const {movieId} = useParams();

    useEffect(() => {
        async function fetchData() {
            setStatus(STATUS.LOADING);

            try{
        const data =  await getReviews(movieId, 'reviews');
                setReviews(data.results);
                setStatus(STATUS.SUCCESS);
            } catch (error) {
                setStatus(STATUS.ERROR);
                console.log(error);
            } 
        }

        fetchData(movieId, 'reviews')
     
    }, [movieId])

    return (
        <main>
            {status === STATUS.LOADING && <Loader />}
            {status === STATUS.ERROR && <p>Error loading data</p>}
            {status === STATUS.SUCCESS && (
                <>
                    {reviews.length === 0 ? (
                        <p>No reviews found</p>
                    ) : (
                        <ul>
                            {reviews.map(review => (
                                <li key={review.id}>
                                    <p>Author: {review.author}</p>
                                    <p>{review.content}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </>    
            )}
        </main>
      
  
    )
}

export default Reviews;