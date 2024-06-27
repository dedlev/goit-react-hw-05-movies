import axios from 'axios';

const API_KEY = '3646fa4826ffb51a1129efde8ab530b7'
const moviesApi = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });

// export const getMovies = async (query='', timeWindow='') => {
//   const { data } = await moviesApi.get(`${query}/movie/${timeWindow}`, {
//     params: {
//         api_key: API_KEY,  
//     },
//   });
//   return data;
// };

export const getMovies = async () => {
  const { data } = await moviesApi.get(`trending/movie/day`, {
    params: {
        api_key: API_KEY,  
    },
  });
  return data;
};


export const getMovieDetails = async (movieId) => {
  const { data } = await moviesApi.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY, 
      append_to_response: 'images',
    },
  });
  return data;
};

export const getCast = async (movieId, cast) => {
  const { data } = await moviesApi.get(`/movie/${movieId}/${cast}`, {
    params: {
      api_key: API_KEY, 
    },
  });
  return data;
};

export const getReviews = async (movieId, reviews) => {
const {data} = await moviesApi.get(`/movie/${movieId}/${reviews}`, {
  params: {
    api_key: API_KEY, 
  },
});
return data;
};

export const getSearchQuery = async (query) => {
  const {data} = await moviesApi.get(`/search/movie`, {
    params: {
      query,
      api_key: API_KEY,
    }
  })
  return data;
}

