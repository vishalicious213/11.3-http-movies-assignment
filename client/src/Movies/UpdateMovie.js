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

    console.log(params.id);

    return (
        <section>
            <div>{`-Update Movie ${params.id}-`}</div>
            <div>{movie.title}</div>
            <div>{movie.director}</div>
            <div>{movie.metascore}</div>

            {movie.stars.map(star => (
                <div key={star} className="movie-star">{star}</div>
            ))}
        </section>
    )
}

export default UpdateMovie;