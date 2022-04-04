import React from 'react';
import './Review.css'
const Review = (props) => {
    const { id, name, ratings, review } = props.review;
    return (
        <div className='card'>

            <div className='container'>

                <h3>Name:{name}</h3>
                <p id='id'>Id:{id}</p>
                <p><span id='ratings'>Ratings</span>: {ratings}</p>
                <p><span id='review'>Review</span>: {review}</p>
            </div>


        </div>
    );
};

export default Review;