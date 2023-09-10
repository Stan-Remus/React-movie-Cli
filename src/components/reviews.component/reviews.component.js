import React from 'react';
import { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm.component/reviewForm.component';
import { useState } from 'react';


const Reviews = ({getMovieData, movie, reviews, setReviews, test}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    const [testFun, setTestFun] = useState([]);


    useEffect(() => {
        getMovieData(movieId);
        testFunction(movieId);
        console.log("test data:", test)
        console.log("pe bune unde?",reviews)
    }, [test])

    

    const testFunction = async (movieId) => {

        try{
            const response = await api.get(`/api/v1/movies/${movieId}`);
            console.log("new TestFunction: ",response.data);
            setTestFun(response.data);
            console.log("hete is testFun: ",testFun);
            
        }catch(error){
            console.log(error)
        }

        
    }

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try{

            const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imdbId:movieId});
    
            const updateReviews = [...reviews,{body:rev.value}];
    
            rev.value = "";
    
            setReviews(updateReviews);

        }catch(err){
            console.error(err);
        }

    }

  return (
    <Container>
        <Row>
            <Col>
                <h3>
                    Reviews
                </h3>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col>
                <img src={movie?.poster} alt='' />
            </Col>
            <Col>
             {
                <>
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a Review?"  />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                </>
             }
             {
                testFun.reviewIds?.map((r) => {
                    return(
                        <>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    )
                })
             }
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews

