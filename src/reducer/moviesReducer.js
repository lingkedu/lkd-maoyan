import { GET_MOVIES,GET_COMING_MOVIES } from '../actions/actiontype'
const initState = {
    movies: null,
}


const moviesReducer = (state = initState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case GET_MOVIES:
            newState.movies = action.payload;
            break;           
       case GET_COMING_MOVIES:
        //    console.log(4564654,action.payload)
            newState.movies.movieList.push( ...action.payload.coming );
            break;
        default:
            break;

    }

    return newState
}

export default moviesReducer