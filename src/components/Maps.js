import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export default withScriptjs(
  withGoogleMap(({ isMarkerShown, lat, lng }) => (
    <div>
      <GoogleMap defaultZoom={14} defaultCenter={{ lat, lng }}>
        {isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    </div>
  ))
);
