export const PopularFilmsAPI = () => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=1`);

export const MorePopularFilmsAPI = (nextPage) => fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cabba1f9c22aca913e203932932a73f3&language=en-US&page=${nextPage}`);