import React, { useState , Fragment } from "react";

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';

import CreateDiaryEntry from '../components/CreateDiaryEntry';
import Load from '../components/Load';
import { useAuth0 } from '@auth0/auth0-react';
import baseImage from "../assets/loginPeople.webp";
import OldDiaryEntry from "../components/OldDiaryEntry";


const Diary = () =>  {

    const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();

    const [diaryEntries, setDiaryEntries] = useState([
        { id: 4, time: "Mar 2, 2024 at 9:16am", des: "Today was pure magic! The sun painted the sky in hues of pink and orange as I strolled through the park, feeling a gentle breeze kiss my cheeks. I couldn't help but smile as laughter echoed around me, filling the air with contagious happiness. A surprise call from an old friend added an extra layer of joy to my day. We reminisced about the good times and planned to meet up soon. Gratitude fills my heart, and I can't help but marvel at the beauty of life. " },
        { id: 3, time: "Feb 26, 2024 at 7:11am", des: "The rain tapped softly on my window, mirroring the somber rhythm of my thoughts today. A heavy feeling clung to me, like a gray cloud overshadowing my emotions. The world outside seemed muted, and even familiar places felt strange. It's one of those days when memories of the past linger, leaving a bittersweet taste in my soul. As I write, the ink seems to absorb my melancholy, creating a tangible reflection of the emotional storm within." },
        { id: 2, time: "Feb 12, 2024 at 5:35pm", des: "Today tested my resilience, pushing me to confront challenges head-on. The weight of responsibilities seemed overwhelming, but I refused to be defeated. With each obstacle, a fire ignited within me. The setbacks fueled a determination to rise stronger. The late-night hours were spent planning, organizing, and strategizing my next moves. As I close this entry, a sense of accomplishment and empowerment surges through my veins. Tomorrow is a new day, and I'm ready to face it with unwavering resolve." },
        { id: 1, time: "Feb 4, 2024 at 11:16am", des: "Today I woke up feeling exceptionally well. I had a good night of deep sleep combined with a few good REM cycles. Ready to perform my absolute best today!" },
    ]);

    const handleSaveEntry = (text) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
        const currentDate = new Date().toLocaleString('en-US', options);
        const newEntry = {
            id: diaryEntries.length + 1,
            time: currentDate,
            des: text,
        };
        setDiaryEntries((prevEntries) => [...prevEntries, newEntry]);
    };

    const sortedDiaryEntries = [...diaryEntries].sort((a, b) => b.id - a.id);

    if(isLoading){
        return<div>Loading..</div>
    }

    if(isAuthenticated){
         return (
            <Fragment>
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="row feed-body">
                                <div className="col-xl-8 col-xxl-9 col-lg-8">
                                    <CreateDiaryEntry onSave={handleSaveEntry} />   
                                    {sortedDiaryEntries.map(entry => (
                                        <OldDiaryEntry key={entry.id} id={entry.id} time={entry.time} des={entry.des} />
                                    ))}
                                    <Load />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Popupchat />
                <Appfooter />
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                <div className="main-wrap">
                    <div className="nav-header bg-transparent shadow-none border-0">
                        <div className="nav-top w-100">
                            <a href="/"><i className="feather-heart text-success display1-size me-2 ms-0"></i><span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">Mindful Connection</span> </a>
                            <button className="nav-menu me-0 ms-auto"></button>

                            {/*<a onClick={handlesLogout} className="header-btn d-none d-lg-block bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>*/}
                            {/*<a href="/register" className="header-btn d-none d-lg-block bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>*/}
                        </div>
                    </div>
                    <div className="row">
                        <img className="col-xl-5 d-none d-xl-block p-0 vh-90 bg-image-cover bg-no-repeat" alt='happy people' src={baseImage}></img>
                        <div className="col-xl-7 vh-100 align-items-center d-flex bg-white rounded-3 overflow-hidden">
                            <div className="card shadow-none border-0 ms-auto me-auto login-card">
                                <div className="card-body rounded-0 text-left">
                                    <h2 className="fw-700 display1-size display2-md-size mb-3">Login into <br />your account</h2>
                                    <div>
                                        <a onClick={loginWithRedirect} className="bg-dark fw-500 text-white font-xsss p-3 ms-auto w100 text-center lh-20 rounded-xl">Login</a>
                                        <a onClick={loginWithRedirect} className="bg-current fw-500 text-white font-xsss p-3 ms-2 w100 text-center lh-20 rounded-xl">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Diary;