import { addTrailerVideo } from '../utils/moviesSlice';
import {API_OPTIONS} from "../utils/constants"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    //fetch trailer by making API call and updating redux store with trailer data
    const dispatch = useDispatch();

    const getMovieVideos = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', API_OPTIONS);

        const json = await data.json();

        const filterData = json.results.filter(video => video.type === "Trailer"); 
        const trailer = filterData.length ? filterData[0]: json.results[0];
        // console.log(trailer);

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;