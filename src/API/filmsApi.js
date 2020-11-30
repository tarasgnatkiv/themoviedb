export const PopularFilmsAPI = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=1`);

export const MorePopularFilmsAPI = (nextPage) => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=${nextPage}`);

export const FilmInfoAPI = (currentfilm) => fetch(`https://api.themoviedb.org/3/movie/${currentfilm}?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);

export const FilmTrailerAPI = (filmTrailer) => fetch(`https://api.themoviedb.org/3/movie/${filmTrailer}/videos?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);



export const TopFilmsAPI = () => fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=1`);

export const MoreTopFilmsAPI = (nextPage) => fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=${nextPage}`);


export const GenersAPI = () => fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US`);