import React, { useState, useEffect } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polygon, Polyline} from 'google-maps-react';
// import { withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps';
import { dummyMarkedLocations } from "../../dummyData"
import { GET_LOCATION } from "../../constants"


import "./Home.css"

const Home = (props) => {

    const [allMarkedLocations, setAllMarkedLocations] = useState(dummyMarkedLocations) 
    const [allMarkedLatLng, setAllMarkedLatLng] = useState([])

    const [clickRoute, setClickRoute] = useState(false)

    const [currentIndex, setCurrentIndex] = useState(0)

    const [input, setInput] = useState({
        locationName: "",
        lat: "",
        lng: ""
    })

    const [currentMarker, setCurrentMarker] = useState({
        lat: "",
        long: ""
    })

    // useEffect(() => {
    //     setCurrentIndex(allMarkedLocations.length)
    //     console.log(allMarkedLocations.length)
    // },[allMarkedLocations])

    // const triangleCoords = [
    //     {lat: 16.5479, lng: 80.677},
    //     {lat: 17.7238, lng: 83.1599},
    //     {lat: 18.3923, lng: 78.8201}
    //     // {lat: 32.321, lng: -64.757},
    //     // {lat: 25.774, lng: -80.190}
    //   ];

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
        if(currentIndex <= 5){
            const { locationName, lat, lng } = input
            let currentState = allMarkedLocations
            console.log(65,currentIndex)
            currentState[currentIndex] = {
                name: locationName,
                position: {
                    lat,
                    lng
                }
            }

            setAllMarkedLocations(
                // prev => {
                // return [
                //     ...prev,
                //     {
                //         name: locationName,
                //         position: {
                //             lat,
                //             lng
                //         }
                //     }
                // ]
                currentState
            // }
            )
            setCurrentIndex(currentIndex+1)

            setAllMarkedLatLng(prev => {
                return [
                    ...prev,
                    {
                        lat,
                        lng
                    }
                ]
            })
        }else {
            alert("Limit is 5")
        }
    }
    

    const handleClick = (t, map, coord) => {
        const { latLng } = coord;
        const currentLat = latLng.lat();
        const currentLng = latLng.lng();
        let currentLocation = ""

        
        fetch(GET_LOCATION.replace("__LATLONG__",String(latLng.lat())+","+String(latLng.lng())))
        .then(data => data.json())
        .then(json => {
            console.log(json.plus_code.compound_code)
            let cityName = json.plus_code.compound_code.split(",")[0]
            cityName = cityName.substr(cityName.indexOf(" ")+1)

            setInput(prev => {
                return {
                    ...prev,
                    locationName: cityName,
                    lat: currentLat,
                    lng: currentLng
                }
            })
        })     
    }
    
    const handleShowRoute = () => {
        setClickRoute(true)
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
                        <div className="display-coordinates-content">
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
                            <button onClick={handleShowRoute}>Show Route</button>
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
                        {(clickRoute && allMarkedLatLng.length>0) && <Polyline
                            path={allMarkedLatLng}
                            strokeColor="#000000"
                            strokeOpacity={1}
                            strokeWeight={5}
                            fillColor="#000000"
                            fillOpacity={0.35} 
                        />}
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: "AIzaSyCicw2MoonjgBscZpmaYwPiVhfs287UQ84"})(Home)