const APIKEY = "ae930f685d40e272391440a9ebaad7d2";
// const APIKEY = "ae930f685d40e272391440a9ebaad7d2";

export default {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,

  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28&language=en-US`,

  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35&language=en-US`,

  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27&language=en-US`,

  fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749&language=en-US`,

  fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=9648&language=en-US`,

  fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=878&language=en-US`,

  fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=37&language=en-US`,

  fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=16&language=en-US`,
};
