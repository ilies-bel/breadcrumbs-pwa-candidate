import React, {memo, useCallback, useState} from 'react'
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';

import GoogleMapReact from 'google-map-react';
import FlashyButton from 'littleComponents/flashyButton'

const containerStyle = {
    width: '100%',
    height: '500px'
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

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCK1h2givbm_74EEN77-iGnKUz52sQaIgk" }}
          defaultCenter={pos_pwc}
          defaultZoom={5}
        >
          <FlashyButton
            lat={45.76231}
            lng={4.920307}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default memo(OfficeMap)
