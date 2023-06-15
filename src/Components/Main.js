import React, { Component } from 'react'
import CandidateDetails from './CandidateDetails'
import CandidateDetailsTable from './CandidateDetailsTable'
import InterviewDetails from './InterviewDetails'
import OfferDetails from './OfferDetails'
import AllCandidateDetails from './AllCandidateDetails';
import MainPageBanner from './MainPageBanner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditCandidateDetails from './EditCandidateDetails'

class Main extends Component {

    render() {
        return (
            <div>
                <MainPageBanner>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<CandidateDetailsTable />} />
                            <Route path='/allCandidateDetails' element={<AllCandidateDetails/>} />
                            <Route path='/editCandidateDetails' element={<EditCandidateDetails /> } />
                            <Route path='/candidateDetails' element={<CandidateDetails readOnly={false} /> } />
                            <Route path='/interviewDetails' element={<InterviewDetails readOnly={false} /> } />
                            <Route path='/offerDetails' element={<OfferDetails readOnly={false} /> } />
                        </ Routes>
                    </BrowserRouter>
                </MainPageBanner>

            </div>

        )
    }
}
export default Main