
import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import Secret from '../secret'

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <Map style={{height: '300px', width: '600px'}} google={this.props.google} zoom={14} 
         initialCenter={{ lat: this.props.location.lat, lng: this.props.location.lng }}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                {this.props.location}
              </div>
          </InfoWindow>
        </Map>
      );     
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: (Secret.api)
  })(MapContainer)