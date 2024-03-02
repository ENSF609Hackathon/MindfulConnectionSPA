import {Link} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import {Medication} from "../components/Medication";

export const Medications = () => {

    const meds = [
        {drug: 'Acetaminophen',
            dose: '500mg',
            frequency: 'By mouth twice daily',
            prescriber: 'Nurse Joy',
            date: 'September 5, 2021'},
        {drug: 'Warfarin',
            dose: '10mg',
            frequency: 'By mouth once daily',
            prescriber: 'Nurse Joy',
            date: 'April 15, 2022'}
    ]

    return (
        <div>
            <Header/>
            <div className="main-content bg-lightblue theme-dark-bg">
                <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">

                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mt-4 mb-4 font-xxl fw-700 mont-font">Medications</div>
                                {meds.map((med, index) => (
                                    <Medication
                                        drug={med.drug}
                                        dose={med.dose}
                                        frequency={med.frequency}
                                        prescriber={med.prescriber}
                                        date={med.date}
                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};