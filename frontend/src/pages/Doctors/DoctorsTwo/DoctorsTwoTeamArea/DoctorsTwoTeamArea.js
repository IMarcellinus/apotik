import React from 'react';
import DoctorsTwoSingleTeam from '../../../../components/DoctorsTwoSingleTeam/DoctorsTwoSingleTeam';

const DoctorsTwoTeamArea = () => {
    return (
        <>
            <section className="team-area pt-115 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="section-title text-center pos-rel mb-70">
                                <div className="section-icon">
                                    <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                                </div>
                                <div className="section-text pos-rel">
                                    <h5>Tim Kami</h5>
                                    <h1>Tim Profesional dan Handal</h1>
                                </div>
                                <div className="section-line pos-rel">
                                    <img src="img/shape/section-title-line.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <DoctorsTwoSingleTeam image="7" name="Monkey D. Luffy" title="Founder"  />
                        <DoctorsTwoSingleTeam image="8" name="Roronoa Zoro" title="Bedah Neurologi" />
                        <DoctorsTwoSingleTeam image="9" name="Nami" title="Pasca Operasi" />
                        <DoctorsTwoSingleTeam image="10" name="Usopp" title="Spesialis Gigi" />
                        <DoctorsTwoSingleTeam image="11" name="Sanji" title="Spesialis Mata" />
                        <DoctorsTwoSingleTeam image="12" name="Tony Tony Chopper" title="Kanker" />

                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorsTwoTeamArea;