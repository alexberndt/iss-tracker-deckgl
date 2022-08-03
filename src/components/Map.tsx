/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeckGL, { MapView } from 'deck.gl';
import { AppConfig } from '../utils/config';
import { Map as ReactGlMap } from 'react-map-gl';
import React, { useEffect, useState, useCallback, useRef } from 'react';

const Map = () => {
  const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/dark-v10');

  return (
    <div>
      <DeckGL>
        <MapView>
          <ReactGlMap
            initialViewState={{
              latitude: 37.805,
              longitude: -122.447,
              zoom: 15.5,
            }}
            mapStyle={mapStyle}
            styleDiffing
            mapboxAccessToken={AppConfig.mapboxToken}
          />
        </MapView>
      </DeckGL>
    </div>
  );
};

export default Map;
