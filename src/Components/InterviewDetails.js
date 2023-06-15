import React, { useState, useEffect } from "react";
import "../styles/stylesheet.css";

const InterviewDetails = (props) => {

        const [editFormData, setEditFormData] = useState(props.userDetails || {
                email_id: "",
                stage: "",
                panelName: "",
                panelEmpId: "",
                account: "",
                result: "",
                date: "",
                feedbackURL: ""
        });

        const handleEditFormChange = (event) => {
                event.preventDefault();

                const fieldName = event.target.getAttribute("name");
                const fieldValue = event.target.value;

                const newFormData = { ...editFormData };
                newFormData[fieldName] = fieldValue;

                setEditFormData(newFormData);
        };

        const handleSubmit = (event) => {
                event.preventDefault();
                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');

                headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');
                headers.append('Access-Control-Allow-Credentials', 'true');

                headers.append('GET', 'POST', 'OPTIONS');
                console.log(JSON.stringify({
                        ...editFormData
                }));

                fetch('http://localhost:8080/interview/addInterviewDetails', {
                        method: 'POST',
                        body: JSON.stringify({
                                ...editFormData
                        }),
                        headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                'Accept': 'application/json'
                        },
                })
                        .then(response => console.log(response))
                        .then(json => console.log(json))
                        .catch(error => console.log('Failed to save details : ' + error.message));

                        alert("Interview details submitted");
        }

        const handleEditSubmit = (event) => {
                event.preventDefault();

                fetch('http://localhost:8080/interview/updateInterviewDetails', {
                        method: 'PUT',
                        headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                'Accept': 'application/json'
                        },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                })
                .catch();   
                alert("Interview details updated");
            }

            useEffect(() => {
                if (props.userDetails) {
                        setEditFormData(props.userDetails);
                }
        }, [props]);

        const readOnly = props.readOnly;
        const editOnly = props.editOnly;

        return (
                <>
                        <div className='app-container'>
                                <div className="form">
                                        <h2>Interview Details</h2>
                                        <form>
                                                <div>
                                                        <label className="form__label" for="email_id"> Email ID </label>
                                                        <input type="text" placeholder="Email ID" required="required" readOnly={readOnly}
                                                                value={editFormData.email_id} onChange={handleEditFormChange} name="email_id" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="stage"> Stage </label>
                                                        <input type="text" placeholder="Stage" required="required" readOnly={readOnly}
                                                                value={editFormData.stage} onChange={handleEditFormChange} name="stage" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="panelName"> Panel Name </label>
                                                        <input type="text" placeholder="Panel Name" required="required" readOnly={readOnly}
                                                                value={editFormData.panelName} onChange={handleEditFormChange} name="panelName" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="panelEmpId"> Panel Emp ID </label>
                                                        <input type="text" placeholder="Panel Emp ID" required="required" readOnly={readOnly}
                                                                value={editFormData.panelEmpId} onChange={handleEditFormChange} name="panelEmpId" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="account"> Account </label>
                                                        <input type="text" placeholder="Account" required="required" readOnly={readOnly}
                                                                value={editFormData.account} onChange={handleEditFormChange} name="account" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="result"> Result </label>
                                                        <input type="text" placeholder="Result" required="required" readOnly={readOnly}
                                                                value={editFormData.result} onChange={handleEditFormChange} name="result" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="date"> Date </label>
                                                        <input type="date" placeholder="Date" required="required" readOnly={readOnly}
                                                                value={editFormData.date} onChange={handleEditFormChange} name="date" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="feedbackURL"> Feedback URL </label>
                                                        <input type="text" placeholder="Feedback URL" required="required" readOnly={readOnly}
                                                                value={editFormData.feedbackURL} onChange={handleEditFormChange} name="feedbackURL" />
                                                </div>

                                                <button hidden={readOnly || editOnly} onClick={handleSubmit} type="submit"> Save </button>
                                                <button hidden={!editOnly} onClick={handleEditSubmit} type="submit"> Update </button>
                                        </form>
                                </div>
                        </div>
                        {props.children}
                </>
        );
};

export default InterviewDetails;