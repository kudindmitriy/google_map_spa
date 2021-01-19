import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Modal from "../Modal";
import Fade from 'react-reveal/Fade'

const mapStyles = {
    map: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
};

export class CurrentLocation extends Component {

    state = {
        currentLocation: {
            lat: this.props.initialCenter,
            lng: this.props.initialCenter
        },
        isModalShow: false,
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }

    this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {

        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }
    loadMap() {
        if (this.props && this.props.google) {

            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            const { lat, lng } = this.state.currentLocation;
            const center = new maps.LatLng(lat, lng);

            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );
            this.map = new maps.Map(node, mapConfig);

            this.map.addListener('dblclick', e => {
                this.setState({isModalShow: true, currentLocation: {
                    lat:  e.latLng.lat(),
                    lng:  e.latLng.lng(),

                }})
            })
        }
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;

            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.currentLocation
            });
        });
    }

    hideModal = () => {
        this.setState({isModalShow: false})
    }

    render() {
        const style = Object.assign({}, mapStyles.map);

        const coordinates = this.state.currentLocation

        return (
            <div style={{width: '100%', height: '100%'}}>
                {
                    this.state.isModalShow && (
                            <Modal
                                coordinates={coordinates}
                                hideModal={this.hideModal}/>

                    )
                }
                {this.state.isModalShow && (<div
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1000400
                    }}
                > </div>)}

                {/*{this.state.isModalShow && (<div style={{*/}
                {/*    top: '29%',*/}
                {/*    left: '29%',*/}
                {/*    width: '50%',*/}
                {/*    height: '50%',*/}
                {/*    backgroundColor: 'white',*/}
                {/*    position: 'absolute',*/}
                {/*    zIndex: 1000500*/}
                {/*}} onClick={() => this.hideModal()}>*/}
                {/*    <span style={{textAlign: 'center', width: '100%'}}>{lng} </span><br/>*/}
                {/*    <span style={{textAlign: 'center', width: '100%'}}>{lat} </span>*/}
                {/*</div>)}*/}

                <div style={style} ref="map">
                    Loading map...
                </div>
                {this.renderChildren()}
            </div>
        );
    }

}

export default CurrentLocation;

CurrentLocation.defaultProps = {
    zoom: 14,
    initialCenter: {
        lat: 47.8563228,
        lng: 35.1051424
    },
    centerAroundCurrentLocation: false,
    visible: true
};