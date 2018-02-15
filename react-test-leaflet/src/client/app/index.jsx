import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const OMSTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const OMSAttr = "<a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const mapCenter = [37.7828,  -122.4282];
const markers = [
    { position: [37.783718, -122.46775] },
    { position: [37.806033, -122.4706447] },
    { position: [37.791892, -122.414235] },
    { position: [37.804168, -122.418247] },
    { position: [37.784329, -122.508777] },
  ];
const zoomLevel = 12;
const maxZoomLevel = 18;

export default class App extends Component {
  render() {
  
      return (
          <div>
              <Map
                  center={mapCenter}
                  zoom={zoomLevel}
                  maxZoom={maxZoomLevel}
              >
                  <TileLayer
                      attribution={OMSAttr}
                      url={OMSTiles}
                  />
                  <MarkerClusterGroup markers={markers} />
              </Map>
          </div>
      );
  }
}
render(
  <App />,
  document.getElementById('mount')
);