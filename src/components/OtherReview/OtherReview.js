import React from 'react';
import './OtherReview.css'
const OtherReview = (props) => {
    const { name, id, picture, ratings, review } = props.review;
    return (
        <div className='card'>
            <div>
                <img id='img' src={picture} alt="" />
            </div>
            <div className='container'>

                <h3>Name:{name}</h3>
                <p id='id'>Id:{id}</p>
                <p><span id='ratings'>Ratings</span>: {ratings}</p>
                <p><span id='review'>Review</span>: {review}</p>
            </div>

        </div>
    );
};

export default OtherReview;