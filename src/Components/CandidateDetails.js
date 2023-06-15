import React, { useEffect, useState } from "react";
import "../styles/stylesheet.css";

const CandidateDetails = (props) => {

        const [editFormData, setEditFormData] = useState(props.userDetails || {
                name: "",
                phone: "",
                email_id: "",
                gender: "",
                skills: "",
                sourcingDate: "",
                modifiedDate: "",
                ageing: 0,
                status: "",
                source: "",
                lwd: "",
                currentLocation: "",
                preferredLocation: "",
                currentCompany: "",
                currentCTC: 0,
                expectedCTC: 0,
                experience: 0,
                cv: ""
        });

        const handleEditFormChange = (event) => {
                event.preventDefault();

                const fieldName = event.target.getAttribute("name");
                const fieldValue = event.target.value;

                const newFormData = { ...editFormData };
                newFormData[fieldName] = fieldValue;

                setEditFormData(newFormData);
        };

        useEffect(() => {
                if (props.userDetails) {
                        setEditFormData(props.userDetails);
                }
        }, [props]);

        const handleSubmit = (event) => {
                event.preventDefault();

                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');

                headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                headers.append('Access-Control-Allow-Credentials', 'true');

                headers.append('GET', 'POST', 'OPTIONS');
                console.log(JSON.stringify({
                        ...editFormData
                }));

                fetch('http://localhost:8080/candidate/addCandidate', {
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

                alert("Candidate details submitted");

        }

        const handleEditSubmit = (event) => {
                event.preventDefault();

                let headers = new Headers();

                headers.append('Content-Type', 'application/json');
                headers.append('Accept', 'application/json');

                headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
                headers.append('Access-Control-Allow-Credentials', 'true');

                headers.append('GET', 'POST', 'OPTIONS');
                console.log(JSON.stringify({
                        ...editFormData
                }));

                fetch('http://localhost:8080/candidate/updateCandidateDetails', {
                        method: 'PUT',
                        headers: {
                                'Content-type': 'application/json; charset=UTF-8',
                                'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                                ...editFormData
                        }),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                })
                .catch(error => console.log('Failed to save details : ' + error.message));

                alert("Candidate details updated");

            }

        const readOnly = props.readOnly;
        const editOnly = props.editOnly;

        return (
                <>
                        <div className='app-container'>
                                <div className="form">
                                        <h2>Candidate Details</h2>
                                        <form>
                                                <div>
                                                        <label className="form__label" for="name"> Name </label>
                                                        <input type="text" placeholder="Name" name="name" required="required" readOnly={readOnly}
                                                                value={editFormData.name} onChange={handleEditFormChange} />
                                                </div>

                                                <div>
                                                        <label className="form__label" for="email_id"> Email </label>
                                                        <input type="text" placeholder="Email" name="email_id" required="required" readOnly={readOnly}
                                                                value={editFormData.email_id} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="phone"> Phone </label>
                                                        <input type="number" placeholder="Phone" name="phone" required="required" readOnly={readOnly}
                                                                value={editFormData.phone} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="gender"> Gender </label>
                                                        <input type="string" placeholder="Gender" name="gender" required="required" readOnly={readOnly}
                                                                value={editFormData.gender} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="skills"> Skills </label>
                                                        <input type="text" placeholder="Skills" name="skills" required="required" readOnly={readOnly}
                                                                value={editFormData.skills} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="sourcing date"> Sourcing Date </label>
                                                        <input type="date" placeholder="Sourcing Date" name="sourcingDate" required="required" readOnly={readOnly}
                                                                value={editFormData.sourcingDate} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="modified date"> Modified date </label>
                                                        <input type="date" placeholder="Modified Date" name="modifiedDate" required="required" readOnly={readOnly}
                                                                value={editFormData.modifiedDate} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="ageing"> Ageing </label>
                                                        <input type="number" placeholder="Ageing" name="ageing" required="required" readOnly={readOnly}
                                                                value={editFormData.ageing} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="status"> Status </label>
                                                        <input type="text" placeholder="Status" name="status" required="required" readOnly={readOnly}
                                                                value={editFormData.status} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="source"> Source </label>
                                                        <input type="text" placeholder="Source" name="source" required="required" readOnly={readOnly}
                                                                value={editFormData.source} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="lwd"> LWD </label>
                                                        <input type="date" placeholder="LWD" name="lwd" required="required" readOnly={readOnly}
                                                                value={editFormData.lwd} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="current location"> Current Location </label>
                                                        <input type="text" placeholder="Current Location" name="currentLocation" required="required" readOnly={readOnly}
                                                                value={editFormData.currentLocation} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="preferred location"> Preferred Location </label>
                                                        <input type="text" placeholder="Preferred Location" name="preferredLocation" required="required" readOnly={readOnly}
                                                                value={editFormData.preferredLocation} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="current company"> Current Company </label>
                                                        <input type="text" placeholder="Current Company" name="currentCompany" required="required" readOnly={readOnly}
                                                                value={editFormData.currentCompany} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="current ctc"> Current CTC </label>
                                                        <input type="number" placeholder="Current CTC" name="currentCTC" required="required" readOnly={readOnly}
                                                                value={editFormData.currentCTC} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="expected ctc"> Expected CTC </label>
                                                        <input type="number" placeholder="Expected CTC" name="expectedCTC" required="required" readOnly={readOnly}
                                                                value={editFormData.expectedCTC} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="experience"> Experience </label>
                                                        <input type="number" placeholder="Experience" name="experience" required="required" readOnly={readOnly}
                                                                value={editFormData.experience} onChange={handleEditFormChange} />
                                                </div>
                                                <div>
                                                        <label className="form__label" for="cv"> CV </label>
                                                        <input type="text" placeholder="CV" name="cv" required="required" readOnly={readOnly}
                                                                value={editFormData.cv} onChange={handleEditFormChange} />
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

export default CandidateDetails;