export const PopularFilmsAPI = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=1`);

export const MorePopularFilmsAPI = (nextPage) => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=${nextPage}`);

export const FilmInfoAPI = (currentfilm) => fetch(`https://api.themoviedb.org/3/movie/${currentfilm}?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);

export const FilmTrailerAPI = (filmTrailer) => fetch(`https://api.themoviedb.org/3/movie/${filmTrailer}/videos?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);



export const TopFilmsAPI = () => fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=1`);

export const MoreTopFilmsAPI = (nextPage) => fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=${nextPage}`);



export const GenersAPI = () => fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);

export const listGenerAPI = (currentGener) => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGener}`);

export const MoreListGenerAPI = (currentGener, page) => fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${currentGener}`);


export const SearchMovieAPI = (serachValue) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&query=${serachValue}&page=1`);

export const MoreSearchMovieAPI = (serachValue, page) => fetch(`https://api.themoviedb.org/3/search/movie?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&query=${serachValue}&page=${page}`);