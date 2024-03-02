import { Fragment } from "react";
import Header from '../components/Header';
import Rightchat from "../components/Rightchat";
import Popupchat from "../components/Popupchat";
import Appfooter from "../components/Appfooter";
import Leftnav from '../components/Leftnav';
import LineChart from "react-apexcharts";

const Graphs = () => {

    const graphStuff = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ,'Jun', 'Jul', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'],
        series: [{
        name: 'Burnout Score',
        data: [35, 66, 34, 56, 18 ,35, 66, 34, 56, 18 , 56, 18]
        }],
        options: {
            chart: {
            type: 'line',
        //   width:'100%',
            height: 250,
            stacked: true,
            toolbar: {
            show: true
            },    
        },
        yaxis: {
            title: {
                text: "Burnout Score"
            }
        },
        xaxis: {
                title: {
                    text: "Time"
                }
        },
        responsive: [{
            breakpoint: 480,
            options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
            }
        }],
        legend: {
            show: false
        },
        fill: {
            opacity: 1
        },
        },
        
    };

    return(
        <Fragment>
            <Header />
            <Leftnav />
            <Rightchat />
            <div className="main-content bg-white right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row"></div>
                            <div className="col-lg-12 mb-3">
                            <div className="card w-100 p-3 border-0 mb-3 rounded-xxl bg-lightblue2 shadow-none overflow-hidden">
                                <LineChart
                                options={graphStuff.options}
                                series={graphStuff.series}
                                type="line"
                                width="100%"

                                />
                            </div>
                        </div>
                        <div className="row">
                            <a href="/defaultanalytics" className="btn w200 border-0 bg-primary-gradiant p-3 text-white fw-600 rounded-3 d-inline-block font-xssss">Ask about the graph</a>
                        </div>
                    </div>
                </div>
            </div>
            <Popupchat />
            <Appfooter />
        </Fragment>
        
    )
}

export default Graphs;