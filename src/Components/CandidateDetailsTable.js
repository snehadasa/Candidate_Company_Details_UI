import React, { useState, useEffect } from "react";

import "../styles/CandidateDetailsTable.css";


const CandidateDetailsTable = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    getCandidateDetails()
  }, []);


  const getCandidateDetails = () => {

    fetch(`http://localhost:9090/candidate/all`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCandidates(data)
      })
      .catch();
  };

  return (
    <div className="app-container">
      <form className="table-form">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {(candidates || []).map((candidate, i) => (
              <tr key={i}>
                <td>{candidate.name}</td>
                <td>{candidate.phone}</td>
                <td>{candidate.email_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CandidateDetailsTable;