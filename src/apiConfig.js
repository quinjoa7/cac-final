/*
    Doc: https://developers.themoviedb.org/3/getting-started/introduction
*/

export const API = {
    baseURL: "https://api.themoviedb.org/3",
    entity: {
        topRatedMovies: "/movie/top_rated",
        popularMovies: "/movie/popular",
        topRatedTv: "/tv/top_rated",
        popularTv: "/tv/popular"
    },
    key: "?api_key=f6ce9344b1a41e1fc2172e24d48f0e90",
    language: {
        en: "&language=en-US",
        es: "&language=es-ES",
    },
    pagination: "&page=",   //shows 20 titles per page.
    imageURL: "https://image.tmdb.org/t/p",
    quality: {
        posterSmall: "/w200",
        posterMedium: "/w300",
        posterLarge: "/w500",
        backdropSmall: "/w300",
        backdropMedium: "/w780",
        backdropLarge: "/w1280",
    }
}

export const createURL = {
    //english and page 1 are default values if none is specified
    api: (entity, lang = 'en', page = 1) => {
        const url = `${API.baseURL}${entity}${API.key}${API.language[lang]}${API.pagination}${page}`;
        return url;
    }
    /*  //to create an url without the language, use spred (...) and destructuring you can skip parameters with a ,
        createURL.api(...[,,2])
    */
}

export const createImgURL = {
    api: (quality, path) => {
        const url = `${API.imageURL}${quality}${path}`
        return url;
    }
}
