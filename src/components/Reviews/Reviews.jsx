import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/movies.services';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const {movieId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try{
        const data =  await getReviews(movieId, 'reviews');
        setReviews(data.results);

            } catch (error) {
                console.log(error)
            } 
        }

        fetchData(movieId, 'reviews')
     
    }, [movieId])

    return (
      <ul>
            {reviews.map(review => (
            <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
            </li>
            ))}
        </ul>
  
    )
}

export default Reviews;