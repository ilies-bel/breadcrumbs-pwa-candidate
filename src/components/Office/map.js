import React, {memo, useCallback, useState} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const pos_pwc = {
    lat: 48.8846,
    lng: 2.26965
};

function OfficeMap() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCK1h2givbm_74EEN77-iGnKUz52sQaIgk"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        const bounds = new google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={pos_pwc}
            zoom={4}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >


            <></>
        </GoogleMap>
    ) : <></>
}

export default memo(OfficeMap)
