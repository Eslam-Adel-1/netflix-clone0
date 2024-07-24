const Api_Key = process.env.REACT_APP_API_KEY;
const random_number = Math.floor(Math.random() * 500);

const requests = [
  {
    name: "Upcoming",
    url: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${Api_Key}`,
  },
  {
    name: "Trending_movies",
    url: `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=${Api_Key}`,
  },
  {
    name: "Trending_tvs",
    url: `https://api.themoviedb.org/3/trending/tv/day?language=en-US&api_key=${Api_Key}`,
  },
  {
    name: "Movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${Api_Key}&page=${random_number}`,
  },
  {
    name: "Tv Shows",
    url: `
  https://api.themoviedb.org/3/discover/tv?api_key=${Api_Key}&page=${random_number}`,
  },
  {
    name: "Recommended",
    url: `https://api.themoviedb.org/3/movie/346698/recommendations?language=en-US&page=1&api_key=${Api_Key}`,
  },
  {
    name: "Top_rated",
    url: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${random_number}&api_key=${Api_Key}`,
  },
  // configuration: `https://api.themoviedb.org/3/configuration?api_key=${Api_Key}`,
  // countries: `https://api.themoviedb.org/3/configuration/countries?api_key=${Api_Key}&language=en-US`,
  // geners: `https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_Key}&language=en`,
  // details: `https://api.themoviedb.org/3/keyword/12?api_key=${Api_Key}`,
  // popular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${random_number}&api_key=${Api_Key}`,
];

export default requests;
