// import { useEffect, useState } from "react";
import useReview from "../../Hooks/UseReview";
import OtherReview from "../OtherReview/OtherReview";


const Reviews = () => {
    const [reviews] = useReview([]);
    return (
        <div>
            {
                reviews.map(review => <OtherReview review={review} key={review.id}></OtherReview>)
            }
        </div>
    );
};

export default Reviews;