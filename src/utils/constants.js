export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/1abd43b5-b8a4-47ae-9e04-4ea437fef33e/US-en-20240107-trifectadaily-perspective_alpha_website_large.jpg";

export const API_OPTIONS = {
    method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY,
        },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;