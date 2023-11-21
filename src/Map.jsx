
import BackgroundAll from "./Background";
import React from "react";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Map() {
    const defaultProps = {
        center: {
            lat: -2.50658,
            lng: 28.85528
        },
        zoom: 11
    };
    return (
        <>
        {/* 2°30'23.7"S 28°51'19.0"E */}
            <BackgroundAll />
            <h1 className='text-center mt-5'>Location</h1>

            <section className='mt-3 container mb-5'>

                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={-2.50658}
                            lng={28.85528}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>

            </section>
        </>
    );
}

