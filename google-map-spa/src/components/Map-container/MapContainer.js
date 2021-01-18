import React, {Component} from 'react';
import { GoogleApiWrapper, InfoWindow, Marker} from "google-maps-react";
import CurrentLocation from "../CurrentLocation";
const mapStyles = {
    width: '100%',
    height: '100%'
};


export class MapContainer extends Component{

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

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

    canterMoved = () => {

    }


render() {
        const { google  } = this.props

        return(
                    <CurrentLocation
                        centerAroundCurrentLocation
                        google={google}
                        style={mapStyles}
                        onDblclick={() => console.log('Is clicked') }

                    >
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'Familiar District'}
                        />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </CurrentLocation>
            )
    }
}

export default GoogleApiWrapper({
     apiKey: "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDj0MDTfzDhcUevW7Vpd7YA_fGn1htSdFM"
    })(MapContainer)