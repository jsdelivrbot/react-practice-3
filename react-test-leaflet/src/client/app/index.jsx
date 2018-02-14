import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const OMSTiles = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const OMSAttr = "&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const mapCenter = [39.9528, -75.1638];
const zoomLevel = 12;

export default class App extends Component {
  render() {
  
      return (
          <div>
              <Map
                  center={mapCenter}
                  zoom={zoomLevel}
              >
                  <TileLayer
                      attribution={OMSAttr}
                      url={OMSTiles}
                  />
              </Map>
          </div>
      );
  }
}
render(
  <App />,
  document.getElementById('mount')
);