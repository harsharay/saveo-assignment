import React, { useState, useEffect } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';


import "./Home.css"

const Home = (props) => {

    const [allMarkedLocations, setAllMarkedLocations] = useState([]) 

    const [input, setInput] = useState({
        locationName: "",
        lat: "",
        lng: ""
    })

    const [currentMarker, setCurrentMarker] = useState({
        lat: "",
        long: ""
    })

    const handleInputChange = e => {
        let name = e.target.name
        let value = e.target.value

        setInput(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const handleAddMarkers = () => {
        console.log(40)
        if(allMarkedLocations.length < 5){
            const { locationName, lat, lng } = input

            setAllMarkedLocations(prev => {
                return [
                    ...prev,
                    {
                        name: "locationName",
                        position: {
                            lat,
                            lng
                        }
                    }
                ]
            })
        }
    }
    

    const handleClick = (t, map, coord) => {
        console.log("click")
        console.log(21,coord)
        const { latLng } = coord;
        const currentLat = latLng.lat();
        const currentLng = latLng.lng();

        setInput(prev => {
            return {
                ...prev,
                locationName: "empty",
                lat: currentLat,
                lng: currentLng
            }
        })
     
    }
    


    return (
        <div className="home-root">
            <div className="content-group">
                <div className="top-block">
                    <div className="top-block-content">
                        <div>
                            <p>Location Name</p>
                            <input type="text" name="locationName" value={input.locationName} onChange={handleInputChange} />
                        </div>
                        <div>
                            <p>Enter Latitude</p>
                            <input type="text" name="lat" value={input.lat} onChange={handleInputChange} />
                        </div>
                        <div>
                            <p>Enter Longitude</p>
                            <input type="text" name="lng" value={input.lng} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="top-block-button-block">
                        <button className="top-block-button" onClick={handleAddMarkers}>Add</button>
                    </div>
                </div>
                <div className="bottom-group">
                    <div className="display-coordinates">
                        <p>All Coordinates</p>
                        <div>
                            <div className="header-group">
                                <p>My coordinates</p>
                                <p>Default</p>
                                <p>Default</p>
                            </div>
                            <div className="locations-data">
                                {allMarkedLocations.map((item, index) => {
                                    return (
                                        <div key={index} className="header-group">
                                            <p>{index+1}. {item.name}</p>
                                            <p>{item.position.lat}</p>
                                            <p>{item.position.lng}</p>
                                        </div>
                                    )
                                })} 
                            </div>
                            <button>Show Route</button>
                        </div>
                    </div>
                    <div className="map1">
                        <Map
                            google={props.google}
                            style={{ width: "25% !important", margin: "auto", height: "41% !important" }}
                            initialCenter={{
                                lat: 17.380275415679968,
                                lng: 78.48421990628647 
                            }}
                            className="actualMap"
                            zoom={6}
                            onClick={handleClick}
                        >
                            {allMarkedLocations.map((marker, index) => (
                                <Marker
                                key={index}
                                position={marker.position}
                            />
                        ))}
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: "AIzaSyCicw2MoonjgBscZpmaYwPiVhfs287UQ84"})(Home)