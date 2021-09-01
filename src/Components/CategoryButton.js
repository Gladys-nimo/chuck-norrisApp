import React from 'react'

const CategoryButton = ({getJoke}) => {
    return (
        <button onClick={getJoke} className="btn btn-info btn-lg btn-block font-weight-black">Get Joke</button>
    );
}

export default CategoryButton
