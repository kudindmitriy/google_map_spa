import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from "google-maps-react";

import {
    WrapperMap
} from './style'


export class MapContainer extends Component{

    render() {

        const { google } = this.props

        return(
                <WrapperMap>
                    <Map
                        google={google}
                        zoom={14}
                        initialCenter={
                            {
                                lat: 47.8563228,
                                lng: 35.1051424
                            }
                        }
                    />
                </WrapperMap>
            )
    }
}

export default GoogleApiWrapper({
    apiKey: 'Any_Key_Pass'
})(MapContainer)