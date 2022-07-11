// @flow
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// components
import PageTitle from '../../components/PageTitle';

const BasicMap = (props) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Basic Google Map</h4>

                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoomControlOptions={{
                            position: props.google.maps.ControlPosition.LEFT_TOP,
                        }}></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const MapWithMarker = (props) => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Google Map with Marker</h4>
                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={props.google}
                        zoom={18}
                        initialCenter={{ lat: 21.569874, lng: 71.5893798 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        zoomControlOptions={{
                            position: props.google.maps.ControlPosition.LEFT_TOP,
                        }}>
                        <Marker
                            title={'This is sweet home.'}
                            name={'Home sweet home!'}
                            position={{ lat: 21.569874, lng: 71.5893798 }}></Marker>
                    </Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const StreetViewMap = (props) => {
    let mapRef = { map: {} };

    /**
     * Activate the street view
     */
    const activateStreetView = (position) => {
        if (mapRef) {
            const mapObj = mapRef.map.getStreetView();
            mapObj.setPov({ heading: 34, pitch: 10 });
            mapObj.setPosition(position);
            mapObj.setVisible(true);
        }
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Street View Panoramas Google Map</h4>

                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={props.google}
                        ref={(map) => (mapRef = map)}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        streetViewControl={true}
                        onReady={() => {
                            activateStreetView({ lat: 40.7295174, lng: -73.9986496 });
                        }}></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const LightStyledMap = (props) => {
    const mapStyles = [
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#ffffff' }, { lightness: 17 }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 18 }],
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }, { lightness: 16 }],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#dedede' }, { lightness: 21 }],
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
        },
        { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#fefefe' }, { lightness: 20 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Ultra Light with Labels</h4>

                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        styles={mapStyles}
                        zoomControlOptions={{
                            position: props.google.maps.ControlPosition.LEFT_TOP,
                        }}></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const DarkStyledMap = (props) => {
    const mapStyles = [
        {
            featureType: 'all',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
        },
        {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#c4c4c4' }],
        },
        {
            featureType: 'administrative.neighborhood',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 20 }],
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 21 }, { visibility: 'on' }],
        },
        {
            featureType: 'poi.business',
            elementType: 'geometry',
            stylers: [{ visibility: 'on' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#e5c163' }, { lightness: '0' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ visibility: 'off' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#e5c163' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 18 }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#575757' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ffffff' }],
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#2c2c2c' }],
        },
        {
            featureType: 'road.local',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 16 }],
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#999999' }],
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 19 }],
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }, { lightness: 17 }],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">Dark</h4>

                <div className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
                    <Map
                        google={props.google}
                        zoom={14}
                        initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
                        style={{ width: '100%', height: '100%', position: 'relative' }}
                        styles={mapStyles}
                        zoomControlOptions={{
                            position: props.google.maps.ControlPosition.LEFT_TOP,
                        }}></Map>
                </div>
            </Card.Body>
        </Card>
    );
};

const GoogleMaps = (props) => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Maps', path: '/ui/googlemaps' },
                    { label: 'Google Maps', path: '/ui/googlemaps', active: true },
                ]}
                title={'Google Maps'}
            />

            <Row>
                <Col xl={6}>
                    <BasicMap google={props.google} />
                </Col>

                <Col xl={6}>
                    <MapWithMarker google={props.google} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <StreetViewMap google={props.google} />
                </Col>

                <Col xl={6}>
                    <LightStyledMap google={props.google} />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <DarkStyledMap google={props.google} />
                </Col>
            </Row>
        </>
    );
};

export default (GoogleApiWrapper({
    apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA',
})(GoogleMaps): any);
