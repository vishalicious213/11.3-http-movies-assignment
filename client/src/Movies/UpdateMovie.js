import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {
    const [movie, setMovie] = useState(null);
    const params = useParams();

    const fetchMovie = (id) => {
        axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err.response));
    };

    useEffect(() => {
        fetchMovie(params.id);
    }, [params.id]);
    
    if (!movie) {
        return <div>Loading movie information...</div>;
    }

    const handleChange = event => {
        console.log(event.target.value);
    }

    console.log(params.id);

    return (
        <form className='updateForm'>
            {/* <div>{`-Update Movie ${params.id}-`}</div> */}
            <div>
                Title:
                <input type='text' name='title' placeholder={movie.title} value='' onChange={handleChange}/>
            </div>

            <div>
                Director:
                <input type='text' name='director' placeholder={movie.director} value='' onChange={handleChange}/>
            </div>

            <div>
                Metascore:
                <input type='text' name='metascore' placeholder={movie.metascore} value='' onChange={handleChange}/>
            </div>

            <div>Stars:</div>
            {movie.stars.map(star => (
                <div key={star} className="movie-star">
                    <input type='text' name='star' placeholder={star} value='' onChange={handleChange}/>
                </div>
            ))}
        </form>
    )
}

export default UpdateMovie;