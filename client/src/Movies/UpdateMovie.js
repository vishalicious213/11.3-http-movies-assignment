import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {
    const params = useParams();

    console.log(params.id);

    return (
        <div>{`-Update Movie ${params.id}-`}</div>
    )
}

export default UpdateMovie;