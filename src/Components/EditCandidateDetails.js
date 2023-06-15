import React, { useState, useEffect } from "react";
import "../styles/stylesheet.css";
import CandidateDetails from './CandidateDetails'
import InterviewDetails from './InterviewDetails'
import OfferDetails from './OfferDetails'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EditCandidateDetails = (props) => {

    const [userDetails, setUserDetails] = useState();
    const [enteredEmail, setEnteredEmail] = useState("");

    useEffect(() => {
        getCandidateDetails(enteredEmail)
    }, [enteredEmail]);

    const getCandidateDetails=() => {

        fetch(`http://localhost:8080/candidate/completeCandidateDetails?emailId=${enteredEmail}`, {
                method: 'GET',
                headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'Accept': 'application/json'
                },
        })
        .then((response) => response.json())
        .then((data) => {
            setUserDetails(data)
        })
        .catch();        
    };

    return (
        <>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Email ID"
              className="me-2"
              aria-label="Search"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              style={{width: "20%", marginTop: "2rem", marginLeft: "55rem"}}
            />
            <Button variant="outline-success" onClick={getCandidateDetails} style={{marginTop: "2rem"}}>Search</Button>
          </Form>
            <CandidateDetails editOnly={true} userDetails={userDetails ? userDetails.candidateDetails : ""} />
            <InterviewDetails editOnly={userDetails && userDetails.interviewDetails ? true : false } userDetails={userDetails ? userDetails.interviewDetails : ""} />
            <OfferDetails editOnly={userDetails && userDetails.offerDetails ? true : false } userDetails={userDetails ? userDetails.offerDetails : ""}/>
            {props.children}
        </>
    );
};

export default EditCandidateDetails;