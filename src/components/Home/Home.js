
import './Home.css'
import image from '../Home/image/book16.jpg'
import { useEffect, useState } from 'react';
import Review from '../Review/Review';
import useReview from '../../Hooks/UseReview';




const Home = () => {


    const [reviews, setReviews] = useReview([]);
    return (
        <div className='home-container'>

            <div className='about-book-container'>
                <h1>BOOKS CAN BE SPECIAL FRIEND OF YOURS</h1>
                <p>Books can be one of the  valuable products whatever you have. For knowing yourself, you should read books . If want to motivate yourself , you can read such type of books which will give you extra fuel. SO try to read books for knowing thyself. Here We have provided many books for you , you can check out here for getting best one of yours. After getting your best one, dont't forget to place your valuable review. We are always expect customer's review that give both satisfaction and help us to figure out our fault and also try to solve it .  </p>
            </div>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div>
                <h1 id='customer-number'>Customer Review: {reviews.length}</h1>
                <div className='all-card-container'>
                    {
                        reviews.slice(0, 3).map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>
            </div>

        </div>


    );
};

export default Home;