import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from "react-leaflet";
import type Coordinate from "./coordinate";
import { useState } from "react";

export default function Map(props: MapProps) {

    const [coordinates, setCoordinates] = useState<Coordinate[]>(props.coordinates || []);

    return (
        <MapContainer
            center={[18.4920742619256, 73.85777907978081]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: '500px' }}
        >

            <TileLayer
                attribution="React Movies"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <HandleMapClick
                setCoordinates={(coordinate) => {
                    setCoordinates([coordinate]);

                    if (props.setCoordinates) {
                        props.setCoordinates(coordinate);
                    }
                }}
            />

            {coordinates.map((coordinate) => (
                <Marker
                    key={coordinate.latitude + coordinate.longitude}
                    position={[coordinate.latitude, coordinate.longitude]}
                >
                    {coordinate.message ? (
                        <Popup>{coordinate.message}</Popup>
                    ) : null}
                </Marker>
            ))}

        </MapContainer>
    );
}

function HandleMapClick(props: { setCoordinates: (coordinate: Coordinate) => void }) {

    useMapEvent('click', (e) => {
        props.setCoordinates({
            latitude: e.latlng.lat,
            longitude: e.latlng.lng
        });
    });

    return null;
}

interface MapProps {
    coordinates?: Coordinate[];
    setCoordinates?: (coordinate: Coordinate) => void;
}