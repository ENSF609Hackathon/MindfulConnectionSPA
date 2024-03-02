import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';
import GoogleMapReact from 'google-map-react';
import './address.css'; // Import the CSS file for styling

class Nearbyservices extends Component {
    static defaultProps = {
        center: {
            lat: 51.0447, // Calgary downtown latitude
            lng: -114.0719 // Calgary downtown longitude
        },
        zoom: 13 // Adjusted zoom level for a closer view
    };

    state = {
        places: []
    };

    onGoogleApiLoaded = ({ map, maps }) => {
        if (maps && maps.places) {
            // Now we're sure that the Places API is loaded
            const service = new maps.places.PlacesService(map);
            
            // Request hospitals using type parameter
            const hospitalOptions = {
                location: new maps.LatLng(this.props.center.lat, this.props.center.lng),
                radius: 4000, // 4km radius
                type: ['hospital']
            };
    
            // Request hospitals using keyword parameter
            const hospitalKeywordOptions = {
                location: new maps.LatLng(this.props.center.lat, this.props.center.lng),
                radius: 4000, // 4km radius
                keyword: 'hospital'
            };
    
            // Request pharmacies using keyword parameter
            const pharmacyOptions = {
                location: new maps.LatLng(this.props.center.lat, this.props.center.lng),
                radius: 4000, // 4km radius
                keyword: 'pharmacy'
            };
    
            // Array to hold all results
            let allResults = [];
    
            // Callback function to handle search results
            const handleSearchResults = (results, status) => {
                if (status === maps.places.PlacesServiceStatus.OK) {
                    allResults = allResults.concat(results);
                    this.setState({ places: allResults });
                }
            };
    
            // Perform nearby search for hospitals using type parameter
            service.nearbySearch(hospitalOptions, handleSearchResults);
    
            // Perform nearby search for hospitals using keyword parameter
            service.nearbySearch(hospitalKeywordOptions, handleSearchResults);
    
            // Perform nearby search for pharmacies using keyword parameter
            service.nearbySearch(pharmacyOptions, handleSearchResults);
        }
    };

    render() {
        return (
            <Fragment>
                <div className="main-wrapper">
                    <Header />
                    <div className="main-content bg-lightgreen theme-dark-bg right-chat-active" style={{ paddingTop: '150px' }}>
                        <div className="middle-sidebar-bottom">
                            <div className="middle-sidebar-left">
                                <div className="middle-wrap">
                                    <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                                        <div className="card-body p-4 w-100 bg-darkgreen d-flex rounded-3">
                                            <Link to="/defaultsettings" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></Link>
                                            <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Nearby Services</h4>
                                        </div>
                                        <div className="card-body p-lg-5 p-4 w-100 border-0">
                                            <div style={{ height: '600px', width: '100%' }}>
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: 'AIzaSyA4ea8qBQmQsnVTuiXM5CHBYeR0FLocyBo', libraries: 'places' }}
                                                    defaultCenter={this.props.center}
                                                    defaultZoom={this.props.zoom}
                                                    yesIWantToUseGoogleMapApiInternals
                                                    onGoogleApiLoaded={this.onGoogleApiLoaded}
                                                >
                                                    {this.state.places.map(place => (
                                                        <Marker
                                                            key={place.id}
                                                            lat={place.geometry.location.lat()}
                                                            lng={place.geometry.location.lng()}
                                                            name={place.name}
                                                            address={place.vicinity}
                                                            type={place.types[0]} // Add the type prop here
                                                        />
                                                    ))}
                                                </GoogleMapReact>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Popupchat />
                    <Appfooter />
                </div>
            </Fragment>
        );
    }
}

const Marker = ({ name, address, type }) => {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    // Define marker color based on the type of place or keyword
    let markerColor;
    if (type === 'hospital' || name.toLowerCase().includes('hospital')) {
        markerColor = 'red';
    } else if (type === 'pharmacy') {
        markerColor = 'green';
    
    }

    return (
        <div className="marker-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={`ti-location-pin`} title={name} style={{ color: markerColor, fontSize: '18px' }} />
            {hovered && (
                <div className="popup">
                    <div className="name">{name}</div>
                    <div className="address">{address}</div>
                </div>
            )}
        </div>
    );
};

export default Nearbyservices;
