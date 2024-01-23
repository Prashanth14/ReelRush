import React, { useRef } from 'react';
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import {addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang); 
    const searchText = useRef(null);

    const searchMovieTMDB = async(movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async() =>{
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value + ". only give me names of five movies, comma separated like the example result given ahead. example result: Gadar, Tiger3, bahubali, RRR, Pushpa";

        //make an API call to openai API and get movie results
        const  gptResults =  await openai.chat.completions.create({
            messages: [{ role: 'user', content:  gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        //take care if (gptResults.choices) are null;
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        //for each movie search it in TMDB api find its results
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);

        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }

  return (
    <div className='pt-[55%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={e => e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}></input>
            <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
};

export default GptSearchBar