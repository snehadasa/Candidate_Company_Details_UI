import React, { useState, useEffect } from "react";
import "../styles/stylesheet.css";

const OfferDetails = (props) => {

        const [editFormData, setEditFormData] = useState(props.userDetails || {
                email_id: "",
                offeredDate: "",
                offeredStatus: "",
                offeredPipelineStatus: "",
                updatedOn: ""

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

                fetch('http://localhost:8080/offer/addOfferDetails', {
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

                        alert("Offer details submited");
        }

        const handleEditSubmit = (event) => {
                event.preventDefault();

                fetch('http://localhost:8080/offer/updateOffereDetails', {
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

                alert("Offer details updated");
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
                                        <h2>Offer Details</h2>
                                        <form>
                                                <div>
                                                        <label className="form__label" for="email_id"> Email ID </label>
                                                        <input type="text" placeholder="Email ID" required="required" readOnly={readOnly}
                                                                value={editFormData.email_id} onChange={handleEditFormChange} name="email_id" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="offeredDate"> Offered Date </label>
                                                        <input type="date" placeholder="Offered Date" required="required" readOnly={readOnly}
                                                                value={editFormData.offeredDate} onChange={handleEditFormChange} name="offeredDate" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="offeredStatus"> Offered Status </label>
                                                        <input type="text" placeholder="Offered Status" required="required" readOnly={readOnly}
                                                                value={editFormData.offeredStatus} onChange={handleEditFormChange} name="offeredStatus" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="offeredPipelineStatus"> Offered Pipeline Status </label>
                                                        <input type="text" placeholder="Offered Pipeline Status" required="required" readOnly={readOnly}
                                                                value={editFormData.offeredPipelineStatus} onChange={handleEditFormChange} name="offeredPipelineStatus" />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="updatedOn"> Updated On </label>
                                                        <input type="date" placeholder="Updated On" required="required" readOnly={readOnly}
                                                                value={editFormData.updatedOn} onChange={handleEditFormChange} name="updatedOn" />
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

export default OfferDetails;